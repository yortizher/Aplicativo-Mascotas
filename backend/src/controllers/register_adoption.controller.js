import { AdoptingRegister } from '../models/AdoptingRegister.model.js'

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
    const { city,date } = req.body
    if( !city || !date ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createAdoption = await AdoptingRegister.create({
        city,date})
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
         res.status(204).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editAdoptions = async (req,res) => {
    const { id } = req.params
    try {
        const { city,date} = req.body
    
        const editAdoption= await AdoptingRegister.findByPk(id)
        editAdoption.city = city
        editAdoption.date = date
        await editAdoption.save()
    
        res.json(editAdoption)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
