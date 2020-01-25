export const serializeOptions = (options: object): string => {
  const string: string[] = [];

  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      string.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`
      );
    }
  }

  return string.length > 0 ? '?' + string.join('&') : '';
};
