import { useDispatch } from "react-redux";
import { deleteItem, toUpdateItem } from "../actions";

const ItemCard = ({ item }) => {
  const { _id, name, category, quantity, price } = item;
  const dispatch = useDispatch();

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{category}</td>
      <td>x{quantity}</td>
      <td>{price}/-</td>
      <td className="action">
        <button onClick={() => dispatch(toUpdateItem(item))}>Update</button>
        <button onClick={() => dispatch(deleteItem(_id))}>Delete</button>
      </td>
    </tr>
  );
};

export { ItemCard };
