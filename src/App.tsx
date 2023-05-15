import Editor from "./components/UI/Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import MobileFirstPage from "./components/MobileFirstPage";
// import InstagramGallery from "./components/MobileFirstPage";
// import ReactForm from "./components/ReactForm";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return (
    <Layout>
      <Router>
        {/* <Routes>
          <Route path="/" element={<ReactForm />} />
        </Routes> */}

        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
