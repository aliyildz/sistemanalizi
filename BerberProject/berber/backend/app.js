import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import Randevu from './models/Randevu.js';
import AdminInfo from './models/AdminInfo.js';

mongoose.set('strictQuery', false);

const app = express();

dotenv.config();

app.use(express.json());

app.use(
    cors({origin: "http://localhost:3000"})
)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to mongoDB")
})
.catch(err => {
    console.log(err);
});

app.post("/randevu/randevu-al", async(req, res) => {
    const newRandevu = new Randevu(req.body);

    try {
        const savedRandevu = await newRandevu.save();
        res.status(200).send(savedRandevu)
    } catch (error) {
        res.status(500).send(err);
    };
});

app.get("/randevu", async (req, res) => {
    try {
        const randevular = await Randevu.find();
        res.status(200).json(randevular);
      } catch (err) {
        res.status(500).send(err);
      }
}); 

app.delete("/randevu/:id", async (req, res) => {
    try {
        const curRandevu = await Randevu.findOneAndDelete(req.params.id);
        res.status(200).json(curRandevu);
    } catch (error) {
        res.status(403).json(error)
    }
})


app.listen("5000", () => {
    console.log("Backend is running on port 5000")
})
