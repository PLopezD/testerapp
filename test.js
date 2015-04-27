
const access_token = "81aae9508edb013224c262b37121b440";

// var API = require('groupme').Stateless
// console.log(API)
// API.Groups.index(access_token, function(err,ret) {
//   if (!err) {
//     console.log(ret);        
//   }

// });

// var attach_array = []
// API.Messages.index(access_token, '12914593', {}, function(err, ret){
// 	if (!err) {
// 		var current_messages = ret.messages
// 		for (var i = current_messages.length - 1; i >= 0; i--) {
// 			if (current_messages[i].attachments.length > 0){
// 				console.log(current_messages[i].attachments[0].url)
// 			}
// 			// console.log(current_messages[i].attachments.length)
// 		};
// 	}
// })


// API.Bots.create(access_token,"ass", '12914593', {}, function(err, ret){
// 	console.log(ret)
// })


var IncomingStream = require('groupme').IncomingStream;

var iStream = new IncomingStream(access_token,'6569568',[12914593])
iStream.connect()
console.log(iStream)
iStream.on('message', function(err,res){
	console.log(res)
	console.log(err)
})


