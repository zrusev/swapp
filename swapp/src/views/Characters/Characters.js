import React from 'react';
import CharactersPreview from '../../components/Characters/CharactersPreview'

const Characters = () => {
    // const query = `{
    //   allPeople(first: 3) {
    //     edges {
    //       node {
    //         id
    //         name
    //         image
    //       }
    //     }
    //   }
    // }`
    
    const characters = {
      "data": {
        "allPeople": {
          "edges": [
            {
              "node": {
                "id": "people.1",
                "name": "Luke Skywalker",
                "image": "https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg"
              }
            },
            {
              "node": {
                "id": "people.10",
                "name": "Obi-Wan Kenobi",
                "image": "https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200"
              }
            },
            {
              "node": {
                "id": "people.11",
                "name": "Anakin Skywalker",
                "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg"
              }
            }
          ]
        }
      }
    }

    return (
        <CharactersPreview characters={characters.data.allPeople} />
    )
}

export default Characters;