import { Species } from '../models/species.model.js'



export const species = async (req,res) => {
    try{
        const speciesList = await Species.findAll()
        res.json(speciesList)
    }catch(err){
        console.log(err);
    }
   
}

export const speciesById = async (req,res) => {
    const { id } = req.params
    try{
        const speciesId = await Species.findOne({
            where: {
              id,
            },
          });
          res.json(speciesId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createSpecies = async  (req,res) => {
    try{
        const { name } = req.body
    if( !name ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createSpecies = await Species.create({
        name
    })
    res.status(200).json({message: 'Specie was created succesfully', createSpecies})
    }catch(error){
        console.log(error)
    }
    
}

export const deleteSpecies = async (req,res) => {
    const { id } = req.params
    try{
         await Species.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Species with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editSpecies = async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editSpecies = await Species.findByPk(id)
        editSpecies.name = name
        await editSpecies.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editSpecies})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
