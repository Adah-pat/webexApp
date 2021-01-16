const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const webex = require('webex/env');
const {checkStatus} = require('./checkStatus');
const deleteRoom = async function() {
const accessToken = process.env.WEBEX_ACCESS_TOKEN;
//Replace the roomId value with the room Id of the room you want to delete
const roomId = "Y2lzY29zcGFyazovL3VybjpURUFNOmV1LWNlbnRyYWwtMV9rL1JPT00vOWZjNmM4NDAtNTgxZS0xMWViLWIwZDAtNTE3NmQwNDUyMzky";
    try{
const fetchResponse =   await fetch(`${process.env.WEBEX_URL}/rooms/${roomId}`,
    {
        method: 'DELETE',
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
    });
    const response = await checkStatus(fetchResponse);
    const finalResponse = await response;
    console.log("Room deleted");

    return finalResponse;
  }
  catch(error){
    console.log("Failed to delete room: " + error);
  }  
}

deleteRoom();