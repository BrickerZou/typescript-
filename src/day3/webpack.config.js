const path=require("path");
module.exports={
    entry:["./src/index.ts","./src/index2.ts"],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
                
            }
        ]
    }
}