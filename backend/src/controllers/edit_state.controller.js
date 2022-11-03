import { RefugeToPerson } from '../models/refuge_to_person.model.js'

export const editState = async (req,res) => {
    const { id } = req.params
    try {
        const { status } = req.body

        const editAdoption= await RefugeToPerson.findByPk(id)
        
        editAdoption.status = status
        await editAdoption.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editAdoption})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
