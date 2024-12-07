import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
username:{
    type: String,
    minLength: [3, "Username must contain atleast 3 characters"],
    maxLength: [40, "Username cannot exceed 40 characters"],
    required : true,
}, 

firstname:{
    type:String,
    required :true,
},

lastname : {
    type:String,
    required: true,
},

emailaddress : {
    type : String,
    required : true,
},

password : {
    type: String,
    selected: false,
    minLength: [8, "Password must contain atleast 8 characters"],
    maxLength: [32, "Password cannot exceed 32 characters"],
}, 

phone : {
    type: Number,
    selected: false,
    minLength: [10, "Phone number must contain exact 10 digits"],
    maxLength: [10, "Phone number must contain exact 10 digits"],
},

age : {
    type:Number,
    required: true,
    min: [10, "Age must be at least 10"], // Minimum value
    max: [60, "Age must not exceed 60"],

},

profileImage: {
    public_id: { // public id and url will come from cloudinary
        type: String,
        required : true,
    },
    url: {
        type: String,
        required : true,
    },
},

createdAt : {
    type : Date,
    default : Date.now,
},
});

//userSchema ko save krne se pehle , ye function run krna hai which says,
// if user ne abhi password nhi banaya hai ya phir modify nhi kra hai toh kuch mt kro
// but if user khud register kr rha hai ya phir password modify kr rha hai , then ispassword ko hash form mein convert krdo with strongness 10

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    this.password =  await bcrypt.hash(this.password, 10);
});

// How actual password is going to match with this hashed password ?
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generating jwt token for user authentication
userSchema.methods.generateJsonWebTokens = function(){
    return jwt.sign({id : this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn : process.env.JWT_EXPIRE,
    });
}

export const User = mongoose.model("User", userSchema);