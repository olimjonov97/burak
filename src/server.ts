// console.log("executed");
// const person: string = "martin";
// const count: number = 100;
// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD")
// console.log(currentTime);

// Architectural pattern MVC(model view Controoller) DI(dependenci iinjection),,MVPmodel view presenter

// Design Pattern Middle Ware, Decorator,

//En

// import moment from "moment"; // const moment require("moment") in common js

// Mongo Db 1
// Cluster => DATABASE (Reja & Burak) Collecion (plans) => Document(data birligi)
// console.log("PORT", process.env.PORT)
// console.log("Mongo", process.env.MONGO_URL)
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Success On MongoDb connection");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => {
    console.log("ERROR on MongoDb connection", err);
  });
