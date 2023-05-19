import Editor from "./components/UI/Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import MobileFirstPage from "./components/MobileFirstPage";
// import InstagramGallery from "./components/MobileFirstPage";
// import ReactForm from "./components/ReactForm";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    
      <Router>
        <Layout>
        {/* <Routes>
          <Route path="/" element={<ReactForm />} />
        </Routes> */}

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </Layout>
      </Router>

  );
}

export default App;
