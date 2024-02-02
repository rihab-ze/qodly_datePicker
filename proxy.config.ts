/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProxyOptions } from 'vite';

export function initProxy(env: Record<string, string>): Record<string, string | ProxyOptions> {
  const TARGET = env.PROXY_SERVER || 'https://127.0.0.1:7443';
  const IS_API_SECURE = env.API_SECURE === 'true';
  const API_KEY = env.API_KEY || '';

  function sanitizeSetCookie(cookie = '') {
    return cookie.replace(/; secure/i, '');
  }

  const proxyOpts: ProxyOptions = {
    target: TARGET,
    secure: IS_API_SECURE,
    ws: true,
    headers: {
      'api-key': API_KEY,
    },
    changeOrigin: true,
    configure(proxy) {
      proxy.on('proxyRes', (proxyRes) => {
        if (proxyRes.headers['Set-Cookie']) {
          if (Array.isArray(proxyRes.headers['Set-Cookie'])) {
            proxyRes.headers['Set-Cookie'] = proxyRes.headers['Set-Cookie'].map(sanitizeSetCookie);
          } else {
            proxyRes.headers['Set-Cookie'] = sanitizeSetCookie(proxyRes.headers['Set-Cookie']);
          }
        }
      });
    },
  };

  return [
    '/rest',
    '/$lib',
    '/api',
    '/login.html',
    '/css',
    '/img',
    '/js',
    '/LSP',
    '/remoteDebugger',
    '/dataexplorer',
    '/$shared',
  ].reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: proxyOpts,
    }),
    {},
  );
}
