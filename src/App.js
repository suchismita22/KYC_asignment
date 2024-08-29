import React from "react";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Header
import AppHeader from "./Components/AppHeader/AppHeader";

//Sidebar
import SideBar from "./Components/SideBar/SideBar";

//Routes
import { routes } from "./Routes/RouteConfig";

const { Header, Content, Sider } = Layout;

const layoutStyle = {
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
};

const headerStyle = {
  position: "fixed",
  textAlign: "center",
  color: "#fff",
  height: 50,
  paddingInline: 0,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
  zIndex: 1,
};

const siderStyle = {
  lineHeight: "120px",
  color: "white",
  top: 60,
  height: "100vh",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "30px",
  marginTop: 60,
  width: "100%",
  height: "80%",
};

function AppContent() {
  return (
    <Routes>
      {routes.map(({ path, element, index }) => (
        <Route index={index} key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [siderWidth, setSiderWidth] = React.useState("18%");

  const handleSideBar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <AppHeader handleSideBar={handleSideBar} />
          </Header>
          <Layout>
              <Sider 
                width={siderWidth} 
                style={siderStyle}
                collapsed={collapsed}
              >
                <SideBar />
              </Sider>
            <Content style={contentStyle}>
              <AppContent />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
