import { Link, NavLink, Route, Routes } from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostFeedPage from "./pages/PostFeedPage";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<UserProfilePage />} />
        <Route path="/Feed"  >
          <Route path="List" element={<PostFeedPage />} />
          <Route path=":PostID" element={<PostDetailsPage />} />
        </Route>
        <Route path="Create" element={<CreatePostPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
