// Lib
const Client = require('./client');
// Requests
const Nlu = require('./request/nlu');

/**
  * Terminal adapter
  * @namespace adapter
  * @prop {object} info
  */
module.exports = {
  /**
    * Descriptive information about adapter
    * @namespace info
    * @prop {String} name - Name of adapter used as context for bot
    */
  info: {
    name: 'terminal'
  },
  /**
    * Client configuration
    * @namespace client
    * @prop {Client} instance - API class instance
    * @prop {Object} methods - Login method used to invoke authentication
    */
  client: {
    instance: Client,
    methods: {
      login: 'bootstrap'
    }
  },
  /**
    * Input configuration
    * @namespace input
    */
  input: {
    /**
      * Computer vision algorithms
      */
    cva: {support: false},
    /**
      * Natural language understanding
      */
    nlu: {support: true, native: false, request: Nlu},
    /**
      * Speech recognition layer
      */
    srl: {support: false}
  },
  /**
    * Output configuration
    * @namespace output
    * @param {String} format - File format for outputting content
    * @param {String} target - Type of client that handles response
    */
  output: {
    format: 'md', // Markdown
    target: 'terminal', // Terminal only
    persona: false // No persona support
  },
  /**
    * Variable configuration
    * @namespace vars
    * @param {String} token - Token used to authenticate
    */
  vars: {}
};
