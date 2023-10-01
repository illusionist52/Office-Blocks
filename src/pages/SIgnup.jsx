import { useForm } from "react-hook-form";
import "./signup.css"
import Button from "../ui/Button";
function Signup() {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
 
  
  return <>
  <div className="containerss">
        <div className="left">
            <div className="background-image"></div>
        </div>
        <div className="form-container">
           

                <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Create an Account</h2>
                    <input type="text" placeholder="Name" {...register("Name", {required: true})} />
                    <input type="password" placeholder="Password" {...register("Password", {required: true, max: 19, min: 8})} />
                    <select {...register("Role", { required: true })}>
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