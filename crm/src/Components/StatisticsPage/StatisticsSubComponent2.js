import React from "react";
import Chart from "react-google-charts";
import { NonceProvider } from "react-select";

export default function StatisticsSubCompoent2({ left, top, dashboard }) {
  const [proportion, setProportion] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const info = {
    NumberEmployee: 100,
    NumberExternalVendor: 150,
    NumberCutomers: 200,
  };

  const loadData = async () => {
    await fetch(
      "https://team42-crm.herokuapp.com/contact/proportion/" +
        localStorage.getItem("businessID"),
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProportion(data.proportion[0]);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="statisticsDisplay" style={{ left: left, top: top }}>
      {!loading && (
        <React.Fragment>
          <Chart
            width={"100%"}
            height={"100%"}
            chartType="PieChart"
            loader={<h2 class="chartTitle">Loading...</h2>}
            data={[
              ["Type", "Number"],
              ["Employee", proportion.total_employees],
              ["External Vendor", proportion.total_vendors],
              ["Customer", proportion.customers],
            ]}
            options={{
              title: "Distribution of Contacts",
              chartArea: {
                left: "5%",
                width: "90%",
                height: "75%",
                top: "20%",
              },
              titlePosition: "none",
              legend: { position: "right", alignment: "center" },
              backgroundColor: { fill: "#ffffff" },

              is3D: true,
            }}
            rootProps={{ "data-testid": "2" }}
          />
          <h2 class="chartTitle">Contact Proportion</h2>
        </React.Fragment>
      )}
    </div>
  );
}

StatisticsSubCompoent2.defaultProp = {
  dashboard: false,
};
