const util = require('util');
const childProcess = require('child_process');

const exec = util.promisify(childProcess.exec);

module.exports = (device) => async (key) => {
  const { stdout } = await exec(`irsend SEND_ONCE ${device} KEY_${key}`);
  console.log(stdout);
};
