import mongoose from 'mongoose'

const runServer = (app) => {
    app.listen(process.env.PORT, () => {
        console.log("Listening to port " + process.env.PORT);
    })
}

const connectToDB = async (app) => {
    await mongoose.connect(process.env.MONGO_URI);
    runServer(app);
}

export default connectToDB;