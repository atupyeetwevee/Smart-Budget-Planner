import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./authpages/LoginForm";
import SignupForm from "./authpages/SignupForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
