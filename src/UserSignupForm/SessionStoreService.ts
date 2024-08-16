import { useEffect, useState } from "react";

export function useStorage(
  key: string,
  defaultValue: string = ""
): [string, (value: string) => void] {
  const [value, setValue] = useState(
    sessionStorage.getItem(key) ?? defaultValue
  );

  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
