export const serializeOptions = (options: object) => {
  const parts: string[] = [];

  Object.entries(options).map(([key, value]) => {
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });

  return parts.length > 0 ? `?${parts.join('&')}` : '';
};
