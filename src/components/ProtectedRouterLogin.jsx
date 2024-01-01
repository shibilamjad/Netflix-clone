import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function ProtectedRouterLogin({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(
    function () {
      if (isLoggedIn === true) navigate("/");
    },
    [isLoggedIn, navigate]
  );

  console.log(isLoggedIn);
  if (isLoggedIn === false) return children;
}
