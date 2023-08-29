import { BrowserRouter, Routes, Route } from "react-router-dom"
import Jobs from "./Jobs.tsx";
import JobsApplications from "./JobsApplications.tsx";
import ContactUs from "./ContactUs.tsx";
import Users from "./Users.tsx";

function App() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Jobs />} />
         <Route path="jobapplications" element={<JobsApplications />} />
         <Route path="contactus" element={<ContactUs />} />
         <Route path="users" element={<Users />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
