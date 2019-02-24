const EventEmitter = require('events');
const readline = require('readline');
const settings = require('./settings.json');

module.exports = class Client extends EventEmitter {
  constructor()
  {
    super();
    this.rl = readline.createInterface(process.stdin, process.stdout);
    this.user = settings.user;
  }

  bootstrap()
  {
    this.rl.setPrompt('CHAT> ');
    this.rl.prompt();

    this.rl.on('line', (line) => {
      let content = line.trim();
      this.rl.prompt();
      this.emit('message', {content, author: {
        username: 'You'
      }});
    }).on('close', function() {
      console.log('Closing session!');
      process.exit(0);
    });

    this.emit('ready');
  }

  get channels()
  {
    return {
      get: (channelId) => {
        return {
          send: (res) => {
            console.log(`Replied: ${res}`);
            return {author: this.user};
          }
        };
      }
    };
  }
}
