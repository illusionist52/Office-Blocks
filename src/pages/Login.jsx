import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import "./login.scss";
import { useState } from "react";
function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  function handleData(){

  }
  
  return (
    <div className="login-box">
      <div className="img" >
        <h1 className="h1">Officeblocks</h1>
        <h3 className="h3">Unlocking the doors to your workspace</h3>
      </div>
      
      <div className="inputbox" >
        <h2 className="h2">Welcome back</h2>
        <p>Please enter your details.</p>
        <form onSubmit={handleSubmit((data)=> setData(JSON.stringify(data)))}>
          <div className="grid2cols">
            <div className="form__group field">
              <input
                type="text"
                id="username"
                className="form__field"
                placeholder="username"
                {...register("username")}
                onChange={(e)=>setUsername(e.target.value)}
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
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <label htmlFor="username" className="form__label">
                Password
              </label>
              </div>
            
          </div>
          {/* <button type="submit">Login</button> */}
          <Button to={"/user_dashboard"} style={"btn secondary-btn btnp"} type={"submit"} >
            Login
          </Button>
          
        </form>
      </div>
    </div>
  );
}
export default Login;
