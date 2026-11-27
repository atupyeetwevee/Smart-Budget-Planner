import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdatePassword } from "@/hooks/useAuth";

function UpdatePassword() {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useUpdatePassword();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      await mutateAsync(password);

      setMessage("Password updated successfully.");

      navigate("/login");
    } catch (error) {
      setMessage(error.message || "Unable to update password.");
    }
  };

  return (
    <div>
      <h1>Create New Password</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {message && <p>{message}</p>}

        <button type="submit" disabled={isPending}>
          {isPending ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default UpdatePassword;
