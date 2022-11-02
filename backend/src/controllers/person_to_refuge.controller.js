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
    const { pet_name, pet_age, pet_url, email, date, owner_name, cc, phone, address, occupation } = req.body
    if( !pet_name || !pet_age || !pet_url || !email || !date || !owner_name || !cc || !phone || !address || !occupation ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createAdoption = await PersonToRefuge.create({
        pet_name, pet_age, pet_url, email, date, owner_name, cc, phone, address, occupation
    })
    res.status(200).json({message: "Register was created succesfully", createAdoption})
}

export const deleteAdoptions= async (req,res) => {
    const { id } = req.params
    try{
         await PersonToRefuge.destroy({
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
        const { pet_name, pet_age, pet_url, email, date, owner_name, cc, phone, address, occupation } = req.body
    
        const editAdoption= await PersonToRefuge.findByPk(id)
        editAdoption.pet_name = pet_name
        editAdoption.pet_age = pet_age
        editAdoption.pet_url = pet_url
        editAdoption.date = date
        editAdoption.owner_name = owner_name
        editAdoption.cc = cc
        editAdoption.email = email
        editAdoption.phone = phone
        editAdoption.address = address
        editAdoption.occupation = occupation
        await editAdoption.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editAdoption})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
