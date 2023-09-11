import { useState } from "react";

const Item = (item) => {
  const {
    id,
    scraping,
    linkPost,
    linkGroup,
    linkProfile,
    message,
    userIter,
    postBuild,
    postStatus,
  } = item.item;

  const [selectValue, setSelectValue] = useState("yes");

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{scraping}</td>
        <td>{linkPost}</td>
        <td>{linkGroup}</td>
        <td>
          <div className="linkProfile">{linkProfile}</div>
        </td>
        <td>
          <div className="linkProfile">{message}</div>
        </td>
        <td>
          <select
            value={selectValue}
            onChange={(e) => handleSelectChange(e)}
            style={{ cursor: "pointer" }}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </td>
        <td>
          <div>{userIter && <div className="linkProfile">{userIter}</div>}</div>
        </td>
        <td>
          <div>
            {postBuild && <div className="linkProfile">{postBuild}</div>}
          </div>
        </td>
        <td>{postStatus}</td>
      </tr>
    </>
  );
};
export default Item;
