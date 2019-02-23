# Mind Stack terminal
Terminal adapter for Mind Stack

## This is a work in progress

## Installation

NPM
```bash
    npm i --save mindstack-terminal
```

Yarn
```bash
    yarn add mindstack-terminal
```

## Usage
Node
```js
    const Bot = require('mindstack');
    const terminal = require('mindstack-terminal');

    let botInstance = new Bot()
      .useAdapter(terminal);
```
