import React, { useContext } from 'react';
import NavBar from './components/Navbar';
import Chatbot from './components/Chatbot';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import './style.css';
import initFontAwesome from "./utils/initFontAwesome";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading"
import Profile from './components/Profile';
import Settings from './components/Settings';
import useColorTheme from './hooks/useColorTheme';

initFontAwesome();

export default function App() {
  const { isLoading, error } = useAuth0();

  const [ThemeContext, dispatch] = useColorTheme();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter history={history}>
      <ThemeContext.Provider value={"dark"}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<div></div>} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
