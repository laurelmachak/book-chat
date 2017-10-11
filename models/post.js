var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema ({
    createdAt : { type: Date },
    updatedAt : { type: Date },
    body : {type: String, required: true }
})

// SET createdAT and updatedAt
ChatSchema.pre('save', function(next){
    now = new Date();
    this.updatedAt = now;
    if ( !this.createdAt ){
        this.createdAt = now;
    }
    next();
})

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;