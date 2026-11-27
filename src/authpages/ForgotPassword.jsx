import { useState } from "react";
import { Link } from "react-router-dom";
import { useResetPassword } from "@/hooks/useAuth";

function ForgotPassword() {
  const { mutateAsync, isPending } = useResetPassword();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await mutateAsync(email);

      setMessage(
        "If an account exists for this email, a recovery link will be sent.",
      );
    } catch (error) {
      setMessage(error.message || "Unable to process your request.");
    }
  };

  return (
    <div>
      <h1>Forgot Password?</h1>

      <p>Enter your email to receive a recovery link.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        {message && <p>{message}</p>}

        <button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Reset Password"}
        </button>
      </form>

      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default ForgotPassword;
