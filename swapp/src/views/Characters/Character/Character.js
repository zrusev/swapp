import React from 'react';
import CharacterPreview from '../../../components/Characters/Character/CharacterPreview';

const Character = () => {
    // const query = `
    //     {
    //         person(id: "people.10") {
    //         id
    //         name
    //         image
    //         height
    //         mass
    //         species {
    //             name
    //         }
    //         homeworld {
    //             name
    //         }
    //         starships(first: 3) {
    //             edges {
    //             node {
    //                 id
    //                 name
    //                 image
    //             }
    //             }
    //         }
    //         }
    //     }
    // `

    const character = {
      "data": {
        "person": {
          "id": "people.10",
          "name": "Obi-Wan Kenobi",
          "image": "https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200",
          "height": 182,
          "mass": 77,
          "species": {
            "name": "Human"
          },
          "homeworld": {
            "name": "Stewjon"
          },
          "starships": {
            "edges": [
              {
                "node": {
                  "id": "starships.48",
                  "name": "Jedi starfighter",
                  "image": "https://farm6.staticflickr.com/5490/30489234222_7bba9ecb45_b.jpg"
                }
              },
              {
                "node": {
                  "id": "starships.59",
                  "name": "Trade Federation cruiser",
                  "image": "https://pm1.narvii.com/6852/c789a6a9f099f3ce22fb1bb3d58976412216c30fv2_128.jpg"
                }
              },
              {
                "node": {
                  "id": "starships.64",
                  "name": "Naboo star skiff",
                  "image": "https://thumbs.ebaystatic.com/d/l225/m/mDOr-7gy_dQ5YbFnfm4L58w.jpg"
                }
              }
            ]
          }
        }
      }
    }

    return (
        <CharacterPreview character={character.data.person} />
    )
}

export default Character;