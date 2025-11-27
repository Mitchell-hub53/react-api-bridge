const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    await createAdminUser();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createAdminUser = async () => {
    try {
        const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });

        if (!adminExists) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

            await User.create({
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
            });
            console.log("Admin user created successfully.");
        }
    } catch (error) {
        console.error(`Error creating admin user: ${error.message}`);
    }
};

module.exports = connectDB;
