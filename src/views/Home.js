import React from "react";
import { useSetRecoilState } from "recoil";
import { theme } from "../store";

function Home(props) {
  const [currentTheme, setCurrentTheme] = useSetRecoilState(theme);
  return (
    <div className="bg-primary">
      <div className="container">You are selecting the {currentTheme} theme.</div>
    </div>
  );
}

export default Home;
