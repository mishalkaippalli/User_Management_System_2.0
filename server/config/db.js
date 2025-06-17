import mongoose from 'mongoose'

const connectToMongo = async () => {
    const res = await mongoose.connect("mongodb://localhost:27017/UMS");
    if(res){
        console.log('connected successfully')
    }
}

export default connectToMongo