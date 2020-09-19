export const debounce = (callback: (...args: any[]) => any, wait: number) => {
  let timeout: any = null;

  return function (...args: any[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
