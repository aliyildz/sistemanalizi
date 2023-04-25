import mongoose from "mongoose";

const AdminInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
});

export default mongoose.model("AdminInfo", AdminInfoSchema);
