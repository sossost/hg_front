import Editor from "./components/UI/Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import MobileFirstPage from "./components/MobileFirstPage";
// import InstagramGallery from "./components/MobileFirstPage";
// import ReactForm from "./components/ReactForm";
import LoginPage from "./pages/auth/LoginPage";
import { RecoilRoot } from "recoil";
import SignUpPage from "./pages/auth/SignUpPage";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Router>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
