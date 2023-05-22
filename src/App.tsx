import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/auth/LoginPage";
import ViewPostPage from "./pages/post/ViewPostPage";
import { RecoilRoot } from "recoil";
import SignUpPage from "./pages/auth/SignUpPage";
import FindUserIdPage from "./pages/auth/FindUserIdPage";
import FindPasswordPage from "./pages/auth/FindPasswordPage";
import HomePage from "./pages/home/HomePage";
import ExplorePage from "./pages/explore/ExplorePage";
import NewPostPage from "./pages/post/NewPostPage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import FollowerPage from "./pages/social/FollowerPage";
import FollowingPage from "./pages/social/FollowingPage";

const queryClient = new QueryClient();
function App() {
  return (
    <RecoilRoot>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              {/* <Route
                path="/profile_completion"
                element={<ProfileCompletionPage />}
              /> */}
              <Route path="/:userId/:postId" element={<ViewPostPage />} />
              <Route path="/find_user_id" element={<FindUserIdPage />} />
              <Route path="/find_password" element={<FindPasswordPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/manage/newpost" element={<NewPostPage />} />
              <Route path="/manage/newpost/:postId" element={<NewPostPage />} />
              {/* <Route path="/:userId" element={<>} /> */}
              <Route path="/manage/profile" element={<EditProfilePage />} />
              <Route path="/follower" element={<FollowerPage />} />
              <Route path="/following" element={<FollowingPage />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
