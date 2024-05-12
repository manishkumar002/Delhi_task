
const ContentSchema=require('../../models/admin/content') 
const CountrySchema=require('../../models/admin/country')
const StateSchema=require('../../models/admin/state')
const CitySchema=require('../../models/admin/city') 


const getCountry=async(req,res)=>{

  const data=await CountrySchema.find();

  res.send(data);
}

const getState=async(req,res)=>{

  const data= await StateSchema.find({country_code:req.params.code})

  res.send(data);
}

const getCity=async(req,res)=>{

  const data= await CitySchema.find({state_code:req.params.code})

  res.send(data);
}


const Country = async (req, resp) => {
  try {
    let dataArray = req.body.map(({ name,code }) => ({
      name,
      code,  
    }));
    await CountrySchema.insertMany(dataArray);
    resp.status(200).json({
      code: 200,
      message: "Content added successfully",
      error: false,
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
}


const State = async (req, resp) => {
  try {
    let dataArray = req.body.map(({ name,code,country_code }) => ({
      name,
      code,
      country_code  
    }));
    await StateSchema.insertMany(dataArray);
    resp.status(200).json({
      code: 200,
      message: "Content added successfully",
      error: false,
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
}

const City = async (req, resp) => {
  try {
    let dataArray = req.body.map(({ name,code,state_code }) => ({
      name,
      code,
      state_code  
    }));
    await CitySchema.insertMany(dataArray);
    resp.status(200).json({
      code: 200,
      message: "Content added successfully",
      error: false,
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
}

const createCategory= async(req,resp)=>{
  
  try { 
  
  let {fname,lname,email,country,state,city,gender,birth,age}=req.body 
  const countryName = await CountrySchema.findOne({code:country}) 
  const stateName = await StateSchema.findOne({code:state}) 
       let data = new ContentSchema( {fname,lname,email,country:countryName.name,state:stateName.name,city,gender,birth,age}); 
       console.log(data)
         await data.save(); 
       resp.status(200).json({
         code: 200,
         message: "Content added successfully", 
         error: false,
         status: true,

       });
    
   } catch (err) {
     console.log(err);
   }
}



const putCategory=async(req,res)=>{
  try {

    let {fname,lname,email,country,state,city,gender,birth,age}=req.body   


     let data = await ContentSchema.updateOne(
     {_id: req.params._id},
      { $set:  {fname,lname,email,country,state,city,gender,birth,age}} 
  );
       res.send(data); 
   } catch (err) {
       console.log(err)
   }
 
}
const getCategory=async(req,res)=>{

  let data = await ContentSchema.find( );

  res.send(data);
}
 




const getSingleCategory=async(req,res)=>{

  let data = await ContentSchema.find({_id:req.params._id});

  res.send(data);
}





 const deleteCategory= async (req, resp) => {
  try {
    console.log(req.params);
    let data = await ContentSchema.deleteOne({_id:req.params._id});
    resp.send(data);
  } catch (err) {
    console.log(err);
  }
}


module.exports={  
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
}