import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Curriculum from "./pages/cv/Curriculum";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import Skill from "./pages/skills/Skill";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Certifications from "./pages/Certifications/Certifications";
import Footer from "./components/Footer/Footer";
import PdfDoc from "./pages/pdf/PdfDoc";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import Tasks from "./pages/tasks/Tasks";
import { TaskForm } from "./pages/tasks/TaskForm";
function App() {
  //https://1gt9jcx5-4000.use2.devtunnels.ms/profile

  return (
    <>
      <div className="header">
        <Navbar />
      </div>

      <div className="box-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdf" element={<PdfDoc />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<Profile />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/task/:id" element={<TaskForm />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
