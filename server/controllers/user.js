import userModel from "../models/user.js";

class userController{
    static getAllUsers = async(req, res) => {
        const fetchAllUsers = await userModel.find({});
        return res.status(200).json(fetchAllUsers)
        };
    static createNewUser = async(req, res) => {
        const {name, email, gender, city} = req.body;
        try {
            if(name && email && gender && city){
                const isEmail = await userModel.findOne({email: email});
                if(!isEmail){
                    const newUser = userModel({
                        name: name,
                        email: email,
                        gender: gender,
                        city: city,
                        profile: req.file.filename
                    });
                    const response = await newUser.save();
                    if(response){
                        return res.status(200).json({message: 'successfully regiesterd'});
                    }
                } else {
                    return res.status(400).json({message: 'user already exists'})
                }
            } else {
                return res.status(400).json({message: 'all fields are required'})
            }
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    };
    
}

export default userController;