import React, { useState } from "react";
import Chart from "react-google-charts";

//https://team42-crm.herokuapp.com/order/getProductQuarterlyRevenueInYear

export default function StatisticsSubComponent4({ left, top }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [numItems, setNumItems] = useState(-1);
  const [number, setNumber] = useState(5);

  const [productRevenue, setProductsRevenue] = useState([
    ["Quarter"],
    [1],
    [2],
    [3],
    [4],
  ]);

  const checkLoading = () => {
    for (var i = 0; i < productRevenue.length; i++) {
      if (productRevenue[i].length !== numItems) return false;
    }
    return setLoading(true);
  };

  const loadproducts = () => {
    fetch(
      "https://team42-crm.herokuapp.com/order/getAllSoldProducts" +
        localStorage.getItem("businessID"),
      {
        method: "post",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          sortOrder: "DESC",
          limit: number,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setProducts(data.products);
          setNumItems(data.products.length + 1);
        } else {
          alert(data.status_message);
        }
      });
  };

  const loadKeyStatistic = () => {
    if (products.length === 0) loadproducts();
    else {
      if (numItems === -1) return;
      for (var i = 0; i < products.length; i++) {
        fetch(
          "https://team42-crm.herokuapp.com/order/getProductQuarterlyRevenueInYear",
          {
            method: "post",
            mode: "cors",
            headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json",
            }),
            body: JSON.stringify({
              product_id: products[i].product_id,
              currentYear: 2019,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status_code === 200) {
              productRevenue[0].push(data.product[0]);
              productRevenue[1].push(data.product[0].revenue);
              productRevenue[2].push(data.product[1].revenue);
              productRevenue[3].push(data.product[2].revenue);
              productRevenue[4].push(data.product[3].revenue);
              checkLoading();
            } else {
              alert(data.status_message);
            }
          });
      }
    }
  };

  React.useEffect(() => {
    loadKeyStatistic();
  }, [products, numItems]);

  React.useEffect(() => {
    if (numItems === -1 || number < 1) return;
    setLoading(false);
    setProducts([]);
    setProductsRevenue([["Quarter"], [1], [2], [3], [4]]);
    setNumItems(-1);
    loadKeyStatistic();
  }, [number]);

  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      {loading && (
        <Chart
          width={"100%%"}
          height={"100%"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={productRevenue}
          options={{
            hAxis: {
              title: "Quarter",
            },
            vAxis: {
              title: "Number of Items sold",
            },
            series: {
              1: { curveType: "function" },
              2: { curveType: "function" },
            },
            chartArea: { left: "15%", width: "60%", height: "60%", top: "20%" },
            backgroundColor: { fill: "ffffff" },
            legend: { position: "right", alignment: "end" },
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
      )}
      <input
        className="stats4input"
        style={{ top: "8%" }}
        type="number"
        placeholder="Enter Email Address"
        value={number}
        min={1}
        disabled={!loading}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="chartTitle">Item Sales Per Quarter</h2>
    </div>
  );
}
