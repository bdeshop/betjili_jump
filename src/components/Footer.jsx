import React from "react";
import { useUI } from "../hooks/useUI";

export const Footer = () => {
  const { darkMode } = useUI();

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-600"
      } text-white p-4 text-center`}
    >
      &copy; 2024 My Application
    </footer>
  );
};
