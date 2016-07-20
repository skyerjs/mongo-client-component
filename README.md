# skyer-mongo-client-component

[![npm version](https://badge.fury.io/js/skyer-mongo-client-component.svg)](https://badge.fury.io/js/skyer-mongo-client-component)

> Skyer redis client component.

## Install

[![NPM](https://nodei.co/npm/skyer-mongo-client-component.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/skyer-mongo-client-component/)

```bash
$ npm i --save skyer-mongo-client-component
```

## Register

/app/components/mongo_client.component.js

```js
module.exports = require('skyer-mongo-client-component');
```

## Usage

```js
const mongoClient = skyer.componentManager.getComponent('mongoClient');


```

hello!

## Options

See `mongodb` options (https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options)

## Mongodb Api

http://mongodb.github.io/node-mongodb-native/2.2/api/

## Licences

[MIT](LICENSE)