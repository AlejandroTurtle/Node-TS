import "reflect-metadata"
import express, {Request, Response} from "express"
import { router } from "./routes"


const app = express()



app.use(express.json())
app.use(router)



app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "DioBank API"})
})




app.listen(5000, () => {
    console.log("API ON ")
})

