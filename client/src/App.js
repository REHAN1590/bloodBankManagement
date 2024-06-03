import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer, } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Routes/ProtectedRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";
import './App.css';

  
function App() {
  return (
    <>
     <ToastContainer/> 
  <Routes>
    <Route path="/hospital" element={
      <ProtectedRoute>
    <Hospitals/>
    </ProtectedRoute>
    }/>
     <Route path="/hospital-list" element={
      <ProtectedRoute>
    <HospitalList/>
    </ProtectedRoute>
    }/>
     <Route path="/org-list" element={
      <ProtectedRoute>
    <OrgList/>
    </ProtectedRoute>
    }/>
    <Route path="/admin" element={
      <ProtectedRoute>
    <AdminHome/>
    </ProtectedRoute>
    }/>
    <Route path="/donar-list" element={
      <ProtectedRoute>
    <DonarList/>
    </ProtectedRoute>
    }/>
    <Route path="/analytics" element={
      <ProtectedRoute>
    <Analytics/>
    </ProtectedRoute>
    }/>
    <Route path="/consumer" element={
      <ProtectedRoute>
    <Consumer/>
    </ProtectedRoute>
    }/>
     <Route path="/donation" element={
      <ProtectedRoute>
    <Donation/>
    </ProtectedRoute>
    }/>
    <Route path="/organisation" element={
      <ProtectedRoute>
    <OrganisationPage/>
    </ProtectedRoute>
    }/>
      <Route path="/donar" element={
      <ProtectedRoute>
    <Donar/>
    </ProtectedRoute>
    }/>
    <Route path="" element={
      <ProtectedRoute>
    <HomePage/>
    </ProtectedRoute>
    }/>
    <Route path="/Login" element={
      <PublicRoutes>
        <Login />
      </PublicRoutes>
     
    
    
    }/>
    <Route path="/register" element={
    <PublicRoutes>
      <Register />
    </PublicRoutes>
    
    
    }/>

  </Routes>
    </>
  );
}

export default App;
