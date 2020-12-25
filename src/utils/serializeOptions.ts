export const serializeOptions = <T extends Record<string, string>>(
  options: T
) => {
  const parts: string[] = [];

  Object.entries(options).map(([key, value]) => {
    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });

  return parts.length > 0 ? `?${parts.join('&')}` : '';
};
