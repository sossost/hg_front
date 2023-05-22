import Editor from "./components/UI/Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/auth/LoginPage";
import { RecoilRoot } from "recoil";
import SignUpPage from "./pages/auth/SignUpPage";
import FindUserIdPage from "./pages/auth/FindUserIdPage";
import FindPasswordPage from "./pages/auth/FindPasswordPage";

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
          <Routes>
            <Route path="/finduserid" element={<FindUserIdPage />} />
          </Routes>
          <Routes>
            <Route path="/findpassword" element={<FindPasswordPage />} />
          </Routes>
        </Router>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
