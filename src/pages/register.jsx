import AuthLayout from "../components/layout/auth-layout";
import RegisterImage from "../assets/images/register.png";
import Logo from "../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
  userName: z.string().nonempty("User name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    console.log("value", value);
  };

  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <AuthLayout image={RegisterImage}>
      <div className="w-full">
        <img src={Logo} alt="logo" />
        <h5 className="font-medium mt-4 text-lg">Adventure starts here 🚀</h5>
        <p className="mb-5">Make your app management easy and fun!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputClassName="w-full"
            placeholder="Enter Your Username"
            label="Username"
            {...register("userName")}
            error={errors.userName?.message}
          />
          <div className="my-4">
            <Input
              inputClassName="w-full"
              placeholder="Enter Your Email"
              label="Email"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>
          <div className="my-4">
            <Input
              inputClassName="w-full"
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
              <span className="text-gray-700">
                I agree to privacy policy & terms
              </span>
            </label>
          </div>
          <Button className="w-full custom-btn text-white" type="submit">
            Sign Up
          </Button>
        </form>
        <div className="text-center my-4">
          <p className="mb-0">
            Already have an account?
            <span>
              <NavLink
                className="text-blue-500 ml-2"
                activeClassName="is-active"
                to="/"
                exact
              >
                Sign in instead
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
    </AuthLayout>
  );
};

export default Register;
