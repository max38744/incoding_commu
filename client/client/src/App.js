import React from "react";
import SignUpPage from "./components/signup/signup";
import LogInPage from "./components/login/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LogInPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
