var EventEmitter = require("events").EventEmitter;

var event = new EventEmitter();

//时间event注册一个时间监听器some_event
event.on("some_event", function(){
    console.log("some_event occured.");
});

//经过1000毫秒后，向event对象发送事件some_event
setTimeout(function() {
    event.emit("some_event");
},  1000);