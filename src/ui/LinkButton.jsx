
import { useNavigate } from "react-router-dom";

function LinkButton({to, style, children}){
  const navigate= useNavigate();
  return <button className={style} onClick={()=> navigate(to)}>{children}</button>
}
export default LinkButton;