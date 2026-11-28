import { useState } from "react";
import { Link } from "react-router-dom";
import { useResetPassword } from "@/hooks/useAuth";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <>
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Forgot Password?</h1>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {message && <p className="text-green-500">{message}</p>}
          </Field>

          <Field>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Sending..." : "Reset Password"}
            </Button>
          </Field>

          <FieldDescription className="text-center">
            <Link to="/login">Back to Login</Link>
          </FieldDescription>
        </FieldGroup>
      </form>
    </>
  );
}

export default ForgotPassword;
