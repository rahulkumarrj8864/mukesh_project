import React, { useState } from "react";
import { CChart, CChartLine } from "@coreui/react-chartjs";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Legend, LineElement, Tooltip,Title,CategoryScale,LinearScale,PointElement,Filler } from "chart.js";
ChartJS.register (
    Title, Tooltip,LineElement, Legend,CategoryScale,LinearScale,PointElement,Filler
)

export default function App() {
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
    labels:["2004","2008","2012","2016","2020"],
    datasets:[
        {
            label:"Medals",
            data: [1,3,6,2,7,0],
            backgroundColor:'yellow',
            borderColor:"blue",
        }
    ]
})

  

  return (
    <>
      <table border="1" style={{ width: "20%" }}>
        <tr>
          <th>Id</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
        {data.map((res) => (
          <tr key={res.Id}>
            <td style={{ textAlign: "center" }}>{res.Id}</td>
            <td style={{ textAlign: "center" }}>{res.Year}</td>
            <td style={{ textAlign: "center" }}>{res.Medals}</td>
          </tr>
        ))}
      </table>
      <br />       
      <br/>
      <div style={{width:"500px",height:"500px"}}>
      <Line  data={datas}></Line>
      </div>
    </>
  );
}
