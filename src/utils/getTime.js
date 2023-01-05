export const getTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const secondsWithZero = String(seconds).padStart(2, "0");
  return `${minutes}:${secondsWithZero}`;
};
