/**
 * Office Simulator Slack Bot!
 * - Don't forget to clean your forks after using them!
 */

const token   = 'DISCORD_BOT_TOKEN';
const channel = 'CHANNEL_ID';

var OfficeSimulator = require('./bot/office-simulator');
var officeSimulator = new OfficeSimulator({
    token: token,
    channel: channel
});
