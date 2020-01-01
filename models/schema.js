var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewsSchema = new Schema ({

    title: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true,
    },
});

var Article = mongoose.model("Artile", NewsSchema);

module.exports = Article;