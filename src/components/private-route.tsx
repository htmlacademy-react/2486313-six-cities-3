import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../const/const.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({ authorizationStatus, children } : PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={'../login/'}/>
  );
}

export {PrivateRoute};
