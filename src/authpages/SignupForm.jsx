import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const { mutateAsync, isPending, error } = useSignUp(); //Connecting registration function

  //Creating a place to store form information
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  //listens to whatever is typed into an input field and updates formData
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setMessageType("error");
      return; //Don't execute the remaining code
    }

    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      setMessageType("error");
      return;
    }

    //calling the registration function you received from useRegister()
    try {
      const data = await mutateAsync({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Registration response:", data);

      setMessage(
        data.session
          ? "Registration successful!"
          : "Account created! Please check your email.",
      );
      setMessageType("success");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setMessage(err.message || "Registration failed. Please try again.");
      setMessageType("error");
    }
  };
  return (
    <>
      <form onSubmit={handleSignUp} className="p-6 md:p-8">
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-xs text-balance text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="eg. Aylee Mayson"
              required
              onChange={handleChange}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="m@example.com"
              required
              onChange={handleChange}
            />
            <FieldDescription className="text-xs">
              We&apos;ll use this to contact you. We will not share your email
              with anyone else.
            </FieldDescription>
          </Field>
          <Field>
            <Field className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                {/* {error && (
                  <p
                    className={`text-sm text-center ${
                      message.includes("successfully") ||
                      message.includes("Account created")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )} */}
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {/* {error && (
                  <p
                    className={`text-sm text-center ${
                      message.includes("successfully") ||
                      message.includes("Account created")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )} */}
              </Field>
            </Field>
            <FieldDescription className="text-xs">
              Must be at least 8 characters long.
            </FieldDescription>
            {message && (
              <p
                className={`text-sm ${
                  messageType === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </Field>
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating account..." : "Create Account"}
            </Button>
          </Field>
          <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-xs">
            Or continue with
          </FieldSeparator>
          <Field>
            <Button variant="outline" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Sign up with Google</span>
            </Button>
          </Field>
          <FieldDescription className="text-center">
            Already have an account? <Link to="/login">Sign in</Link>
          </FieldDescription>
        </FieldGroup>
      </form>
    </>
  );
}

export default SignupForm;
