import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChannelMessage from "./pages/home/ChannelMessage";
import DirectMessage from "./pages/home/DirectMessage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./router/ProtectedRoute";
import PublicRoute from "./router/PublicRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route path="channel/:channelName" element={<ChannelMessage />} />
        <Route path="direct/:userName" element={<DirectMessage />} />
      </Route>
    </Routes>
  );
}

export default App;
