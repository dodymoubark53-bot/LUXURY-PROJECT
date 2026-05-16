import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } else {
      throw new Error(data.message || 'Invalid email or password');
    }
  };

  const register = async (name, email, phone, password) => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, password })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to register');
    }
    return data;
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', { method: 'POST' });
    } catch(err) {
      // Ignore network errors on logout
    }
    setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
