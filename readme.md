# Office Simulator Slackbot
Office slack messages are the passive agressive post-its of the modern world. Do you miss the office life? You won't any more with this realistic office Discord simulator.

Note that this is a fork from another repository and whilst it is fully functional, it has not been fully edited to resemble the port to Discord.

## In action
We have spared no expense, simulating the most realistic office messages, so you are never really at ease!

<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-1.png" width="500">
<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-2.png" width="500">
<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-3.png" width="500">
<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-4.png" width="500">

**This is serious stuff**
- Complete Realism
- 100% vetted passive agression!
- And of course, it REMEMBERS!

<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-5.png" width="500">

*... 5 days later:*

<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-6.png" width="500">

**Lets see that again!**

<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-7.png" width="500">

*... 8 days later:*

<img src="https://s3.amazonaws.com/tholman.com/office-simulator/github-readme-assets/office-sim-8.png" width="500">

## Installation

1. Firstly, you will need to create a new Discord application, in the [Discord Developer Portal](https://discordapp.com/developers/applications/). Type a username `Office Simulator` and click "Save Changes". 

2. Once the application is created, you will need to make it a bot user. Press the "bot" tab on the left, and then click "Add Bot", followed by "Yes, do it!".

2. Once the bot is created, you will be shown an `API token` ... copy this, we'll need it later.

3. Next, clone this project, or download it as a [ZIP](https://github.com/PikaDude/office-simulator/archive/master.zip) and extract it.

4. Open up `index.js` in the root directory, and add replace `DISCORD_BOT_TOKEN` with your bots token. Then, replace `CHANNEL_ID` with the ID for the channel that the bot will be posting the announcements.

5. Invite the bot to the Discord Server that includes the channel that you provided in the previous step.

5. Finally, run `npm install` and `npm start` in the project, and you should see the initial team building message.

## Something to add?

Please, add new messages for the slackbot, etc, to the `/data/actions.js` file... you can use the `%modifier%` to add custom random alterations, as well as the `reaction` key, to add custom reactions.

Submit a PR, and I'll check it out!

## Note

Office simulator only posts once or twice a day, so if it doesn't seem to be constantly going, its due to painstakingly accurate realism.

## License

The MIT License

Copyright (c) 2017 Tim Holman - http://tholman.com
