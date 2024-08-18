const express = require("express");
const {
  getAllPosts,
  createPost,
  perticularPost,
} = require("../controllers/postConroller");
const router = express.Router();

router.post("/createPost", createPost);

router.get("/allPost", getAllPosts);

router.post("/particularPost", perticularPost);

module.exports = router;
