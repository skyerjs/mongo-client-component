'use strict';

class MongoClientComponent extends Skyer.Component {
  constructor( options ) {
    super(options);
  }

  _defaultOptions() {
    return {
      config_key: 'mongodb',
      connection: {
        url: 'mongodb://127.0.0.1:27017/test',
        options: {}
      }
    };
  }

  _getConfig() {
    const confKey = this.options.config_key;
    const connection = this.skyer.config.get(confKey) || {};

    return Skyer._.extend(this.options.connection, connection);
  }

  _build() {
    super._build();

    const MongoClient = require('mongodb').MongoClient;
    
    // Use connect method to connect to the Server 
    const promise = MongoClient.connect(this.config.url, this.config.options);
    return promise;
  }

  shutdown(){
    super.shutdown();

    if( this._handler ){
      this._handler.close();
    }
  }
}

module.exports = MongoClientComponent;
