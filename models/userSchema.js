import mongoose, { modelNames } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"

const userSchema = new mongoose.Schema({
    emailaddress: {
        type: String,
        required: true,
    },

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        selected: false,
        minLength: [10, "Phone number must contain exact 10 digits"],
        maxLength: [10, "Phone number must contain exact 10 digits"],
    },

    age: {
        type: Number,
        required: true,
        min: [10, "Age must be at least 10"], // Minimum value
        max: [60, "Age must not exceed 60"],

    },
});

userSchema.plugin(passportLocalMongoose);

export const User = mongoose.model("User", userSchema);
