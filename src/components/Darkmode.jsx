import { useState, useEffect } from "react";
import DarkModeIcon from "../assets/darkmode.png";
import LightModeIcon from "../assets/lightmode.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      {theme === "light" ? (
        <img
          src={DarkModeIcon}
          alt="Dark mode"
          onClick={() => setTheme("dark")}
          className="w-8 cursor-pointer transition-all"
        />
      ) : (
        <img
          src={LightModeIcon}
          alt="Light mode"
          onClick={() => setTheme("light")}
          className="w-8 cursor-pointer transition-all"
        />
      )}
    </div>
  );
};

export default Darkmode;
