import React from "react";
import { MainLayout } from "../layouts/MainLayout";

export const Home = () => {
  return (
    <>
      <MainLayout>
        <h2 className="text-xl font-semibold mb-4">Welcome to the Home Page</h2>
        <p>This is the main content of the home page.</p>
      </MainLayout>
    </>
  );
};
