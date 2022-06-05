import React, { useContext } from 'react';
import NavBar from './components/Navbar';
import Chatbot from './components/Chatbot';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import './style.css';
import initFontAwesome from "./utils/initFontAwesome";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Settings from './components/Settings';

initFontAwesome();

export default function App() {
  const { isLoading, error } = useAuth0();

  // const [state, dispatch] = useColorTheme();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter history={history}>
      <NavBar />
      {/* <Chatbot /> */}

      <Footer />
      <Routes>
        <Route path="/" exact element={<Content />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
