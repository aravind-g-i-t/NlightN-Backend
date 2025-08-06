import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors'
import routes from '@presentation/http/learner/routes';
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config()
const app= express();

app.use(morgan('dev'));
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))




app.use(express.json());

// app.post("learner/signup/send-otp", (req, res) => {
//   console.log("✅ POST /signup/send-otp route reached");
//   res.json({ status: 'ok' });
// });


app.use('/api/v1',routes)

app.use((req:Request,res:Response)=>{
    res.status(404).json({message:'Route not found'})
})


app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.error(err.stack);
    res.status(500).json({message:'Internal server error'})
    
})

export default app;

