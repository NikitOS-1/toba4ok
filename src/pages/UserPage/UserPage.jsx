import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./UserPage.scss";
import { useEffect, useState } from "react";
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
  const [avatarLetter, setAvatarLetter] = useState(null);

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
        setAvatarLetter((prev) => (prev = user.email[0].toUpperCase()));
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
      <div className="welcome_user">
        <h2>Wellcome {name || email}!</h2>
      </div>
      <div className="ava_desc">
        <div className="avatar_name">
          {!photo ? (
            <div className="avatar_letter">{avatarLetter}</div>
          ) : (
            <div className="avatar_photo">
              <img src={photo} alt="Photo" />
            </div>
          )}
          {!name ? (
            <p className="avatarEmail">Email: {email}</p>
          ) : (
            <>
              <p className="avatarName">Name: {name}</p>
              <p className="avatarEmail">Email: {email}</p>
            </>
          )}
        </div>
        <div className="description_user">
          <p>
            This is your personal account, all your purchases will be saved here
          </p>
        </div>
      </div>
      <div className="user_table">
        <div className="title_table">
          <p>Your order history is displayed here</p>
        </div>
        <div className="table_orders_history">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};
export default UserPage;
