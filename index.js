import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Initialize blog list
let blogList = [];

// Main route (Display all blog posts)
app.get("/", (req, res) => {
  res.render("index.ejs", { blogList: blogList });
});

// Route to create a new blog post
app.get("/post", (req, res) => {
  res.render("post.ejs");
});

// Post request to add new blog post
app.post("/post", (req, res) => {
  console.log("Request Body:", req.body); // Log the entire request body

  const blogTitle = req.body.title;
  const blogAuthor = req.body.author;
  const blogContent = req.body.content;

  // Add the new blog post to the blog list
  blogList.push({
    title: blogTitle,
    author: blogAuthor,
    content: blogContent,
  });

  console.log(blogList);

  // After adding the new post, redirect back to the main page
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
