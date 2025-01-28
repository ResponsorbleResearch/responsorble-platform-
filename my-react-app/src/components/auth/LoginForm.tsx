import { pb } from '../../services/pocketbase';

export default function LoginForm() {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
      await pb.collection('users').authWithPassword(
        formData.get('username') as string,
        formData.get('password') as string
      );
      // Redirect to Home
      window.location.href = '/';
    } catch (err) {
      alert('Login failed: ' + (err as Error).message);
    }
  };

  return (
    <div>
      <h1>RESPONSORBLE</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}