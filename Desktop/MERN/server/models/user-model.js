const mongoose= require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// defining the schema of a collection
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
});

/*
JWT: used for securely transmitting information between parties as a JSON object.
Tokens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user details.
Instead, they are issued by the server during the authentication process and then stored on the 
client-side (e.g., in cookies or local storage) for later use.

Components:
1) Header: metadata
2) Payload: User info
3) Signature: for verification
*/

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
};

// securing the user password with the bcrypt (by hashing)
// pre middleware acts on user documents before they are saved to the database.
userSchema.pre("save", async function () {
    const user = this;
    console.log("actual data ", this);
    
    // checking if hashing needed
    if (!user.isModified) {
        return next();
    }
  
    try {
        // more the salt more complex the hashing
        const saltRound = await bcrypt.genSalt(10);
        // function thar performs hashing
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    } catch (error) {
        return next(error);
    }
  });

// Generate JSON Web Token (JWT)
// Instance method used
// We use regular functions (not arrow functions) to ensure that `this` refers to the instance of the document being operated on.
userSchema.methods.generateToken = async function () {
    // console.log("I am token");
    try {
      return jwt.sign(
        {
        //payload
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        //signature
        process.env.JWT_SECRET_KEY,
        //optional field: duration of validity
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };


// defining the model/ collection name
const User= new mongoose.model("User", userSchema);

module.exports= User;