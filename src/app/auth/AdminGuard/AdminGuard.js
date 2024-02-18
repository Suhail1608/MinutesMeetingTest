'use client'
// withAuth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const adminAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    useEffect(() => {
      const setAuth = async () => {
          const isAdmin = localStorage.getItem("admin");
          setIsAuthenticated(isAdmin);

          return isAdmin; // Return the value for the cleanup function
      }

      const redirectIfNotAdmin = async () => {
          const isAdmin = await setAuth();

          if (!isAdmin) {
              // Redirect to login if not authenticated
              router.push("/admin");
          }
      }

      redirectIfNotAdmin();
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

export default adminAuth;

