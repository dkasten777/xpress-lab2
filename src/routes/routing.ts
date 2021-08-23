import express from "express";
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.render("home");
})

routes.get('/specialty', (req, res)=>{
    let name: string = req.query.name as string;
    let price: number = parseInt(req.query.price as string)
    
    res.render("specialty", {name, price});
})

routes.get('/customZa', (req, res)=>{
   
    res.render("customZa")
})

routes.get('/review', (req, res)=>{
   
    res.render("review")
})

routes.post('/reviewed', (req, res)=>{
    let name: string = req.body.name;
    let comment: string = req.body.comment;
    let rating: number = req.body.rating;
    
    res.render("reviewed", {name, comment, rating})
})

export default routes;