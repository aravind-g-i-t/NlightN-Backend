import mongoose,{Schema,Document} from "mongoose";

export interface LearnerDocument extends Document{
    _id:string;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    hashedPassword:string;
    isActive:boolean;
    joiningDate:Date;
    imageURL?:string;
}

const LearnerSchema:Schema=new Schema(
    {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    joiningDate: { type: Date, required: true },
    imageURL: { type: String },
    },
    { timestamps: true }
);

export const LearnerModel = mongoose.model<LearnerDocument>("Learner",LearnerSchema);