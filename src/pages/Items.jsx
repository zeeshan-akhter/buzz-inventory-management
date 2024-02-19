import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, sortItems } from "../actions";
import { AddUpdateNewItem, ItemCard } from "../components";

const Items = () => {
  const dispatch = useDispatch();
  const { items, toSort } = useSelector(({ items, toSort }) => ({
    items,
    toSort,
  }));
  const sortedItems = [...items].sort((a, b) =>
    a.category > b.category ? 1 : a.category < b.category ? -1 : 0
  );
  const displayArray = toSort ? sortedItems : items;

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div className="page">
      <div>
        <h2>Items</h2>
        <button
          onClick={() => {
            dispatch(sortItems(true));
          }}
        >
          Sort by Category
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>Item Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          {displayArray?.map((item) => (
            <ItemCard item={item} key={item._id} />
          ))}
        </tbody>
      </table>
      <h3>Add New Item</h3>
      <AddUpdateNewItem />
    </div>
  );
};

export { Items };
