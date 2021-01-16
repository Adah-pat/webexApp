const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const webex = require('webex/env');
const {checkStatus} = require('./checkStatus');
const sendCards = async function() {
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
            roomId: "Y2lzY29zcGFyazovL3VybjpURUFNOmV1LWNlbnRyYWwtMV9rL1JPT00vYTA2MGQxNzAtNTgzNi0xMWViLWI2ZWQtZmI1NTM5MzMzY2Yz",
            text:"hello world again",
            attachments:{
              "contentType":"application/vnd.microsoft.card.adaptive",
              "content":{
                 "type":"AdaptiveCard",
                 "version":"1.0",
                 "body":[
                    {
                       "type":"TextBlock",
                       "text":"Card",
                       "size":"large"
                    }
                 ],
                 "actions":[
                    {
                       "type":"Action.OpenUrl",
                       "url":"http://adaptivecards.io",
                       "title":"Learn More"
                    }
                 ]
              }
           }
            })
    });
    const response = await checkStatus(fetchResponse);
    const finalResponse = await response.json();
    console.log("Messages with cards: " +  JSON.stringify(finalResponse));
  return finalResponse;
  }
  catch(error){
    console.log(error);
  }  

}

sendCards();
