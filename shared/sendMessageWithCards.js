const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const webex = require('webex/env');
const {checkStatus} = require('./checkStatus');
exports.sendMessageWithCards = async () => {
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
            text:"hello world",
            attachments:{
              "contentType":"application/vnd.microsoft.card.adaptive",
              "content":{
               "type": "AdaptiveCard",
               "body": [
                   {
                      "id":"columnset",
                       "type": "ColumnSet",
                       "columns": [
                           {
                              "id":"column1", 
                              "type": "Column",
                               "items": [
                                   {
                                       "type": "Image",
                                       "style": "Person",
                                       "url": "https://developer.webex.com/images/webex-teams-logo.png",
                                       "size": "Medium",
                                       "id": "logo",
                                       "height": "50px"
                                   }
                               ],
                               "width": "auto"
                           },
                           {
                              "id":"column2",
                               "type": "Column",
                               "items": [
                                   {
                                       "type": "TextBlock",
                                       "text": "Cisco Webex Teams",
                                       "weight": "Lighter",
                                       "color": "Accent",
                                       "id": "title"
                                   },
                                   {
                                       "type": "TextBlock",
                                       "weight": "Bolder",
                                       "text": "Interviewee Information",
                                       "horizontalAlignment": "Left",
                                       "wrap": true,
                                       "color": "Light",
                                       "size": "Large",
                                       "spacing": "Small",
                                       "id": "header"
                                   }
                               ],
                               "width": "stretch"
                           }
                       ]
                   },
                   {
                       "type": "Input.Text",
                       "placeholder": "Name",
                       "id": "name"
                   },
                   {
                       "type": "Input.ChoiceSet",
                       "placeholder": "Gender",
                       "choices": [
                           {
                               "title": "Male",
                               "value": "Male"
                           },
                           {
                               "title": "Female",
                               "value": "Female"
                           }
                       ],
                       "id": "gender"
                   },
                   {
                       "type": "ActionSet",
                       "actions": [
                           {
                               "type": "Action.Submit",
                               "title": "Subscribe to our newsletter",
                               "data": {
                                   "subscribe": true
                               },
                               "id": "submit"
                           }
                       ],
                       "horizontalAlignment": "Left",
                       "spacing": "None"
                   }
               ],
               "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
               "version": "1.2",
               "id": "card"
           }
           }


            })
    });
    const response = await checkStatus(fetchResponse);
    const finalResponse = await response.json();
    console.log("Messages with cards sent successfully");
  return finalResponse;
  }
  catch(error){
    console.log(error);
  }  

}
