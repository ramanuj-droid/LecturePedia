import { useState } from "react";
import { api } from "../api/api";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (data) => {
    try {
      setLoading(true);
      setError(null);

      // 🔐 deviceId logic
      const deviceId =
        localStorage.getItem("deviceId") || crypto.randomUUID();

      localStorage.setItem("deviceId", deviceId);

      const result = await api.login({
        ...data,
        deviceId
      });

      if (!result.success) {
        throw new Error(result.message);
      }

      return result;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;