const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const webex = require('webex/env');
const {checkStatus} = require('./checkStatus');
exports.createRoom = async function() {
const accessToken = process.env.WEBEX_ACCESS_TOKEN;
  try{
  const fetchResponse =   await fetch(`${process.env.WEBEX_URL}/rooms`,
    {
        method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
            "title": "Patience new Interview Exercise Room"
            })
    });
    const response = await checkStatus(fetchResponse);
    const finalResponse = await response.json();
    console.log("final response: " +  JSON.stringify(finalResponse));
    console.log("Room with room id: " + finalResponse.id + "was successfully created");
    return finalResponse;
  }
  catch(error){
    console.log("Failed to create room: " + error);
  }  

}