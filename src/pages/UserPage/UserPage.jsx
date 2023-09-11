import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./UserPage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/userData";
import Table from "../../components/Table/Table";

let data = [
  {
    number: 1,
    order: "Tobac UNITY 'Fruit MIX'",
    address: "Nikolaev",
    date: "09.11.2023",
    amount: "149 UAN",
  },
];

const UserPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            id: user.uid,
            tokken: user.refreshToken,
            createTimeAccount: user.metadata.creationTime,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [auth]);
  const { id, tokken, createTimeAccount, name, email, photo } = useSelector(
    (state) => state.user
  );

  return (
    <div className="user_container">
      <p>
        <img src={photo} alt="Photo" />
        <h2>{name}</h2>
        <h3>{email}</h3>
        <p>Your order history is displayed here</p>
        <div className="table_orders_history">
          <Table data={data} />
        </div>
      </p>
    </div>
  );
};
export default UserPage;
