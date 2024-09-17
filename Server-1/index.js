import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));


const blogPosts = [];


app.get("/", (req, res) => {
    res.render("working", {
        blogPosts: blogPosts
    });
});

app.post("/add", (req, res) => {
    var timeOfPost = new Date();
    const userName = req.body.userName;
    const title = req.body.title;
    const postSpace = req.body.postSpace;
    var post = {
        timeOfPost, userName, title, postSpace
    }


    blogPosts.push(post);

    res.render('working', {
        blogPosts: blogPosts
    })

    console.log(blogPosts);
});

app.post("/submit", (reg, res) => {
    const postData = req.body["userName"];
    res.render("working.ejs", {dataPost: postData});
});

/*app.get("/", (req, res) => {
    res.render("/index", {
    });
});*/

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

console.log(blogPosts);

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});