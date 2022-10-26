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
    const { username,email,active } = req.body
    if( !username || !email ||  active === 'undefined'){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRace = await Race.create({
        username,
        email,
        active
    })
    res.json(createRace)
}

export const deleteRace = async (req,res) => {
    const { id } = req.params
    try{
         await Race.destroy({
            where: {
                id
            }
        })
         res.status(204).json({message: `Race with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editRace = async (req,res) => {
    const { id } = req.params
    try {
        const { username, email, active } = req.body
    
        const editRace = await Race.findByPk(id)
        editRace.username = username
        editRace.email = email
        editRace.active = active
        await editRace.save()
    
        res.json(editRace)
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
