const mongoose = require("mongoose");
const POST = mongoose.model("POSTS");

const getAllPosts = async (req, res) => {
  try {
    const data = await POST.find();
    res.status(200).json({
      success: "true",
      myposts: data,
    });
  } catch (error) {
    console.log("Error :" + error.message);
    res.status(400).json({
      success: "false",
      message: "error: " + error.message,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, desc } = req.body;

    if (!title || !desc) {
      console.log(title, desc);
      res.status(422).json({
        success: "false",
        message: "Please add all the fields",
      });
    }

    const post = await new POST({
      title,
      desc,
    });

    const result = await post.save();

    res.status(200).json({
      success: "true",
      post: result,
    });
  } catch (err) {
    console.log("error: " + err.message);

    res.status(400).json({
      success: "false",
      message: "error : " + err.message,
    });
  }
};

const perticularPost = async (req, res) => {
  try {
    const keyword = req.body.search
      ? {
          $or: [{ title: { $regex: req.body.search, $options: "i" } }],
        }
      : {};

    const data = await POST.find(keyword);
    //   res.send(post);
    res.status(200).json({
      success: "true",
      posts: data,
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: "Error fetching posts" + error.message,
    });
  }
};
module.exports = { getAllPosts, createPost, perticularPost };
