import MoiveItem from "./movieItem";
import React from "react";
import { ThemeContext } from "@/components/context";

function MoiveScreen() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="relative h-82 w-full bg-[#343c40] flex justify-center py-7">
      <div className="h-80 w-1/2 rounded-md border-4 border-sky-500 bg-[#828a8e] px-5 text-center">
        <h1 className="p-5"> Pick your seats </h1>

        <h1 className="p-5"> move Time </h1>
        <button
          className="px-4 py-2 text-white bg-blue-900 rounded-md"
          onClick={toggleTheme}
        ></button>
      </div>
    </div>
  );
}

export default MoiveScreen;
