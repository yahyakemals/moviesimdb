const mongoose = require('mongoose');

module.exports = () => {
    //mongoose.connect('mongodb://newMovieSchema:nms123@ds133251.mlab.com:33251/heroku_3k5qpn72', {useMongoClient: true});
    mongoose.connect('mongodb://localhost/moviesimdb',{useNewUrlParser:true});
    mongoose.connection.on('open', () => {
        // console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};