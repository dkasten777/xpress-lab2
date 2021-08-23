import path from 'path';
import cors from "cors";
import express from "express";
import routes from "./routes/routing"

const app = express();
const port = 3001;
// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, ()=>{
    console.log("heyoooo!")
})