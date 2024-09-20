import ThemeContext from "@/context/ThemeContext";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [neonDark, setNeonDark] = useState(false)
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Mock login function
    if (username === 'user' && password === 'password') {
      setUser({ username });
      return true;
    }
    return false;
  };

  const signup = (username, password) => {
    // Mock signup function
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <ThemeContext.Provider value={{ setNeonDark, neonDark, user, login, signup, logout }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  )
}
