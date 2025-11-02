import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useUI } from "../hooks/useUI";
// Main Layout Component
export const MainLayout = ({ children }) => {
  const { darkMode } = useUI();
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);
  return (
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      <Header /> <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
};
