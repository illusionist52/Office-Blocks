import { useForm } from "react-hook-form";
import "./signup.css"
import Button from "../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { checkUser, createUser } from "../services/apiUsers";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const { register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const {mutate, isLoading} = useMutation({
    mutationFn: createUser,
    onSuccess: ()=>{
      toast.success("Account created successfully")
    }
  })


  function onSubmit(data) {
    mutate(data);
    if(data.role==="Renter"){
    navigate("/renter_dashboard")
    }
    else{
    navigate("/user_dashboard")
    }
  }
  
  return <>
  <div className="containerss">
        <div className="left">
            <div className="background-image"></div>
        </div>
        <div className="form-container">
           

                <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="account-name">Create an Account</h2>
                    <input type="text" placeholder="username" {...register("username", {required: true})} />
                    <input type="password" placeholder="password" {...register("password", {required: true, max: 19, min: 8})} />
                    <select {...register("role", { required: true })}>
                      <option value="Renter">Renter</option>
                      <option value="Rentee">Rentee</option>
                    </select>

                    <Button style={"btn secondary-btn btnp"} type={"submit"} >
              Signup
          </Button>
               </form>
     </div>
     </div>
     </>
    
}
export default Signup;