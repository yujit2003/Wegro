import React, { Fragment, useEffect, useState } from 'react'
import Policy from './image/policy.png'
import axios from "axios"
import "./styles/govpol.css"



const GovtPol = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/webscrapping')
    .then((res) => {
      setdata(res.data.policy);
    })
  }, [])

  return (
    <div class="container mt-5">
      <div class="row">
      <h1 class="govern_heading">BELOW ARE SOME OF THE STARTUP RELATED REGULATIONS AND NOTIFICATIONS</h1>
      
      <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Date of Amendment</th>
              <th>Ministry/Department</th>
              <th>Notification</th>
            </tr>
          </thead>
          <tbody>
             {data &&
               data.map((product) => (
                <tr>
                <td class="team">{product[0]}</td>
                <td class="team">{product[1]}</td>
                <td class="team">{product[2]}</td>
                <td class="points">{product[3]}</td>
              </tr>
               ))}
            
          </tbody>
        </table>
</div>
          <div className = "imp"> 
            scrapped from link -> <br></br>
            <a href="https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html">Click Here</a>
          </div>
</div>
  )
}

export default GovtPol;
