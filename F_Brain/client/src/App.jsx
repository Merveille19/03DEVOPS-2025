import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages générales
import HomePage from "./pages/HomePage";
import CompanyList from "./pages/CompanyList";

// Étudiant
import StudentRegister from "./pages/Student/Register";
import StudentProfile from "./pages/Student/Profile";

// Entreprise
import CompanyRegister from "./pages/Company/Register";
import CompanyDashboard from "./pages/Company/Dashboard";

// Admin
import AdminDashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entreprises" element={<CompanyList />} />

        {/* Étudiant */}
        <Route path="/etudiant/inscription" element={<StudentRegister />} />
        <Route path="/etudiant/profil" element={<StudentProfile />} />

        {/* Entreprise */}
        <Route path="/entreprise/inscription" element={<CompanyRegister />} />
        <Route path="/entreprise/dashboard" element={<CompanyDashboard />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


