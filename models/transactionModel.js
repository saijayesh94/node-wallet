import mongoose from 'mongoose'
 
const transactionSchema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    amount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum:['success','failure'],
        default:'success'
    }
},
    {
        timestamp:true
    }
)


const Transaction = mongoose.model('Transaction',transactionSchema)


export default Transaction