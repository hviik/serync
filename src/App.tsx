import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { SignupPage } from "@/pages/auth/SignupPage";
import { CoreFeaturesPage } from "@/pages/CoreFeaturesPage";
import { ContactPage } from "@/pages/ContactPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { MarketplacePage } from "@/pages/MarketplacePage";
import { AgentDetailsPage } from "@/pages/AgentDetailsPage";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { AgentDashboard } from "@/pages/dashboard/AgentDashboard";

import { SubmitAgentPage } from "@/pages/SubmitAgentPage";

// Placeholder pages for now
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-24 container mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-muted-foreground">Coming Soon</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<CoreFeaturesPage />} />
          <Route path="/core-features" element={<CoreFeaturesPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/marketplace/:agentId" element={<AgentDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<AgentDashboard />} />
            <Route path="agents" element={<PlaceholderPage title="My Agents" />} />
            <Route path="submit-agent" element={<SubmitAgentPage />} />
            <Route path="earnings" element={<PlaceholderPage title="Earnings" />} />
            <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
