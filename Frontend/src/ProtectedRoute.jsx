import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Wrap any route element with this to require login before it renders.
// Example: <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
