import { useState } from "react";
import Calculator from "./Calculator";
import Quiz from "./Quiz";

const Main = () => {
  const [selectMenu, setSelectMenu] = useState<JSX.Element>(<Calculator />);
  const handleSelectMenu = (e: JSX.Element) => {
    setSelectMenu(e);
  };

  return (
    <div className="flex flex-col h-screen relative">
      <header className="top-0 w-screen bg-gray-300 p-5 fixed text-end text-white">
        Project by IM
      </header>
      <aside className="w-1/6 h-full bg-gray-200 p-4 mt-16 fixed">
        <ul>
          <li>
            <a
              className="block p-2 hover:bg-gray-300 cursor-pointer"
              onClick={() => handleSelectMenu(<Calculator />)}
            >
              계산기
            </a>
          </li>
          <li>
            <a
              className="block p-2 hover:bg-gray-300 cursor-pointer"
              onClick={() => handleSelectMenu(<Quiz />)}
            >
              퀴즈
            </a>
          </li>
        </ul>
      </aside>
      <div className="flex-grow ml-[16.666667%] flex items-center justify-center">
        <div className="text-center">{selectMenu}</div>
      </div>
      <footer className="bottom-0 w-screen bg-gray-500 p-6 fixed text-white text-end">
        <p>&copy; {new Date().getFullYear()} calculator</p>
      </footer>
    </div>
  );
};

export default Main;
