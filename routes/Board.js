const express = require('express');
const Board = require('../models/board');
const router = express.Router();

router
.get('/',(req,res,next)=>{
  Board.findAll()
  .then((result)=>{
    res.status(201).send(result);
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).end();
  })
})

.patch("/admin",async (req,res,next)=>{
  try {
    const data = await Board.findOne({where:{id:req.body.id}})

    const editFile = data.image_url || req.body.image_url;
    const editTitle = data.title || req.body.title;
    const editContent = data.content || req.body.content;
    const editAdmin_id = data.admin_id || req.body.admin_id;
    const update_at = new Date();

    await Board.update({
      admin_id:editAdmin_id,
      image_url:editFile,
      title:editTitle,
      content:editContent,
      update_at:update_at
    },
    {where:{id:req.body.id}})
    .then(()=>{
      res.status(201).send("success")
    })
    .catch(()=>{
      res.status(501).send("fail")
    })
    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

.delete("/admin",async (req,res,next)=>{
  try {
    console.log(req.body);
    await Board.destroy({where:{id:req.body.id}})
    res.status(201).end()
  } catch (error) {
    console.log("실패");
  }
})
module.exports = router