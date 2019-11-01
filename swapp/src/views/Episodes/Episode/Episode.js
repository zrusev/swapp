import React from 'react';
import EpisodePreview from '../../../components/Episodes/Episode/EpisodePreview'

const Episode = () => {
    // const query = `{
    //   episode(id: "films.3") {
    //     episodeId
    //     director
    //     image
    //     title
    //     openingCrawl
    //     releaseDate
    //     people(first: 3) {
    //       edges {
    //         node {
    //           id
    //           name
    //           image
    //         }
    //       }
    //     }
    //   }
    // }`

    const episode = {
        "data": {
          "episode": {
            "episodeId": 6,
            "director": "Richard Marquand",
            "image": "https://cdn-s3.allmusic.com/release-covers/500/0002/766/0002766190.jpg",
            "title": "Return of the Jedi",
            "openingCrawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
            "releaseDate": "1983-05-25",
            "people": {
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
                    "id": "people.13",
                    "name": "Chewbacca",
                    "image": "https://cdn-s3.touchofmodern.com/products/000/618/953/7d97f903a587c703cfa91bfd35527975_large.jpg?1485457758"
                  }
                }
              ]
            }
          }
        }
      }

    return (
        <EpisodePreview episode={episode.data.episode} />
    )
}

export default Episode;