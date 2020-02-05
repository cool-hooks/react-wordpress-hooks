export const serializeOptions = (options: any): string => {
  const parts: string[] = [];

  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      parts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`
      );
    }
  }

  return parts.length > 0 ? '?' + parts.join('&') : '';
};
