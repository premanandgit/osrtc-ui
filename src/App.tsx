import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from "./components/AuthPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import './App.css'
const App: React.FC = () => {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/signin" element={<AuthPage type="signin" />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
