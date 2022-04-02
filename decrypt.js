const { everything } = require('./vars');

const decrypt = (key) => {
  let finalMsg = '';
  const matchKey = key.match(/.{1,10}/g);
  for (let pos = 0; pos < matchKey.length; pos++) {
	  for (let pos2 = 0; pos2 < everything.length; pos2++) {
		  if (matchKey[pos] === everything[pos2].encrypt) {
			  finalMsg += everything[pos2].char;
		  }
	  }
  }
  return finalMsg
}

module.exports.decrypt = decrypt