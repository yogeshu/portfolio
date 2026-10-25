import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

try {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
} catch (err) {
  console.error("Root Mount Error:", err);
  var d = document.createElement('div');
  d.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:#09090b;color:#f87171;padding:28px;font-family:monospace;font-size:14px;z-index:999999;white-space:pre-wrap;overflow:auto;line-height:1.6;';
  d.innerHTML = '<h2 style="color:#ef4444;margin-bottom:12px;">⚠️ React Mount Error:</h2>' + err.message + '\n\nStack:\n' + err.stack;
  document.body.appendChild(d);
}
