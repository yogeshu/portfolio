// src/features/blog/admin/AdminLayout.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  FileEdit,
  FolderTree,
  Settings,
  ExternalLink,
  LogOut,
  ShieldCheck,
  PlusCircle,
} from 'lucide-react';
import { isAuthenticated, logoutAdmin, getCurrentAdminUser } from './adminAuth';
import { Button } from '@/components/ui/button';

export const AdminProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/admin/login', { state: { from: location.pathname }, replace: true });
    }
  }, [navigate, location]);

  if (!isAuthenticated()) {
    return <div className="min-h-screen bg-background" />;
  }

  return children;
};

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getCurrentAdminUser();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login', { replace: true });
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'New Article', path: '/admin/editor', icon: PlusCircle },
    { label: 'Categories & Tags', path: '/admin/taxonomy', icon: FolderTree },
    { label: 'Backups & Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col text-left">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-card/90 backdrop-blur-md border-b border-border/70 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/admin" className="flex items-center gap-2 text-foreground font-bold text-base hover:text-primary transition-colors">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span>Yogesh Bhavsar <span className="text-xs px-2 py-0.5 rounded font-mono font-normal bg-secondary text-secondary-foreground ml-1">CMS</span></span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-xs gap-1 text-muted-foreground hover:text-foreground">
            <a href="/blog" target="_blank" rel="noopener noreferrer">
              <span>Live Blog</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="text-xs gap-1.5 hover:text-destructive hover:border-destructive/40"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </header>

      {/* Main Admin Content Body */}
      <main className="flex-grow p-4 sm:p-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
