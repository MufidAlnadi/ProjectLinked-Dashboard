import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="users" element={<Blogs />} />
         <Route path="jobs" element={<Blogs />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
