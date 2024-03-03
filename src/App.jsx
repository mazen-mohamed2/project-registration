import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";
import Form from "./pages/form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<PrivateRoute />}>
    <Route path="/" element={  <Form/> } />
        </Route>
    <Route path="/login" element={<LoginPage />} />

   
  
</Routes>
    </BrowserRouter>
    </>
  )
}