import mongoose from "mongoose"
import AWS from "aws-sdk"
import env from "../../infrastructure/env.js"
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyASSAlZb20BR72ELwG0IKRnYLtsytdBRDY",
//   authDomain: "hotelmanagement-2b00e.firebaseapp.com",
//   projectId: "hotelmanagement-2b00e",
//   storageBucket: "hotelmanagement-2b00e.firebasestorage.app",
//   messagingSenderId: "397411336700",
//   appId: "1:397411336700:web:af6d0651e5ed4539683279",
//   measurementId: "G-MD9HPK0FYF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

AWS.config.update({ 
    accessKeyId: env.AWS_ACCESS_ID, 
    secretAccessKey: env.AWS_SECRET_KEY, 
    region: 'ap-south-1' 
});

export const s3 = new AWS.S3()
async function dbConnection(){
    await mongoose
       .connect(env.MONGO_URL)
       .then(()=>{
        console.log("mongodb database connected")
       })
       .catch((err)=>{
        console.log("Error while connecting mogoose",err)
       })
}

export default dbConnection