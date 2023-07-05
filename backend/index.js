const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");


exports.getQuotes = async (req, res,next) => {
  res.set('Access-Control-Allow-Origin','*')
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html", {
    waitUntil: "domcontentloaded",
  });

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
  });
  await browser.close();
    // console.log(result);

      try { 
        res.set('Access-Control-Allow-Origin','*')
        return res.status(200).json({
          "policy": result
        })
      } catch (error) {
        console.log(error);

      }
  
};