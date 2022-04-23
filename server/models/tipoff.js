import mongoose from 'mongoose';

const tipoffSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userHash: String,
    message: String,
    location: String,
    bounty: mongoose.Types.Decimal128,
    filePaths: [String]
});

export default mongoose.model('Tipoff', tipoffSchema);
