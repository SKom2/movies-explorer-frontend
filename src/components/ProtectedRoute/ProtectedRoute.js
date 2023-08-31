import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
    return (
        props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />
    )
}

function AuthRoute({ element: Component, ...props }) {
    return (
        !props.isLoggedIn ? <Component {...props} /> : <Navigate to="/movies" replace />
    )
}

export { ProtectedRoute, AuthRoute }
