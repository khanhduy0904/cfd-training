import logo from "./logo.svg";
// import './App.css';
import "./assets/css/style.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Team from "./pages/CFDTeam";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Detail from "./pages/Detail";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";
import Collab from "./pages/Collab";
import PopupLogin from "./components/PopupLogin";
import CoursePage from "./pages/CoursePage";
import Loading from "./components/Loading";
import React, { useRef } from "react";
import AuthProvider from "./core/hook/useAuth";
import PrivateRouter from "./core/PrivateRouter";
import PopupRegister from "./components/PopupRegister";

export const Context = React.createContext({});

function App() {
  let refLogin = useRef();
  let refRegister = useRef();
  const openPopupLogin = () => {
    refLogin.current.style.display = "flex";
    refRegister.current.style.display = "none";
  };
  const openPopupRegister = () => {

    refLogin.current.style.display = "none";
    refRegister.current.style.display = "flex";
    
  };
  const closePopupLogin = () => {
    refLogin.current.style.display = "none";
  };
  const closePopupRegister = () => {

    refRegister.current.style.display = "none";
    
  };

  return (
    <AuthProvider>
      <Context.Provider value={{ openPopupLogin, closePopupLogin, openPopupRegister, closePopupRegister }}>
        <BrowserRouter>
          <PopupLogin ref={refLogin} />
          <PopupRegister ref={refRegister} />
          <Header />
          <Loading />
          <Switch>
            
            <PrivateRouter path="/thong-tin-ca-nhan" component={Profile} />
            <PrivateRouter  path="/dang-ky/:slug" component={Register} />
            <Route path="/du-an" component={Project} />
            <Route path="/chi-tiet/:slug" component={Detail} />
            <Route path="/du-an" component={Project} />
            <Route path="/khoa-hoc" component={CoursePage} />
            <Route path="/lien-he" component={Collab} />
            <Route path="/" component={Home} exact />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </AuthProvider>
  );
}

export default App;



