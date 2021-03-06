define(function(require) {
  var _ = require("underscore");

  var _config = {
    tasks: {
      enabled: false,
      url: null
    },
    jenkins: {
      enabled: false,
      url: null,
      wsUrl: null
    },
    events: {
      enabled: false,
      url: null,
      wsUrl: null
    },
    port: null
  };

  return {
    set: function(config) {
      Object.keys(config).forEach(function(key) {
        var value = config[key];
        if(value.url && value.url.indexOf("http") === 0) {
          config[key].enabled = true;
          config[key].wsUrl = value.url.replace(/https?:\/\//, "ws://");
        }
      });

      _.defaults(config.events, {filter: {
        type: null,
        title: null
      }});
      _config = config;
    },
    get: function() {
      return _config;
    }
  };

});