import { Race } from '../models/race.model.js'



export const races = async (req,res) => {
    try{
        const racesList = await Race.findAll()
        res.json(racesList)
    }catch(err){
        console.log(err);
    }
   
}

export const raceById = async (req,res) => {
    const { id } = req.params
    try{
        const raceId = await Race.findOne({
            where: {
              id,
            },
          });
          res.json(raceId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createRaces = async  (req,res) => {
    const { name} = req.body
    if( !name){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRace = await Race.create({
        name
    })
    res.status(200).json({message: "Register was created succesfully", createRace})
}

export const deleteRaces = async (req,res) => {
    const { id } = req.params
    try{
         await Race.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Race with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editRaces = async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editRace = await Race.findByPk(id)
        editRace.name = name
        await editRace.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRace})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
