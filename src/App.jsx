import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./authpages/LoginForm";
import SignupForm from "./authpages/SignupForm";
import AppLayout from "./layouts/AppLayout";
import OverviewPage from "./pages/OverviewPage";
import TransactionPage from "./pages/TransactionPage";
import WalletPage from "./pages/WalletPage";
import GoalsPage from "./pages/GoalsPage";
import SettingsPage from "./pages/SettingsPage";
import BudgetPage from "./pages/BudgetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>

        {/* Main pages */}
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="budget" element={<BudgetPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
