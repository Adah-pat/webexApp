const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const webex = require('webex/env');
const {checkStatus} = require('./checkStatus');
exports.listRoom = async function() {
const accessToken = process.env.WEBEX_ACCESS_TOKEN;
    try{
const fetchResponse =   await fetch(`${process.env.WEBEX_URL}/rooms`,
    {
        method: 'GET',
            headers: {
              'Content-Type': 'application/json',
               Authorization: `Bearer ${accessToken}`
            }
    });
    const response = await checkStatus(fetchResponse);
    const finalResponse = await response.json();
    console.log("The room List: " +  JSON.stringify(finalResponse));

    return finalResponse;
  }
  catch(error){
    console.log("Failed to list room: " + error);
  }  

}