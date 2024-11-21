import multer from "multer"
import fs from "fs"

const upload = multer({storage: multer.memoryStorage()})
const s3 = new AWS.S3()
export const fileUpload = async(file) =>{
    const params = {
        Bucket: 'abihotel',
        Key: file.filename,
        Body: fs.readFileSync(file.path),
        ACL: 'public-read'
    }
    s3.upload(params, (err,data) =>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        const viewUrl = data.location;
        return viewUrl
    })
}