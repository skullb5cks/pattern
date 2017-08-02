var mediator = (function(){
    var _topics = {},
        _subscribe = function(topic, callback) {
            if (!_topics.hasOwnProperty(topic)) {
                _topics[topic] = [];
            } 
            _topics[topic].push(callback);
        },
        _publish = function(topic) {
            if (!_topics.hasOwnProperty(topic)) {
                return;
            }
            
            _topics[topic].forEach(function(callback) {
                callback();
            });
        };

    return {
        subscribe: _subscribe,
        publish: _publish
    };
})();