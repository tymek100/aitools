import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy auth logic
    navigate('/dashboard');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">Login</h1>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}
