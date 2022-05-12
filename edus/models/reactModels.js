const mongoose = require('mongoose')

const ReactModels = mongoose.model('reactModels',
{
    title : {type:String},
    message : {type:String},
    Programes : {type:String}
},'reactModelss')

module.exports = { ReactModels}