import React, { useState } from "react";
import Chart from "react-google-charts";

//https://team42-crm.herokuapp.com/order/getProductQuarterlyRevenueInYear

export default function StatisticsSubComponent4({ left, top }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productRevenue, setProductsRevenue] = useState([
    ["Quarter", "1", "2", "3", "4", "5"],
    [1],
    [2],
    [3],
    [4],
  ]);

  const checkLoading = () => {
    for (var i = 0; i < productRevenue.length; i++) {
      if (productRevenue[i].length < 6) return false;
    }
    console.log("yes");
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
          limit: 5,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setProducts(data.products);
        } else {
          alert(data.status_message);
        }
      });
  };

  const loadKeyStatistic = () => {
    if (products.length === 0) loadproducts();
    else {
      console.log(products);
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
              productRevenue[1].push(data.product[0]);
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
  }, [products]);

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
      <h2 className="chartTitle">Item Sales Per Quarter</h2>
    </div>
  );
}
