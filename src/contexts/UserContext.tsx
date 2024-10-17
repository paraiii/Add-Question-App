import { createContext, useEffect, useState, type ReactNode } from "react";

interface UserContextType {
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextType | undefined>({
  username: "",
  setUsername: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState(() => {
    const storedValue = localStorage.getItem("username");
    console.log("before parse,", storedValue);
    return storedValue ? JSON.parse(storedValue) : null;
  });

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", JSON.stringify(username));
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
