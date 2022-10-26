import { AdoptingRegister } from '../models/adopter.model.js'

export const adopting = async (req,res) => {
    try{
        const adoptingList = await AdoptingRegister.findAll()
        res.json(adoptingList)
    }catch(err){
        console.log(err);
    }
   
}

export const adoptingById = async (req,res) => {
    const { id } = req.params
    try{
        const adoptingId = await AdoptingRegister.findOne({
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
    const { name,lastname,identity_card, phone, email, address, occupation } = req.body
    if( !name || !lastname ||  !identity_card || !phone || !email ||  !address || !occupation ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createAdoption = await AdoptingRegister.create({
        name,lastname,identity_card, phone, email, address, occupation
    })
    res.json(createAdoption)
}

export const deleteAdoptions= async (req,res) => {
    const { id } = req.params
    try{
         await AdoptingRegister.destroy({
            where: {
                id
            }
        })
         res.status(204).json({message: `Adoption with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editAdoptions = async (req,res) => {
    const { id } = req.params
    try {
        const { name,lastname,identity_card, phone, email, address, occupation } = req.body
    
        const editAdoption= await AdoptingRegister.findByPk(id)
        editAdoption.name = name
        editAdoption.lastname = lastname
        editAdoption.identity_card = identity_card
        editAdoption.phone = phone
        editAdoption.email = email
        editAdoption.address = address
        editAdoption.occupation = occupation
        await editAdoption.save()
    
        res.json(editAdoption)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
