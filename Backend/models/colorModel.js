import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre del color es obligatorio"],
        unique: true,
        trim: true,
        uppercase: true
    },
    hexCode: {
        type: String,
        trim: true,
    }
}, { timestamps: true });

export default mongoose.model("color", colorSchema);