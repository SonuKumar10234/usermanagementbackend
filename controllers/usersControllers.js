const Users = require("../models/userSchema");
// const moment = require("moment");


//Creating new User in Database
exports.createUser = async(req, res) =>{
    
    const{name, email, phoneNumber, address} = req.body;

    // if(!name || !email || !phoneNumber || !address){
    //     res.status().json({error: "All Inputs are required"});
    // }

    try{
       const preuser = await Users.findOne({email:email});
       if(preuser){
        res.json({status: 403, message: "User already exists in our Database"});
       }
       else{
            // const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const newUser = new Users({
                name, email, phoneNumber, address
            })

            await newUser.save();
            res.json({
                status : 200,
                message: "user created in our database",
                newUser
            })
       }
    } catch(error){
        res.json({status: 400, error});
        //console.log("Something went wrong while creating new user");
    }
}


//get all existing users from the database
exports.getUsers = async(req, res) => {
     try{
          const users = await Users.find();
          res.status(200).json({
            status : "success",
            users
          })
     } catch(error){
        res.json({status: 400, error});
        //console.log("Something went wrong while getting all users");
     }
} 


exports.getSingleUser = async(req, res) => {
    try {
        const {id} = req.params;
        
        const singleUser = await Users.findOne({_id: id});
        
        if(singleUser){
            res.status(200).json(singleUser)
        }
        else{
            res.json({status: 404, message: `user with id ${id} does not found in our database`})
        }
        
        
    } catch (error) {
        res.json({status: 400, error});
        //console.log("Something went wrong while getting single user.");
    }
}


// update user 
exports.updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        
        const updatedUser = await Users.findByIdAndUpdate(id, req.body, {
            new: true
        });
       
        if(updatedUser){
            res.json({
                status: 200,
                message : "user's details updated successfully"
            })
        }
        else{
            res.json({
                status: 404,
                message: "user does not exist"
            });
        }
        
        
    } catch (error) {
        res.json({status: 400, error});
        //console.log("Something went wrong while getting updating user.");
    }
}


// deleting user 
exports.deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        
        const deletedUser = await Users.findByIdAndDelete(id);
        if(deletedUser){
            res.json({
                status: 200,
                message : "user deleted successfully"
            })
        }
        else{
            res.json({
                status: 404,
                "message": "user does not exist"
            });
        }
        
        
    } catch (error) {
        res.json({status: 400, error});
        //console.log("Something went wrong while getting updating user.");
    }
}


