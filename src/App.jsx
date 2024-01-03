import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import { SignUp } from "./pages/SignUp";
import { ProtectedRouter } from "./components/ProtectedRouter";
import { ProtectedRouterLogin } from "./components/ProtectedRouterLogin";
import { Error } from "./pages/Error";
import GlobalThemes from "./style/GlobalThemes";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalThemes />
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
              <Route
                path="/sign-up"
                element={
                  <ProtectedRouterLogin>
                    <SignUp />
                  </ProtectedRouterLogin>
                }
              />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
