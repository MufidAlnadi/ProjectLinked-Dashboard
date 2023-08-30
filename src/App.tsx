import { BrowserRouter, Routes, Route } from "react-router-dom"
import Jobs from "./pages/Jobs.tsx";
import JobsApplications from "./pages/JobsApplications.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Users from "./pages/Users.tsx";

function App() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Jobs />} />
         <Route path="jobsapplications" element={<JobsApplications />} />
         <Route path="users" element={<Users />} />
         <Route path="contactus" element={<ContactUs />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
