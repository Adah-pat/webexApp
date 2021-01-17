const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const webex = require('webex/env');
const {checkStatus} = require('./checkStatus');
exports.sendMessage = async function() {
const accessToken = process.env.WEBEX_ACCESS_TOKEN;
    try{
const fetchResponse =   await fetch(`${process.env.WEBEX_URL}/messages`,
    {
        method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
            roomId: process.env.WEBEX_ROOM_ID,
            text:"hello world"
            })
    });
    const response = await checkStatus(fetchResponse);
    const finalResponse = await response.json();
    console.log("Messages : " +  JSON.stringify(finalResponse) + "\n");
    return finalResponse;
  }
  catch(error){
    console.log(error);
  }  

}