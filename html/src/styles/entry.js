
// scss主打包入口

module.exports = {
	// 模块列表
	list: [
		"admin",
		"test"
	],

	dir: "./src/styles/",   // 默认文件父级
	watch: "admin",               // 监听和打包当前的模块，
	isWatchAll: false     		// 为true=>时监听和打包所有模块  

}

