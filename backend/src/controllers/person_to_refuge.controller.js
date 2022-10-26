import { PersonToRefuge } from '../models/person_to_refuge.model.js'

export const adopting = async (req,res) => {
    try{
        const adoptingList = await PersonToRefuge.findAll()
        res.json(adoptingList)
    }catch(err){
        console.log(err);
    }
}

export const adoptingById = async (req,res) => {
    const { id } = req.params
    try{
        const adoptingId = await PersonToRefuge.findOne({
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
        const { name, petname,description,gender,breed, specie, vaccine, identity_card, phone, address, occupation, email, status } = req.body
        if( !name || !petname || !description || !gender || !breed || !specie || !vaccine ||  !identity_card || !phone || !address || !occupation || !email || !status ){
            return res.status(400).json({error: "Uno o más campos vacios"})
        }
        const createAdoption = await PersonToRefuge.create({
            name, petname,description,gender,breed, specie, vaccine, identity_card, phone, address, occupation,email, status})
        res.json(createAdoption)
    }catch(err){
        console.error(err)
    }
   
}

export const deleteAdoptions= async (req , res) => {
    const { id } = req.params
    try{
         await PersonToRefuge.destroy({
            where: {
                id
            }
        })
         res.status(204).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editAdoptions = async (req,res) => {
    const { id } = req.params
    try {
        const { name, petname,description,gender,breed, specie, vaccine, identity_card, phone, address, occupation, email, status } = req.body

        const editAdoption= await PersonToRefuge.findByPk(id)
        
        editAdoption.name = name
        editAdoption.petname = petname
        editAdoption.description = description 
        editAdoption.gender = gender 
        editAdoption.breed = breed 
        editAdoption.specie = specie 
        editAdoption.vaccine = vaccine
        editAdoption.identity_card = identity_card 
        editAdoption.phone = phone 
        editAdoption.address = address
        editAdoption.occupation = occupation 
        editAdoption.email = email 
        editAdoption.status = status
        await editAdoption.save()
    
        res.json(editAdoption)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
