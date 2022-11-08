  const  arrayFrutas= ()=>   {
     console.log('object');
    // metodo para la logica pertinente
        const urlData = "http://localhost:5000/api/v1/species"
        const urlDataRts =  fetch(urlData)
        .then(response => response.json())
        .then(data => console.log(data))
       
      // const rta =  urlDataRts.json()
     //return data
   };

export default arrayFrutas

// speciesRouter.get('/api/v1/species', species)
// speciesRouter.get('/api/v1/species/:id', speciesById)
// speciesRouter.post('/api/v1/species', createSpecies)
// speciesRouter.put('/api/v1/species/:id', editSpecies)
// speciesRouter.delete('/api/v1/species/:id', deleteSpecies)

// localhost:5000