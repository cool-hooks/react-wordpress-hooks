export const serialize = (object: any): string => {
  const string: string[] = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      string.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
      );
    }
  }

  return string.length > 0 ? '?' + string.join('&') : '';
};
