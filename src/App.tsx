import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import {
  HISTORY_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
} from "./lib/constants";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import History from "./pages/History";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";
import RequireUnauth from "./components/RequireUnauth";

function App() {
  return (
    <Routes>
      {/* Permit all */}
      <Route path={HOME_PAGE} element={<Home />} />

      {/* Authorized only */}
      <Route element={<RequireAuth />}>
        <Route path={PROFILE_PAGE} element={<Profile />} />
        <Route path={HISTORY_PAGE} element={<History />} />
      </Route>

      {/* Unauthorized only */}
      <Route element={<RequireUnauth />}>
        <Route path={LOGIN_PAGE} element={<Login />} />
        <Route path={REGISTER_PAGE} element={<Register />} />
      </Route>

      {/* Everything else */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
