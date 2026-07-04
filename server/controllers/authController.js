import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// generating the jwt
const generateToken =(id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",

  });

    
  };

  // resiter 

export const register = async (req , res) => { 
  try {
    const { name,email , password } = req.body;

    // handling here the error casse
    if(!name || ! email|| !password){
      return res.status(400).json({
        success : false,

        message: "fill all the details yrr",

      });
    }

    // checking that if the user exists or not
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({
        success: false,
        message: "user alreadt exists",

      });
    }

    //  hash password
    const hashedPassword =await bcrypt.hash(password,10);

    //  usercreation

    const user =await User.create({
      name,
      email,
      password: hashedPassword,
    });


    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "your registration is successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,

      },


    });
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      success: false,
      message: "fahhhh!!! server error"
    });
  }
};


// ================= LOGIN =================

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check empty fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Generate Token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= CURRENT USER =================

export const getCurrentUser = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
