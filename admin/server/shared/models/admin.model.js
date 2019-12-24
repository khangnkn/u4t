const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');


const AdminSchema = new Schema({
    avatar: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    fullname: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: false,
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true,
    },
    sex : {
        type: Number,
        required: false,
        default: 0,
    },
    role: {
        type: Number,
        required: false,
        default: 0,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    deleted_at: {
        type: Date,
        default: null,
    },
});

AdminSchema.plugin(mongoosePaginate);

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
