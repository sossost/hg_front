import Editor from "./components/UI/Editor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MobileFirstPage from "./components/MobileFirstPage";
import InstagramGallery from "./components/MobileFirstPage";
import ReactForm from "./components/ReactForm";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" Component={ReactForm} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
