import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        break;
    }
  }, [theme]);

  return (
    <>
      <div className=" bg-gray-100 dark:bg-slate-800">
        <div className=" duration-100 rounded-xl p-2">
          {options?.map((opt) => {
            return (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`${
                  theme === opt.text && "text-sky-600 "
                } w-8 h-8 leading-9 text-xl rounded-full`}
              >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            );
          })}
        </div>
        <Navbar />
        <UploadForm />
        <Cards />
      </div>
    </>
  );
}

export default App;
