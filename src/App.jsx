import "./App.css";
import { Home } from "./pages/Home";
import { ConfigProvider } from "antd";
import { useUI } from "./hooks/useUI";

function App() {
  const { darkMode } = useUI();
  // AntD theme tokens
  const theme = {
    token: {
      colorPrimary: darkMode ? "#1890ff" : "#722ed1",
      colorBgBase: darkMode ? "#141414" : "#ffffff",
      colorTextBase: darkMode ? "#ffffff" : "#000000",
    },
    algorithm: darkMode
      ? ConfigProvider.theme.darkAlgorithm
      : ConfigProvider.theme.defaultAlgorithm,
  };
  return (
    <>
      <ConfigProvider theme={theme}>
        <Home />
      </ConfigProvider>
    </>
  );
}

export default App;
