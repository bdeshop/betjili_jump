import React from "react";
import { Button } from "antd";
import { useUI } from "../hooks/useUI";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useUI();

  return (
    <header className="p-4 flex justify-between items-center bg-header text-text">
      <h1 className="text-2xl font-bold">Betjili Jump</h1>
      <Button type="primary" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </header>
  );
};
