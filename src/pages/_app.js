import ThemeContext from "@/context/ThemeContext";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [neonDark, setNeonDark] = useState(false)

  return (
    <>
      <ThemeContext.Provider value={{ setNeonDark, neonDark }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  )
}
