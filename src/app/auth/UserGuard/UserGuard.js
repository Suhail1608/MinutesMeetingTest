'use client'
// withAuth.js
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";

const userAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    useEffect(() => {
      const setAuth = async () => {
        const isAuthenticatedValue = JSON.parse(localStorage.getItem("isAuth"))?.auth;
        setIsAuthenticated(isAuthenticatedValue);

        return isAuthenticatedValue; // Return the value for the cleanup function
    }

    const redirectIfNotAuthenticated = async () => {
        const isAuthenticatedValue = await setAuth();

        if (!isAuthenticatedValue) {
            // Redirect to login if not authenticated
            router.push("/");
        }
    }

    redirectIfNotAuthenticated();
    }, []);

    if (isAuthenticated) {
      // Render the wrapped component if authenticated
      return <WrappedComponent {...props} />;
    }

    // Return null if not authenticated (component will not be rendered)
    return null;
  };

  return Wrapper;
};

export default userAuth;

