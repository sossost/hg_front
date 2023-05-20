import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import NewPostPage from "./pages/post/NewPostPage";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/manage/newpost" element={<NewPostPage />} />
            <Route path="/manage/newpost/:postId" element={<NewPostPage />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
