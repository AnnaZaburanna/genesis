const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =
    {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[name]__[local]__[hash:base64:5]',
                        mode: 'local',
                        /**
                         * @param {string} resourcePath
                         */
                        auto: (resourcePath) => !resourcePath.endsWith('.global.scss'),
                    },
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
        ],
    }