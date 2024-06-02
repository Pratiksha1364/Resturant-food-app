const express= require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDb = require("./config/db")



    dotenv.config()
    connectDb()
    const app = express();
    
    //middleware
    app.use(cors())
    app.use(express.json())
    app.use(morgan("dev"))


    app.use("/api/v1/test" , require("./Routes/testRoutes"))
    app.use("/api/v1/auth", require("./Routes/authRoutes"))
    app.use("/api/v1/user", require("./Routes/userRoutes"))
    app.use("/api/v1/resturant", require("./Routes/resturantRoutes"))
    app.use("/api/v1/category", require("./Routes/categoryRoutes"));
app.use("/api/v1/food", require("./Routes/foodRoutes"));


    app.get("/",(req,res)=>{
        return res
        .status(200)
        .send("Welcome to server")
    })
    const PORT = process.env.PORT || 8000;

    app.listen(PORT,() =>{
        console.log(`server running on ${PORT}`);
    })

