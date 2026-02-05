import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Navigation from "./components/Navigation"
import "./App.css"

const Dashboard = lazy(() => import("./components/Dashboard"))
const Company = lazy(() => import("./components/Company"))
const Help = lazy(() => import("./components/Help"))

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <div className="app-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/company" element={<Company />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
