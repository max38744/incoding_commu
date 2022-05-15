import React from "react";
import SignUpPage from "./components/signup/signup";
import LogInPage from "./components/login/login";
import ForgotPage from "./components/forgot/forgot"
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LogInPage/>} />
          <Route path="/forgot" element={<ForgotPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
