export const readLocalStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") {
    return fallback;
  }
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (error) {
    // If error also return initialValue
    console.error(error);
    return fallback;
  }
};

export const writeLocalStorage = <T,>(key: string, value: T) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};
