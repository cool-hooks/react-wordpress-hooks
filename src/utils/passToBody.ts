export const passToBody = (options: object) => {
  const urlencoded = new URLSearchParams();

  Object.entries(options).map(([key, value]) => {
    urlencoded.append(key, value);
  });

  return urlencoded;
};
