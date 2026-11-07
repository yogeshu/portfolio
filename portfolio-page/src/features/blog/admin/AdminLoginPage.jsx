// src/features/blog/admin/AdminLoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Shield, Lock, Eye, EyeOff, AlertCircle, ArrowLeft, KeyRound, CheckCircle2, ShieldAlert } from 'lucide-react';
import {
  loginAdmin,
  isAuthenticated,
  checkLockout,
  isAdminConfigured,
  setupInitialPassword,
  isProductionLocked,
  isProductionEnvironment,
} from './adminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/admin';

  const [isProdLocked, setIsProdLocked] = useState(false);
  const [isSetupMode, setIsSetupMode] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [lockoutStatus, setLockoutStatus] = useState({ isLocked: false, remainingSeconds: 0 });

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/admin', { replace: true });
      return;
    }

    if (isProductionLocked()) {
      setIsProdLocked(true);
      return;
    }

    const configured = isAdminConfigured();
    // Setup mode is strictly allowed on localhost for initial setup
    setIsSetupMode(!configured && !isProductionEnvironment());

    const status = checkLockout();
    setLockoutStatus(status);

    if (status.isLocked) {
      const interval = setInterval(() => {
        const updated = checkLockout();
        setLockoutStatus(updated);
        if (!updated.isLocked) clearInterval(interval);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isSetupMode) {
      if (!password || password.length < 8) {
        setError('Passphrase must be at least 8 characters long.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      setLoading(true);
      try {
        await setupInitialPassword(password);
        navigate(from, { replace: true });
      } catch (err) {
        setError(err.message || 'Failed to initialize passphrase.');
      } finally {
        setLoading(false);
      }
    } else {
      if (!password.trim()) {
        setError('Please enter your admin passphrase.');
        return;
      }

      setLoading(true);
      try {
        await loginAdmin(password.trim());
        navigate(from, { replace: true });
      } catch (err) {
        if (err.message === 'PRODUCTION_LOCKED') {
          setIsProdLocked(true);
        } else if (err.message === 'SETUP_REQUIRED') {
          setIsSetupMode(true);
          setError('No admin passphrase configured yet. Please set your master passphrase.');
        } else {
          setError(err.message || 'Login failed.');
          setLockoutStatus(checkLockout());
        }
      } finally {
        setLoading(false);
      }
    }
  };

  // If deployed in production without setting VITE_ADMIN_PASSWORD_HASH, block public registration
  if (isProdLocked) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-card/90 backdrop-blur-md border border-destructive/40 rounded-2xl p-6 sm:p-8 shadow-xl text-center space-y-5">
          <div className="mx-auto w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Admin Portal Locked
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This site is deployed in production, but <code className="px-1 py-0.5 rounded bg-secondary font-mono text-foreground font-semibold">VITE_ADMIN_PASSWORD_HASH</code> has not been configured in the hosting environment variables.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              Public passphrase creation is permanently disabled on the live site to prevent unauthorized access.
            </p>
          </div>

          <div className="pt-3 border-t border-border/40">
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-card/80 backdrop-blur-md border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xl text-left space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            {isSetupMode ? <KeyRound className="h-6 w-6" /> : <Shield className="h-6 w-6" />}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {isSetupMode ? 'Setup Local Passphrase' : 'Blog CMS Administration'}
          </h1>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {isSetupMode
              ? 'Local development mode detected. Create a local master passphrase for your development environment.'
              : 'Enter your master passphrase to manage articles, categories, and publications.'}
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {lockoutStatus.isLocked && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs">
            Too many failed attempts. Account locked for {lockoutStatus.remainingSeconds} seconds.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">
              {isSetupMode ? 'Create Local Passphrase (min 8 chars)' : 'Admin Passphrase'}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type={showPassword ? 'text' : 'password'}
                autoComplete={isSetupMode ? 'new-password' : 'current-password'}
                placeholder={isSetupMode ? 'Enter a strong passphrase...' : 'Enter your passphrase...'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={lockoutStatus.isLocked || loading}
                autoFocus
                className="pl-9 pr-10 h-11 bg-secondary/40 border-border"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? 'Hide passphrase' : 'Show passphrase'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {isSetupMode && (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Confirm Passphrase</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Re-enter your passphrase..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  className="pl-9 pr-10 h-11 bg-secondary/40 border-border"
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={lockoutStatus.isLocked || loading}
            className="w-full h-11 text-sm font-semibold"
          >
            {loading
              ? 'Processing...'
              : isSetupMode
              ? 'Save Passphrase & Enter CMS'
              : 'Sign In to Admin Panel'}
          </Button>
        </form>

        <div className="pt-2 border-t border-border/40 text-center space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>Cryptographically hashed • Zero plain-text leaks</span>
          </div>
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Return to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
