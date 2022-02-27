const express= require("express");
const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"its  new version"});
})

module.exports = router;