export const serialize = (options: any): string => {
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

export const optionsToBody = (options: object) => {
  if (!options) {
    return options;
  }

  const params = Object.entries(options);

  const urlencoded = new URLSearchParams();

  for (let [key, value] of params) {
    urlencoded.append(key, value);
  }

  return urlencoded;
};
