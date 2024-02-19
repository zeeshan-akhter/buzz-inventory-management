import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, getAllSales } from "../actions";
import { AddNewSale, SaleCard } from "../components";

const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector(({ sales }) => sales);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    dispatch(getAllItems());
    dispatch(getAllSales());
  }, []);

  useEffect(() => {
    setTotalRevenue(
      sales.reduce((sum, { quantity, price }) => sum + quantity * price, 0)
    );
  }, [sales]);

  return (
    <div className="page">
      <h2>Sales</h2>
      <h3>Total Revenue: {totalRevenue}/-</h3>
      <table>
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
          {sales.map((sale) => (
            <SaleCard sale={sale} key={sale._id} />
          ))}
        </tbody>
      </table>
      <h3>Add New Sale</h3>
      <AddNewSale />
    </div>
  );
};

export { Sales };
