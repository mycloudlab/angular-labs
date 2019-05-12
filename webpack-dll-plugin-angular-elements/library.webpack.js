// library.webpack.config.js
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



let libraries = ['core-js', 'rxjs', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/elements'];

let configs = [];


let crosslib = [];

libraries.forEach((lib) => {

    let config = {
        mode: "production",
        context: process.cwd(),
        entry: {},
        optimization: {

            minimizer: [
                new TerserPlugin({
                    extractComments: true,
                    cache: true,
                    parallel: true,
                    terserOptions: {
                        mangle: true,
                        compress: {},
                    }
                }),
            ],
        },


        resolve: {
            extensions: ['.js', '.ts', '.json', '.less', '.css'],
            modules: [__dirname, 'node_modules']
        },
        output: {
            filename: '[name].dll.js',
            path: path.resolve(__dirname, './dist/library'),
            library: '[name]'
        },
        plugins: [
           
            new webpack.DllPlugin({
                name: '[name]',
                path: './dist/library/[name].json'
            }),

        ],

    };

    let libName = lib.replace(/[\/-]/g, "_").replace(/@/g, '');

    config.entry = {};
    config.entry[libName] = [lib];
    
    config.plugins.push(
    new BundleAnalyzerPlugin({
        statsFilename: `${libName}.stats.json`,
        analyzerMode:"disabled",
        generateStatsFile:true,
    }));

    configs.push({ lib: lib, libFile: libName, libraries: crosslib.slice(0), webpack: config });

    crosslib.push(`./dist/library/${libName}.json`);
});


const compiler = (config) => new Promise((resolve, reject) => {
    config.libraries.forEach(library => {

        config.webpack.plugins.push(new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(library)
        }));
    })

    webpack(config.webpack, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.log(err);
            reject(err);
            return;
        }

        console.log(stats.toString({
            entrypoints: true,
            builtAt: false,
            hash: false,
            version: false,
            chunkModules: true,
            depth: false,
            moduleTrace: false,
            providedExports: false,
            usedExports: false,
            modules: false,
            chunks: false,
            colors: true
        }));
        console.log();
        resolve('ok');
    });
});

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}


const start = async () => {
    await asyncForEach(configs, async (config) => {
        await compiler(config);
    });
    console.log('Done');
}
start();
