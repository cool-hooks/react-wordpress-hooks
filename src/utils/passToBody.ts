export const passToBody = (options: object) => {
  // TODO
  if (!options) {
    return options;
  }

  const urlencoded = new URLSearchParams();

  Object.entries(options).map(([key, value]) => {
    urlencoded.append(key, value);
  });

  return urlencoded;
};
