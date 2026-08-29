import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, restore any existing session from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('sms_user');
      const token = localStorage.getItem('sms_token');
      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Failed to restore session', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('sms_user', JSON.stringify(userData));
    localStorage.setItem('sms_token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('sms_user');
    localStorage.removeItem('sms_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
