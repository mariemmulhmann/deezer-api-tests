const { artist } = require("./urls");

module.exports = {
    infoDeezer: {
        country_iso: "US",
        country: "United States of America",
        open: true,
        pop: "fr",
        upload_token_lifetime: 14400,
        user_token: null,
        hosts: {
            "stream": "http://cdn-proxy-{0}.dzcdn.net/mobile/1/",
            "images": "http://cdn-images.dzcdn.net/images"
        }
    },

    radioDeezer: {
        title: "Pop internacional",
        description: "Pop internacional",
        type: "radio"
    },

    genreDeezer: {
        name: "Biguine",
        type: "genre"
    },

    allGenreDeezer: {
        id: 0,
        name: "All",
        type: "genre"
    },

    searchDeezer:{
        albumId: 2658723742,
        albumName: "TEXAS HOLD 'EM",
        artistName: "Beyoncé"
    },

    playlistDeezer:{
        title: "City Sounds Rio de Janeiro",
        description: "Press play and you're already in Rio de Janeiro",
        type: "playlist"
    },

    artistDeezer:{
        name: "Maria Bethânia",
        type: "artist"
    },

    editorialDeezer:{
        name: "K-Pop",
        type: "editorial"
    },

    trackDeezer:{
        title: "Build A Bridge",
        type: "track"
    },

    albumDeezer:{
        title: "Dragostea Din Tei (Romanian Version)",
        type: "album"
    }
}