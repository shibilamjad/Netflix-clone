import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import { SignUp } from "./pages/SignUp";
import { ProtectedRouter } from "./components/ProtectedRouter";

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
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
