// TODO refactor
export const passToBody = (options: object) => {
  const urlencoded = new URLSearchParams();

  Object.entries(options).forEach(([key, value]) => {
    urlencoded.append(key, value);
  });

  return urlencoded;
};
