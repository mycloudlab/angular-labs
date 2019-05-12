// library.webpack.config.js
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let libraries = [ 'core-js','rxjs', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/elements'];


let config =  {

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:"disabled",
            generateStatsFile:true,
        })
    ]
};

for (let i in libraries) {
    let lib = libraries[i];
     config.plugins.push(new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./dist/library/${lib.replace(/[\/-]/g, "_").replace(/@/g,'')}.json`)
        }))
   
}



module.exports = config;
/*
<script type="text/javascript" src="rxjs.dll.js" ></script>
<script type="text/javascript" src="_angular_core.dll.js" ></script>
<script type="text/javascript" src="_angular_common.dll.js" ></script>
<script type="text/javascript" src="_angular_platform_browser.dll.js" ></script>
<script type="text/javascript" src="_angular_elements.dll.js" ></script>
*/