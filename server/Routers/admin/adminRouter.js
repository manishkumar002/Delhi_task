   
const express=require("express");
const Router=express.Router();
const { 

  createCategory,
   putCategory,
   getCategory,
    deleteCategory,
    getSingleCategory,
    Country,
    State,
    City,
    getCountry,
    getState,
    getCity

  }=require('../../controllers/admin/AdminController') 

  
Router.put('/content/:_id',putCategory);
Router.delete('/content/:_id',deleteCategory); 
Router.get('/content/:_id',getSingleCategory); 
Router.post('/content',createCategory);
Router.get('/content',getCategory);
Router.get('/country',getCountry);
Router.get('/state/:code',getState);
Router.get('/city/:code',getCity);
Router.post('/country',Country)
Router.post('/state',State)
Router.post('/city',City)


module.exports=Router; 