import { Refuge } from '../models/refuge.model.js'

export const refuges = async (req,res) => {
    try{
        const refugesList = await Refuge.findAll()
        res.json(refugesList)
    }catch(err){
        console.log(err);
    }
   
}

export const refugesById = async (req,res) => {
    const { id } = req.params
    try{
        const refugeId = await Refuge.findOne({
            where: {
              id,
            },
          });
          res.json(refugeId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createRefuges = async  (req,res) => {
    const { name, address } = req.body
    if( !name || !address ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRefuge = await Refuge.create({
        name, address
    })
    res.json(createRefuge)
}

export const deleteRefuges = async (req,res) => {
    const { id } = req.params
    try{
         await Refuge.destroy({
            where: {
                id
            }
        })
         res.status(204).json({message: `Refuge with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editRefuges = async (req,res) => {
    const { id } = req.params
    try {
        const { username, email, active } = req.body
    
        const editRefuge= await Refuge.findByPk(id)
        editUser.username = username
        editUser.email = email
        editUser.active = active
        await editRefuge.save()
    
        res.json(editRefuge)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
