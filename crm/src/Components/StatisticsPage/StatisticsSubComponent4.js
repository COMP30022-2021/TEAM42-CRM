import React, { useState } from "react";
import Chart from "react-google-charts";

//https://team42-crm.herokuapp.com/order/getProductQuarterlyRevenueInYear

export default function StatisticsSubComponent4({ left, top, dashboard }) {
  const data = [
    ["Quarter", "1", "2", "3", "4", "5"],
    [1, 0, 0, 0, 0, 0],
    [2, 14.99, 3, 0, 0, 9.98],
    [3, 0, 0, 15.99, 15.99, 0],
    [4, 0, 0, 0, 0, 0],
  ];
  const [loading, setLoading] = useState(-5);
  const [products, setProducts] = useState([1, 2, 3, 4, 5]);
  const [productRevenue, setProductsRevenue] = useState([
    ["Quarter", "1", "2", "3", "4", "5"],
    [1],
    [2],
    [3],
    [4],
  ]);

  const loadKeyStatistic = () => {
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
            product_id: products[i],
            currentYear: 2019,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status_code === 200) {
            console.log(data);
            productRevenue[1].push(data.product[0].revenue);
            productRevenue[2].push(data.product[1].revenue);
            productRevenue[3].push(data.product[2].revenue);
            productRevenue[4].push(data.product[3].revenue);
            console.log(productRevenue);
            setLoading(i);
            console.log(loading);
          } else {
            alert(data.status_message);
          }
        });
    }
    console.log(loading);
  };

  React.useEffect(() => {
    loadKeyStatistic();
  }, []);

  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      {loading === 5 && (
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
      <h2 className="chartTitle">Item Sales Per Quarter</h2>
    </div>
  );
}

StatisticsSubComponent4.defaultProp = {
  dashboard: false,
};
