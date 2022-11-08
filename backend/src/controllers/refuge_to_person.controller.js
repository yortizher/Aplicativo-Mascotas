import { RefugeToPerson } from '../models/refuge_to_person.model.js'
import { cloudinary } from "../helpers/helper.js"

export const adopting = async (req,res) => {
    try{
        const adoptingList = await RefugeToPerson.findAll()
        res.json(adoptingList)
    }catch(err){
        console.log(err);
    }
}

export const adoptingById = async (req,res) => {
    const { id } = req.params
    try{
        const adoptingId = await RefugeToPerson.findOne({
            where: {
              id,
            },
          });
          res.json(adoptingId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createAdoptions = async  (req,res) => {
    try{
        const  {tempFilePath:fileStr}  = req.files.pet_url
        
        const { owner_name, pet_name, pet_age,description,gender,breed, specie, vaccine, cc, phone, address, occupation, email, status } = req.body
       
        const uploadResponse = await cloudinary.uploader.upload( fileStr, { upload_preset: "pets_folder" })

        const createAdoption = await RefugeToPerson.create({
            owner_name, pet_name, pet_age, pet_url: uploadResponse.secure_url,description,gender,breed, specie, vaccine, cc, phone, address, occupation, email, status})
        res.status(200).json({message: "Register was created succesfully", createAdoption})
    }catch(err){
        console.error(err)
    }
   
}

export const deleteAdoptions= async (req , res) => {
    const { id } = req.params
    try{
         await RefugeToPerson.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editAdoptions = async (req,res) => {
    const { id } = req.params
    try {
        const { owner_name, pet_name, pet_age, pet_url,description,gender,breed, specie, vaccine, cc, phone, address, occupation, email, status } = req.body

        const editAdoption= await RefugeToPerson.findByPk(id)
        
        editAdoption.owner_name = owner_name
        editAdoption.pet_name = pet_name
        editAdoption.pet_age = pet_age
        editAdoption.pet_url = pet_url
        editAdoption.description = description 
        editAdoption.gender = gender 
        editAdoption.breed = breed 
        editAdoption.specie = specie 
        editAdoption.vaccine = vaccine
        editAdoption.cc = cc 
        editAdoption.phone = phone 
        editAdoption.address = address
        editAdoption.occupation = occupation 
        editAdoption.email = email 
        editAdoption.status = status
        await editAdoption.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editAdoption})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
