import { useState } from "react";

const Item = (item) => {
  const { number, order, address, date, amount } = item.item;

  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{order}</td>
        <td>{address}</td>
        <td>{date}</td>
        <td>{amount}</td>
      </tr>
    </>
  );
};
export default Item;
