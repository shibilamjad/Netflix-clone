import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import { SignUp } from "./pages/SignUp";
import { ProtectedRouter } from "./components/ProtectedRouter";
import { ProtectedRouterLogin } from "./components/ProtectedRouterLogin";
import { Error } from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <HomePage />
              </ProtectedRouter>
            }
          />
          <Route
            path="/sign-in"
            element={
              <ProtectedRouterLogin>
                <SignIn />
              </ProtectedRouterLogin>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
