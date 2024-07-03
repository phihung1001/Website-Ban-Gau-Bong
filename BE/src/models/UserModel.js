const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name : { type: String,
    },
    email : { type: String, required: true,
    }, 
    password : { type: String, required: true
    },
    confirmPassword : { type: String, 
    },
    isAdmin : { type: Boolean, default: false, 
    },
    phone : { type: Number,
    }
  },
  {
    timestamps : true
  }
);

const User = new mongoose.model("User",userSchema);
// const User = mongoose.model("User", userSchema, "nguoidung");


module.exports = User;