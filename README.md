# Lowbot terminal
Terminal adapter for lowbot

## This is a work in progress

## Installation

NPM
```bash
    npm i --save lowbot-terminal
```

Yarn
```bash
    yarn add lowbot-terminal
```

## Usage
Node
```js
    const LowBot = require('lowbot');
    const terminal = require('lowbot-terminal');

    let botInstance = new LowBot()
      .useAdapter(terminal);
```
