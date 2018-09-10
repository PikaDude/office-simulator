/**
 * Bot Manager
 */

var Eris = require('eris');

var Ticker = require('./helpers/ticker');
var Office = require('./helpers/office');

var bindMethods = require('./helpers/bindMethods');

class officeSimulator {

  // New Manager
  constructor(params) {

    this.token = params.token;
    this.channel = params.channel
    
    // Off while in the plane
    this.bot = new Eris(this.token);
    this.bot.connect();

    bindMethods(this, ['init', 'onTick']);

    this.bot.on('ready', this.init);
  }

  // Initial Announcement
  // Set up memory and timings
  init() {
    
    this.announce("Hi, and welcome to Office Simulator. Remember there's no I in Team.");

    this.ticker = new Ticker({
      interval: 3000, // ms
      callback: this.onTick
    });

    this.office = new Office({
      floors: 3,
      hours: {
        open: 10, // 10
        close: 18 // til 6
      },
      objects: {}
    });

  }

  onTick(date) {
    // If there are announcements to be made, announce them!
    var announcement = this.office.getAnnouncement(date);
    if(!announcement) {
      return;
    }

    this.announce(announcement.item.message);
  }

  // Speak!
  announce(announcement) {
    this.bot.createMessage(this.channel, '📉 ' + announcement);
  }

}

module.exports = officeSimulator;