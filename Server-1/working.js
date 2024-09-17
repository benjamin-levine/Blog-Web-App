import express from "express";
import bodyParser from "body-parser";
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));


var blogPosts = [];


app.get("/", (req, res) => {
    res.render("index", {
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
    

    console.log(blogPosts);
    res.render( 'index.ejs', {
        blogPosts: blogPosts
      });
});

/*
app.post("/delete", (req, res) => {
    splice

    res.render( 'index.ejs', {
        blogPosts: blogPosts
      });
});
*/

/*
app.post("/edit", (req, res) => {
    

    res.render( 'index.ejs', {
        blogPosts: blogPosts
      });
});
*/

/*
app.post("/submit", (req, res) => {
    const postData = req.body["userName"];
    res.render("index", {dataPost: postData});
});

*/

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

console.log(blogPosts);

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});