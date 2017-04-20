module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "./app/bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  watch:true,
}
