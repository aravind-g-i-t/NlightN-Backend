import mongoose from 'mongoose';

export const connectMongoDB= async ():Promise<void>=>{
    try{
        const uri=process.env.MONGODB_URI || '';
        await mongoose.connect(uri);
        console.log('MongoDB connected');
        
    }catch(err){
        console.error('Mongo connection error');
        process.exit(1);
    }
};
