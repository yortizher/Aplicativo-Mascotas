import { Pets } from '../models/pets.model.js'



export const pets = async (req,res) => {
    try{
        const petsList = await Pets.findAll()
        res.json(petsList)
    }catch(err){
        console.log(err);
    }
   
}

export const petsById = async (req,res) => {
    const { id } = req.params
    try{
        const petsId = await Pets.findOne({
            where: {
              id,
            },
          });
          res.json(petsId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createPets = async  (req,res) => {
    const { name,age,img,race_id,refuge_id, status } = req.body
    if( !name || !age ||  !img ||!refuge_id || !race_id || !status){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createPets = await Pets.create({
        name,age,img,status, race_id, refuge_id
    })
    res.json(createPets)
}

export const deletePets = async (req,res) => {
    const { id } = req.params
    try{
         await Pets.destroy({
            where: {
                id
            }
        })
         res.status(204).json({message: `Pets with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editPets = async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editPets = await Pets.findByPk(id)
        editPets.name = name
        await editPets.save()
    
        res.json(editPets)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
