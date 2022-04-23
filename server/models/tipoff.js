import mongoose from 'mongoose';

const tipoffSchema = new mongoose.Schema({
    userHash: String,
    message: String,
    location: String,
    bounty: mongoose.Types.Decimal128,
    comments: { type: [String], default: [] }
});

export default mongoose.model('Tipoff', tipoffSchema);
