// const path = require('path');
import path from 'path';
const __dirname = path.resolve();

const io = {
    mode: 'production',
    entry: './src/server.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'server.js',
    },
    target: 'node',
};

export default io;