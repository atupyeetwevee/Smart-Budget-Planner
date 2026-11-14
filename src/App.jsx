import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./authpages/LoginForm";
import SignupForm from "./authpages/SignupForm";
import AppLayout from "./layouts/AppLayout";
import OverviewPage from "./pages/OverviewPage";

import SettingsPage from "./pages/SettingsPage";
import BudgetPage from "./pages/BudgetPage";
import IncomePage from "./pages/IncomePage";
import SavingsPage from "./pages/SavingsPage";
import FinancialReportPage from "./pages/FinancialReportPage";

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
          <Route path="income&expenses" element={<IncomePage />} />
          <Route path="savings" element={<SavingsPage />} />
          <Route path="goals" element={<FinancialReportPage />} />
          <Route path="budget" element={<BudgetPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
