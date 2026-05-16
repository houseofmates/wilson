import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({
  isLoadingAuth: true,
  isLoadingPublicSettings: true,
  authError: null,
  navigateToLogin: () => {}
});

export function AuthProvider({ children }) {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    // Simulate auth check or insert real logic here
    const timer = setTimeout(() => {
      setIsLoadingAuth(false);
      setIsLoadingPublicSettings(false);
      setAuthError(null);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    isLoadingAuth,
    isLoadingPublicSettings,
    authError,
    navigateToLogin: () => {
      window.location.href = '/login';
    },
    setAuthError,
    setIsLoadingAuth,
    setIsLoadingPublicSettings
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}


