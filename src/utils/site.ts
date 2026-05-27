const rawBase = import.meta.env.BASE_URL || '/';

export const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function sitePath(path = '') {
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}${cleanPath}`;
}
