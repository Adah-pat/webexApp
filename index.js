const { createRoom } = require('./shared/createRoom');
const {listRoom } = require('./shared/listRoom');
const { sendMessage } = require('./shared/sendMessage');
const { sendMessageWithCards } = require('./shared/sendMessageWithCards');
createRoom();
listRoom();
sendMessage();
sendMessageWithCards();