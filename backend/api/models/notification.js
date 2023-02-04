import mongoose from "mongoose";

const date = Date.parse(new Date().toLocaleDateString());
const { Schema } = mongoose;

const notificationSchema = new mongoose.Schema({
    expenseId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "expense",
		unique: true,
	},
    date: { type: Date, default: date},

})

export const Notification = mongoose.model('notification', notificationSchema);
export default {Notification};