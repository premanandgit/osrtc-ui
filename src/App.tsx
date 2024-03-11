import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from "./components/AuthPage";
import Layout from "./components/Layout";
import './App.css'
const App: React.FC = () => {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route index element={<div>Home</div>} />
          <Route path="/signin" element={<AuthPage type="signin" />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
