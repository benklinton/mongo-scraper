var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var Schema = mongoose.Schema;

var NewsSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true,
    },
});

var Article = mongoose.model("Article", NewsSchema);

module.exports = Article;