import mongoose from 'mongoose';

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: [true, "La letra del talle es obligatoria"],
        unique: true,
        trim: true,
        uppercase: true
    }
}, { timestamps: true });

export default mongoose.model("size", sizeSchema);