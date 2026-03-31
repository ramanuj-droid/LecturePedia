import { useEffect, useState } from "react";
import { api } from "../api/api";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.getMe();

        if (res.success) {
          setUser(res.user);
        } else {
          setUser(null); 
        }
      } catch {
        setUser(null); 
      } finally {
        setLoading(false); 
      }
    };

    checkAuth();
  }, []);

  return { user, loading };
};

export default useAuth;