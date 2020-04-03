# event loop
Node 规定，process.nextTick和Promise的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们。而setTimeout、setInterval、setImmediate的回调函数，追加在次轮循环。

timers  处理setTimeout和setInterval
I/O callbacks
idle, prepare
poll
check   处理setImmediate
close callbacks