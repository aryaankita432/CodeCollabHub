const express=require('express');
const mongoose =require('mongoose');


async function db() {
  try {
    await mongoose.connect("mongodb+srv://codecollab:codecollab@cluster0.tbtqbzb.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database connected successfully..");

  } catch(err) {
    console.log(err);
  }
}

module.exports=db

