// TODO clean up
export const serializeOptions = <T extends Record<string, string>>(
  options: T
): string => {
  const parts: string[] = [];

  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      parts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`
      );
    }
  }

  return parts.length > 0 ? '?' + parts.join('&') : '';
};
