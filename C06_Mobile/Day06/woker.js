for (var i = 0; i < 2000000000; i++) {
	
}

//切忌：在子线程中不要去执行更新UI的代码，这里就是子线程环境
//通过postMessage() 方法回到主线程中，可以传递参数
//当耗时操作完毕之后，调用这个方法会回到主线程中的 onMessage 监听事件回调函数中
postMessage(i);