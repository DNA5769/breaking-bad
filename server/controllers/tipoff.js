import Tipoff from "../models/Tipoff.js"

export const commentTipoff = async (req,res) => {
    const { id } = req.params;
    const { value } = req.body;

    const tipoff = await Tipoff.findById(id);
    
    tipoff.comments.push(value);

    const updatedTipoff = await Tipoff.findByIdAndUpdate(id, tipoff, { new: true });

    res.json(updatedTipoff);
}