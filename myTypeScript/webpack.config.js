const path = require('path');


module.exports = {
    name:'myTypeScript-setting',
    mode:'development',// production
    devtool:'eval',  // source-map
    resolve:{
        extensions:['.ts']
    },
    entry:{
        app:['./src/src/test']
    }, // 입력

    module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
	}
    output:{
        path:path.join(__dirname,'dist/src'),
        filename:'app.js'
    }, // 출력 
  
}