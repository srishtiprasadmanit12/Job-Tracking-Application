import mongoose from 'mongoose'
//let url = 'mongodb+srv://srish:sri@1234@cluster0.c1rp3je.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(url)
}
export default connectDB
