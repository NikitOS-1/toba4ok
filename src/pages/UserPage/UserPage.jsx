import { getAuth } from "firebase/auth";
import "./UserPage.scss";

const UserPage = () => {
  const auth = getAuth();
  console.log(auth);

  return (
    <div className="user_container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
        dignissimos unde suscipit nulla quisquam corporis modi similique quos
        eveniet consequuntur? Nemo ipsam officia quisquam porro saepe qui iusto
        reiciendis suscipit?
      </p>
    </div>
  );
};
export default UserPage;
