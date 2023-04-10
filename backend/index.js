// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");
// import express from "express";


exports.getQuotes = async (req, res,next) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html", {
    waitUntil: "domcontentloaded",
  });
  // Get page data

  const keys = [
    'S.No.',
    'date',
    'ministry',
    'notification'
  ]

  const result = await page.$$eval('body > div.market-research.onload > div:nth-child(2) > div > div > div > div > div > div > div > div > table > tbody > tr', rows => {
  
    return Array.from(rows, row => {
      const columns = row.querySelectorAll('td');
      return Array.from(columns, column => 
        column.innerText);
    });
    // return Array.from(rows, row => {
    //   const columns = row.querySelectorAll('td');
    //   const tdvalue =  Array.from(columns, column => 
    //     column.innerText);
    // });
  });
  await browser.close();
  // return {result};
    console.log(result);

      try {  
        // console.log(policy);
        res.set('Access-Control-Allow-Origin','*')
        return res.status(200).json({
          "policy": result
        })
      } catch (error) {
        console.log(error);

      }
  
};



// const data = await getQuotes();
// const policy = data.result;
// console.log(data);
// Start the scraping

// const app  = express();;

// app.get('/api/v1/webscrapping', async(req,res,next) => {
//   try {
    
//     // console.log(policy);
//     const result = await getQuotes();
//     return res.status(200).json({
//       "policy": result.result
//     })
//   } catch (error) {
//     console.log(error);
//   }
// })

// app.use(cors());

// app.use((req, res, next) => {
//       res.setHeader("Access-control-Allow-Origin", "*")
//       res.setHeader("Access-control-Allow-Headers", "*")
//   });

// app.listen(4000, () => {
//   console.log('listening on port 4000');
// })
