export const passToBody = (options: object) => {
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
