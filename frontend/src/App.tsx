import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import YourMemoriesPage from "./pages/YourMemoriesPage";
import PublicMemoriesPage from "./pages/PublicMemoriesPage";
import ProfilePage from "./pages/ProfilePage";
import { useUserContext } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const { isLoggedIn } = useUserContext();
  return (
    <div className="relative">
      <BrowserRouter>
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <LoginPage /> : <HomePage />}
          />
          {isLoggedIn && (
            <Route path="/memories" element={<YourMemoriesPage />} />
          )}
          <Route path="/public-memories" element={<PublicMemoriesPage />} />
          {isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
