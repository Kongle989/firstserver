var http = require('http');

var PORT = 7000,
    PORT2 = 7500;

var twit = require('twitter'),
    twitKey = new twit(require("./keys.js").twitterKeys),
    par = {screen_name: 'kongle989', count: 20};
var me;
tweetME();
function handleRequest(request, response) {

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + me);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Server listening on: http://localhost:", 'bye');

});
var server2 = http.createServer(handleRequest);

server.listen(PORT2, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Server listening on: http://localhost:", 'hi');

});


function tweetME() {
    twitKey.get("statuses/user_timeline", par, function (error, tweets, response) {
        me = tweets[0].text;
    });
}
