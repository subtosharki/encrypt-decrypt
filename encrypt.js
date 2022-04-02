const { everything } = require('./vars');

const encrypt = (msg) => {
  let finalMsg = '';
  const splitMsg = msg.split('');
  for (let pos = 0; pos < splitMsg.length; pos++) {
	  for (let pos2 = 0; pos2 < everything.length; pos2++) {
		  if (splitMsg[pos] === everything[pos2].char) {
			  finalMsg += everything[pos2].encrypt;
		  }
	  }
  }
  return finalMsg
}

module.exports.encrypt = encrypt