import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const AppRouter = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
    </BrowserRouter>
}

export default AppRouter
