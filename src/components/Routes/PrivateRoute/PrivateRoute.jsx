import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { isUserLoggedIn } from "../../../redux/selectors";

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(isUserLoggedIn);
    return (
    
  <Route {...routeProps}>
    {isLoggedIn ? children : <Redirect to="/authorization" />}
    </Route>       
  );
};
export default PrivateRoute;
