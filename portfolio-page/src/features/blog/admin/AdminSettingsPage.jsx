// src/features/blog/admin/AdminSettingsPage.jsx
import React, { useState } from 'react';
import {
  Download,
  Upload,
  Lock,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Database,
  Shield,
} from 'lucide-react';
import {
  exportAllBlogData,
  importBlogData,
  resetBlogDataToDefaults,
} from '@/lib/blogStorage';
import { changeAdminPassword } from './adminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminSettingsPage = () => {
  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState(null);
  const [passwordLoading, setPasswordLoading] = useState(false);

  // Backup & Import state
  const [backupMsg, setBackupMsg] = useState(null);
  const [overwriteMode, setOverwriteMode] = useState(false);

  const handleExportBackup = () => {
    try {
      const data = exportAllBlogData();
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      a.href = url;
      a.download = `yogeshbhavsar-blog-backup-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setBackupMsg({ type: 'success', message: 'Backup JSON downloaded successfully.' });
    } catch (e) {
      setBackupMsg({ type: 'error', message: 'Failed to export backup.' });
    }
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        importBlogData(json, { overwrite: overwriteMode });
        setBackupMsg({
          type: 'success',
          message: `Successfully imported ${json.articles?.length || 0} articles! Refreshing...`,
        });
        setTimeout(() => window.location.reload(), 1500);
      } catch (err) {
        setBackupMsg({
          type: 'error',
          message: `Failed to import JSON: ${err.message}`,
        });
      }
    };
    reader.readAsText(file);
  };

  const handleResetDefaults = () => {
    if (
      confirm(
        'Warning: This will reset all blog articles, categories, and tags back to the initial production seed state. Proceed?'
      )
    ) {
      resetBlogDataToDefaults();
      setBackupMsg({
        type: 'success',
        message: 'Blog reset to default seed articles. Reloading...',
      });
      setTimeout(() => window.location.reload(), 1000);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: 'error', message: 'New passwords do not match.' });
      return;
    }

    setPasswordLoading(true);
    setPasswordMsg(null);

    try {
      await changeAdminPassword(currentPassword, newPassword);
      setPasswordMsg({ type: 'success', message: 'Password updated successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setPasswordMsg({ type: 'error', message: err.message || 'Failed to change password.' });
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="space-y-8 text-left max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Backup, Migration & Admin Settings
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Export your publications for data portability, restore backups, or update access credentials.
        </p>
      </div>

      {backupMsg && (
        <div
          className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
            backupMsg.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
              : 'bg-destructive/10 border border-destructive/20 text-destructive'
          }`}
        >
          {backupMsg.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0" />
          )}
          <span>{backupMsg.message}</span>
        </div>
      )}

      {/* Backup and Data Portability */}
      <div className="p-6 rounded-2xl bg-card border border-border/70 space-y-6 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            <span>Data Portability & Full Blog Backup</span>
          </h2>
          <p className="text-xs text-muted-foreground">
            Download your articles, categories, and tags as a structured JSON archive for migration or safekeeping.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Export Box */}
          <div className="p-4 rounded-xl border border-border/60 bg-secondary/20 space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Export Backup (JSON)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Export all published articles, drafts, and categories into a single portable backup file.
            </p>
            <Button onClick={handleExportBackup} size="sm" className="gap-2 text-xs">
              <Download className="h-3.5 w-3.5" />
              <span>Export Everything</span>
            </Button>
          </div>

          {/* Import Box */}
          <div className="p-4 rounded-xl border border-border/60 bg-secondary/20 space-y-3">
            <h3 className="font-semibold text-sm text-foreground">Import / Restore Backup</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Upload a previously exported JSON backup to merge or restore your articles.
            </p>
            <div className="flex items-center gap-2">
              <label className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 cursor-pointer shadow-xs">
                <Upload className="h-3.5 w-3.5" />
                <span>Select JSON File</span>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>
            <label className="flex items-center gap-2 text-[11px] text-muted-foreground cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={overwriteMode}
                onChange={(e) => setOverwriteMode(e.target.checked)}
                className="rounded border-border"
              />
              <span>Overwrite existing data instead of merging</span>
            </label>
          </div>
        </div>

        {/* Reset Defaults */}
        <div className="pt-4 border-t border-border/40 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-foreground">Restore Factory Seed Articles</p>
            <p className="text-[11px] text-muted-foreground">
              Resets content back to Yogesh Bhavsar's default initial production articles.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetDefaults}
            className="text-xs text-muted-foreground hover:text-destructive"
          >
            <RefreshCcw className="h-3.5 w-3.5 mr-1" />
            Reset Defaults
          </Button>
        </div>
      </div>

      {/* Password Management */}
      <div className="p-6 rounded-2xl bg-card border border-border/70 space-y-4 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Change Admin Password</span>
          </h2>
          <p className="text-xs text-muted-foreground">
            Update your master admin password used to authenticate into the CMS.
          </p>
        </div>

        {passwordMsg && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
              passwordMsg.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                : 'bg-destructive/10 border border-destructive/20 text-destructive'
            }`}
          >
            <span>{passwordMsg.message}</span>
          </div>
        )}

        <form onSubmit={handleChangePassword} className="space-y-3 max-w-md pt-2">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Current Password</label>
            <Input
              type="password"
              placeholder="Current admin password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="text-xs h-9 bg-secondary/30"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">New Password (min 8 chars)</label>
            <Input
              type="password"
              placeholder="New secure password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="text-xs h-9 bg-secondary/30"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Confirm New Password</label>
            <Input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-xs h-9 bg-secondary/30"
            />
          </div>

          <Button type="submit" size="sm" disabled={passwordLoading} className="text-xs">
            {passwordLoading ? 'Updating...' : 'Update Password'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
