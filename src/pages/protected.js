import { Navigate } from "react-router-dom";

const Protected = ({ children ,isLogin }) => {
  if (isLogin === false) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
export default Protected;
