import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// 1-Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
// 2- Sessions

// 3-Views
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

// 4 Routers
app.use("/admin", routerAdmin); //middleare design pattern SSR
app.use("/", router); //middleare design pattern SPA

export default app;

/* Burak BackEnd Project 
    ikki maqsad 
    => SPA (Single Page  Application) REACT rest API server sifatida
    => Traditional BSS Admin page larni EJS orqali qurish
*/
