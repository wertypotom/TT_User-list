const useLocalStorage = () => {
  const getFromLocalStorage = <T,>(value: string): T => {
    return JSON.parse(localStorage.getItem(value) as string) as T;
  };

  const setToLocalStorage = <T,>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { setToLocalStorage, getFromLocalStorage };
};

export default useLocalStorage;
