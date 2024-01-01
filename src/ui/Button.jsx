import { Link } from "react-router-dom";

function Button({children, to, onClick, style, type}){
  if(to)
  return(
    <Link to={to} className={style}>{children}</Link>
    )  
  
  return <button onClick={onClick} className={style} type={type}>{children}</button>
}
export default Button;