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
    const { petname, date, owner_name, identity_card, phone, address, occupation } = req.body
    if( !petname || !date || !owner_name || !identity_card || !phone || !address || !occupation ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createAdoption = await PersonToRefuge.create({
        petname, date, owner_name, identity_card, phone, address, occupation
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
        const { petname, date, owner_name, identity_card, phone, address, occupation } = req.body
    
        const editAdoption= await PersonToRefuge.findByPk(id)
        editAdoption.petname = petname
        editAdoption.date = date
        editAdoption.owner_name = owner_name
        editAdoption.identity_card = identity_card
        editAdoption.phone = phone
        editAdoption.address = address
        editAdoption.occupation = occupation
        await editAdoption.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editAdoption})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
