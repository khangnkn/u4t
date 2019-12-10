const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
            type: String,
            required: true,
            default: 'Admin'
        }
    },
    {
        timestamp: true
    }
);

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;