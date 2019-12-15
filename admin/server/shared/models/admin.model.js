const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');


const AdminSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        is_active: {
            type: Boolean,
            required: true,
            default: true
        },
        role: {
            type: Number,
            required: true,
            default: 2
        }
    },
    {
        timestamp: true
    }
);

AdminSchema.plugin(mongoosePaginate);

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
