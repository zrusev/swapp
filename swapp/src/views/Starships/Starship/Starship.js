import React from 'react';
import StarshipPreview from '../../../components/Starships/StarshipPreview/StarshipPreview'

const Starships = () => {
    // const query = `
    // {
    //   starship(id: "starships.59") {
    //     id
    //     name
    //     model
    //     image
    //     starshipClass
    //     cost
    //     maxAtmosphericSpeed
    //     maxMLPerHour
    //     hyperdriveRating
    //     crew
    //   }
    // }`

    const starship = {
      "data": {
        "starship": {
          "id": "starships.59",
          "name": "Trade Federation cruiser",
          "model": "Providence-class carrier/destroyer",
          "image": "https://pm1.narvii.com/6852/c789a6a9f099f3ce22fb1bb3d58976412216c30fv2_128.jpg",
          "starshipClass": "capital ship",
          "cost": 125000000,
          "maxAtmosphericSpeed": 1050,
          "maxMLPerHour": null,
          "hyperdriveRating": 1.5,
          "crew": 600
        }
      }
    }

    return (
        <StarshipPreview starship={starship.data.starship}/>
    )
}

export default Starships;