import { BrowserRouter,Route, Routes } from "react-router-dom";
import AdmenP from "./pages/AdmenP";
// import DashboardP from "./pages/DashboardP";
// import LoginP from "./pages/LoginP";

function App() {
  // const isAuthe = localStorage.getItem("isAuthe") || "";
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={isAuthe ? <DashboardP /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginP />} /> */}
        <Route path="/" element={<AdmenP/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
