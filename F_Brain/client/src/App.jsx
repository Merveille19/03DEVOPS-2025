import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentRegister from './pages/Student/Register';
import StudentProfile from './pages/Student/Profile';
import CompanyRegister from './pages/Company/Register';
import CompanyDashboard from './pages/Company/Dashboard';
import AdminDashboard from './pages/Admin/Dashboard';
import CompanyList from './pages/CompanyList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/companies" element={<CompanyList />} />
      </Routes>
    </Router>
  );
}

export default App;

