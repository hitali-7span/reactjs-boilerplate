import ForgotPasswordImage from "../assets/images/forgot_password.png";
import Logo from "../assets/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/auth-layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (value) => {
    console.log("value", value);
    navigate("/reset-password");
  };

  return (
    <>
      <AuthLayout image={ForgotPasswordImage}>
        <div className="w-full">
          <img src={Logo} alt="logo" />
          <h5 className="font-medium mt-4 text-lg">Forgot Password? 🔒</h5>
          <p className="mb-5">
            Enter your email and we will send you instructions to reset your
            password
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              inputClassName="w-full"
              placeholder="Enter Your Email"
              label="Email"
              {...register("email")}
              error={errors.email?.message}
            />
            <div className="mt-6">
              <Button className="w-full custom-btn text-white" type="submit">
                Send Reset Link
              </Button>
            </div>
          </form>
          <div className="text-center my-4">
            <NavLink
              className="text-blue-500 flex justify-center items-center"
              activeClassName="is-active"
              to="/login"
              exact
            >
              Back to Login
            </NavLink>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
