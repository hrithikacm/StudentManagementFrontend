import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './pages/StudentList'
import StudentForm from './pages/StudentForm'

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

