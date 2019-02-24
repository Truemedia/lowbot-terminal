const {Nlu} = require('hightech').Request;
const settings = require('./../settings.json');

class NluRequest extends Nlu
{
  constructor(data)
  {
    super(data);
  }

  get author()
  {
    return settings.user;
  }

  get channel()
  {
    return settings.channel;
  }

  get mentions()
  {
    return [settings.user.id];
  }

  get content()
  {
    return this.data.content;
  }
}

module.exports = NluRequest;
