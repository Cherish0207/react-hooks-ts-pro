import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { Home, Mine, Profile } from "./routes/index";
import store from "./store";
import history from "@/history";
import "./assets/style/common.less";
const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "mine", element: <Mine /> },
    { path: "/profile", element: <Profile /> },
  ]);
  return routes;
};
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zh_CN}>
        <main className="main-container">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </main>
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
