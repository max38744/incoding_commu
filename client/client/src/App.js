import React from "react";
import SignUpPage from "./components/signup/signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
