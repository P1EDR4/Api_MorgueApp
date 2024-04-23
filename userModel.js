const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        sexo: {
            type: String,
        },
        seña: {
            type: String,
        },
        hora: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ModelUser = mongoose.model("User", userSchema);
module.exports = ModelUser;