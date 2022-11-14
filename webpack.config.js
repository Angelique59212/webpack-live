const webpack = require('webpack');
const path = require('path');
const development = require("./webpack.config.dev");
const production = require("./webpack.conf.prod");

module.exports  = (env, argv) => {
    const configuration = argv.mode === 'development' ? development : production;

    return {
        // Point d'entrée Javascript, fichier qui contiendra vos includes
        entry: {
            front: './assets/js/front/main.js',
            admin: './assets/js/admin/main.js'
        },
        //Objet contenant le chemin de sortie, ainsi que le nom à donner au fichier
        output: {
            path: path.resolve(__dirname, 'public/build'),
            filename: "./js/[name]-bundle.js",
            publicPath: "/build/",
            clean: true,
        },
        ...configuration,
    }
};

