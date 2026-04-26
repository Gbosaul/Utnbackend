import mongoose from 'mongoose'

const statusEnum = ["AVAILABLE", 'NOT_AVAILABLE', "DISCONTINUED"]

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Nombre es obligatorio"],
        minLength: 2,
        unique: [true, "Este nombre ya existe"],
        lowercase: true,
        trim: true
    },

    price: {
        type: mongoose.Types.Decimal128,
        required: [true, "El valor de precio es requerido"],
        min:[0, "El precio tiene que ser un numero"],
        set: v => mongoose.Types.Decimal128.fromString(v.toFixed(2)),
    },

    description: {
        type: String,
        minLength: 2,
        maxLength: 140,
        trim: true,
        lowercase: true,
    },

    status: {
        type: String,
        validate: {
            validator: function (value) {
                return statusEnum.includes(value)
            },
            message: props => `${props.value} no es un estado valido`
        }

    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },

    variants: [{
        size: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "size",
            required: true
        },
        color: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "color",
            required: true
        },
        stock: { 
            type: Number, 
            required: true,
            min: [0, "El stock no puede ser negativo"],
            default: 0
        },
        image: {type: String}
    }],

    highlighted: Boolean,

    profitRate: {
        type: Number,
        default: 1.20,
        min: [1, "Proft rate must be greater than 1"]
    },


})

productSchema.virtual("finalPrice").get(function () {
    return this.price * this.profitRate
})

productSchema.set("toJSON",{
    getters: true,
    setters: true,
    virtuals: true
})

export default mongoose.model("product", productSchema)