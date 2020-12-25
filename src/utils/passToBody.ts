export const passToBody = <T extends Record<string, string>>(options: T) => {
  const urlencoded = new URLSearchParams();

  Object.entries(options).map(([key, value]) => {
    urlencoded.append(key, value);
  });

  return urlencoded;
};
