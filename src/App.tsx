import Editor from "./components/UI/Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/auth/LoginPage";
import { RecoilRoot } from "recoil";
import SignUpPage from "./pages/auth/SignUpPage";
import FindUserId from "./pages/auth/FindUserId";
import FindPassword from "./pages/auth/FindPassword";

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
            <Route path="/finduserid" element={<FindUserId />} />
          </Routes>
          <Routes>
            <Route path="/findpassword" element={<FindPassword />} />
          </Routes>
        </Router>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
