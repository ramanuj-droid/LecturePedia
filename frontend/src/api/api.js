const BASE_URL = import.meta.env.VITE_API_URL;

console.log("API URL:", import.meta.env.VITE_API_URL);

export const api = {
  register: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // 🔥 add here too
      body: JSON.stringify(data)
    });

    return res.json();
  },

  login: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    });

    return res.json();
  },

  logout: async () => {
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include"
    });

    return res.json();
  },

  getMe: async () => {
    const res = await fetch(`${BASE_URL}/auth/me`, {
      credentials: "include"
    });

    return res.json();
  }
};