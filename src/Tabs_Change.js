import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Legend,
  LineElement,
  Tooltip,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { color } from "@mui/system";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export default function Tabs_Change() {
  const data = [
    {
      Id: 1,
      Year: 2004,
      Medals: 1,
    },
    {
      Id: 2,
      Year: 2008,
      Medals: 3,
    },
    {
      Id: 3,
      Year: 2012,
      Medals: 6,
    },
    {
      Id: 4,
      Year: 2016,
      Medals: 2,
    },
    {
      Id: 5,
      Year: 2020,
      Medals: 7,
    },
  ];
  const [datas, setDatas] = useState({
    labels: ["2004", "2008", "2012", "2016", "2020"],
    datasets: [
      {
        label: "Medals",
        data: [1, 3, 6, 2, 7, 0],
        backgroundColor: "yellow",
        borderColor: "blue",
      },
    ],
  });

  return (
    <ChakraProvider>
      <Tabs align='center'>
        <TabList>
          <Tab>Table</Tab>
          <Tab>Line Chart</Tab>
          <Tab>Details</Tab>
        </TabList>

        <TabPanels style={{marginTop:"0px"}}>
          <TabPanel>
            <table style={{ width: "500px", border: "1px solid black" }}>
              <tr>
                <th style={{ border: "1px solid black" }}>Id</th>
                <th style={{ border: "1px solid black" }}>Year</th>
                <th style={{ border: "1px solid black" }}>Medals</th>
              </tr>
              {data.map((res) => (
                <tr key={res.Id}>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {res.Id}
                  </td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {res.Year}
                  </td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    {res.Medals}
                  </td>
                </tr>
              ))}
            </table>
          </TabPanel>
          <TabPanel>
            <div style={{ width: "500px",height:"600px" }}>
              <Line data={datas}></Line>
            </div>
          </TabPanel>
          <TabPanel style={{ width: "500px",height:"200px",border:"5px",border: '3px solid blue' }}>
            <h2>Personal Details</h2>
            <p>Name:      <span>Mukesh Kumar Sah</span></p>
            <p>Email-Id:  <span>sahumukesh8581@gmail.com</span></p>
            <p>Mobile No: <span>+91.8581082579</span></p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
