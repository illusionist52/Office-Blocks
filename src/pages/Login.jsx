import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import "./login.scss";
import { useEffect, useState } from "react";
import { checkUser } from "../services/apiUsers";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();
  const { data: users, error } = useQuery({
    queryKey: ["users"],
    queryFn: checkUser,
  });
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const existingUser = users.find((user) => user.username === data.username && user.password===data.password);
    if(!existingUser){
      toast.error("User not found")
    }
    existingUser.role === "Renter" && navigate("/renter_dashboard");
    existingUser.role === "Rentee" && navigate("/user_dashboard");
    localStorage.setItem("token",existingUser);
   
  }

  return (
    <div className="login-box">
      <div className="img">
        <h1 className="h1">Officeblocks</h1>
        <h3 className="h3">Unlocking the doors to your workspace</h3>
      </div>

      <div className="inputbox">
        <h2 className="h2">Welcome back</h2>
        <p>Please enter your details.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid2cols">
            <div className="form__group field">
              <input
                type="text"
                id="username"
                className="form__field"
                placeholder="username"
                {...register("username")}
                required
              />
              <label htmlFor="username" className="form__label">
                Username
              </label>
            </div>
            <div className="form__group field">
              <input
                type="password"
                id="password"
                className="form__field"
                placeholder="password"
                {...register("password")}
                required
              />
              <label htmlFor="username" className="form__label">
                Password
              </label>
            </div>
          </div>
          {/* <button type="submit">Login</button> */}
          <Button style={"btn secondary-btn btnp"} type={"submit"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
