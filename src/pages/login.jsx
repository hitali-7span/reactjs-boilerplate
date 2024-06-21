import LoginImage from "../assets/images/3d_login_image.png";
import Logo from "../assets/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/auth-layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import { Form } from "../components/ui/form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    console.log("value", value);
    navigate("/");
  };

  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <AuthLayout image={LoginImage}>
        <Form>
          <div className="w-full">
            <img src={Logo} alt="logo" />
            <h5 className="font-medium mt-4 text-lg">Welcome to Vuexy! 👋🏻</h5>
            <p className="mb-5">
              Please sign-in to your account and start the adventure
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                inputClassName="w-full"
                className=""
                placeholder="Enter Your Email"
                label="Email"
                {...register("email")}
                error={errors.email?.message}
              />
              <div className="my-4">
                <Input
                  inputClassName="w-full"
                  className=""
                  placeholder="Enter Your Password"
                  label="Password"
                  type="password"
                  {...register("password")}
                  error={errors.password?.message}
                />
              </div>
              <div className="my-4 flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <NavLink
                  className="text-blue-500"
                  activeClassName="is-active"
                  to="/forgot-password"
                  exact
                >
                  Forgot Password?
                </NavLink>
              </div>
              <Button className="w-full custom-btn" type="submit">
                Login
              </Button>
            </form>
            <div className="text-center my-4">
              <p className="mb-0">
                New on our platform?
                <span>
                  <NavLink
                    className="text-blue-500 ml-2"
                    activeClassName="is-active"
                    to="/register"
                    exact
                  >
                    Create an account
                  </NavLink>
                </span>
              </p>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2">OR</span>
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
              </div>
            </div>
          </div>
        </Form>
      </AuthLayout>
    </>
  );
};

export default Login;
