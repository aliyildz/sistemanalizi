import mongoose from "mongoose";

const RandevuSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
});

export default mongoose.model("Randevu", RandevuSchema);
