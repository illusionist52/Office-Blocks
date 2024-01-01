import LinkButton from "./LinkButton";
import "./tenantapplication.css"
import { AiFillBook } from "react-icons/ai"
function TenantApplication() {
  return (
    <div className="tenant-box">
      <div className="tenant-icon-box">
      <span className="book-icon">
        <AiFillBook/>
      </span>
      <div className="container-sm back-color">
      <h3>Review tenant application</h3>
      <p>Let's review your application and get tips from us</p>
      </div>
      <LinkButton style={"btn primary-btn "}>Review my application</LinkButton>
      </div>
    </div>
  );
}
export default TenantApplication;
