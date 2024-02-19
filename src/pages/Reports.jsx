import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, getAllSales } from "../actions";

const Reports = () => {
  const dispatch = useDispatch();
  const { items, sales } = useSelector(({ items, sales }) => ({
    items,
    sales,
  }));

  const itemsData = items.reduce(
    (final, { name, quantity, price }) => [...final, [name, quantity * price]],
    [["Item", "Amount"]]
  );

  const salesData = sales.reduce(
    (final, { item, quantity, price }) => [...final, [item, quantity * price]],
    [["Sale", "Amount"]]
  );

  const itemOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: "Inventory Report",
  };

  const salesOptions = {
    ...itemOptions,
    title: "Sales Report",
  };

  useEffect(() => {
    dispatch(getAllItems());
    dispatch(getAllSales());
  }, []);

  return (
    <div className="page">
      <h2>Reports</h2>
      <div className="charts">
        <Chart chartType="PieChart" data={itemsData} options={itemOptions} />
        <Chart chartType="PieChart" data={salesData} options={salesOptions} />
      </div>
    </div>
  );
};

export { Reports };
