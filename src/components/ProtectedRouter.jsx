import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(
    function () {
      if (!isLoggedIn) navigate("/sign-in");
    },
    [isLoggedIn, navigate]
  );

  if (isLoggedIn) return children;
}
