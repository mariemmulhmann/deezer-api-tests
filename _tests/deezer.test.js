const httpMethod = require('../helper/global/httpMethod');
const deezerComparisonData = require('../helper/deezer/deezerComparisonData');
const urls = require('../helper/deezer/urls');
const messageByStatusCode = require('../helper/global/messageByStatusCode');

describe("Verification of the GET method in the /infos service", function () {
    it('Status code 200 - Standard Return Data', async function () {
        let response = await httpMethod.GET(urls.infos());

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.country_iso).toEqual(deezerComparisonData.infoDeezer.country_iso);
        expect(response.res.country).toEqual(deezerComparisonData.infoDeezer.country);
        expect(response.res.open).toEqual(deezerComparisonData.infoDeezer.open);
        expect(response.res.pop).toEqual(deezerComparisonData.infoDeezer.pop);
        expect(response.res.upload_token_lifetime).toEqual(deezerComparisonData.infoDeezer.upload_token_lifetime);
        expect(response.res.user_token).toEqual(deezerComparisonData.infoDeezer.user_token);
        expect(response.res.hosts).toEqual(deezerComparisonData.infoDeezer.hosts);
    })
}),

describe("Verification of the GET method in the /radio service", function () {
    it('Status code 200 - Pop Internacional: Radio', async function () {
        let radioID = 890;

        let response = await httpMethod.GET(urls.radio(radioID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(radioID);
        expect(response.res.title).toEqual(deezerComparisonData.radioDeezer.title);
        expect(response.res.description).toEqual(deezerComparisonData.radioDeezer.description);
        expect(response.res.type).toEqual(deezerComparisonData.radioDeezer.type);
    }),

    it('Status code 200 (Code message 500) - Wrong Parameter', async function () {
        let radioID = "example";

        let response = await httpMethod.GET(urls.radio(radioID));

        expect(response.status).toEqual(messageByStatusCode.WRONG_PARAMETER.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.WRONG_PARAMETER.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.WRONG_PARAMETER.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.WRONG_PARAMETER.code);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let radioID = 7656;

        let response = await httpMethod.GET(urls.radio(radioID));

        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - Album does not exist', async function () {
        let radioID = "";

        let response = await httpMethod.GET(urls.radio(radioID));

        expect(response.status).toEqual(messageByStatusCode.RADIO_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.RADIO_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /genre service", function () {
    it('Status code 200 - Biguine: Genre', async function () {
        let genreID = 4;

        let response = await httpMethod.GET(urls.genre(genreID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(genreID);
        expect(response.res.name).toEqual(deezerComparisonData.genreDeezer.name);
        expect(response.res.type).toEqual(deezerComparisonData.genreDeezer.type);
    }),

    it('Status code 200 - Return all results when genreID is a invalid data', async function () {
        let genreID = "example";

        let response = await httpMethod.GET(urls.genre(genreID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(deezerComparisonData.allGenreDeezer.id);
        expect(response.res.name).toEqual(deezerComparisonData.allGenreDeezer.name);
        expect(response.res.type).toEqual(deezerComparisonData.allGenreDeezer.type);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let genreID = 40;

        let response = await httpMethod.GET(urls.genre(genreID));

        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - album does not exist', async function () {
        let genreID = "";

        let response = await httpMethod.GET(urls.genre(genreID));

        expect(response.status).toEqual(messageByStatusCode.GENRE_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.GENRE_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /search service", function () {
    it('Status code 200 - Beyoncé first album', async function () {
        let searchKey = 'beyonce';

        let response = await httpMethod.GET(urls.search(searchKey));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.data[0].id).toEqual(deezerComparisonData.searchDeezer.albumId);
        expect(response.res.data[0].title).toEqual(deezerComparisonData.searchDeezer.albumName);
        expect(response.res.data[0].artist.name).toEqual(deezerComparisonData.searchDeezer.artistName);
    }),

    it('Status code 200 - Empty parameter', async function () {
        let searchKey = "";

        let response = await httpMethod.GET(urls.search(searchKey));

        expect(response.status).toEqual(messageByStatusCode.EMPTY_PARAMETER.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.EMPTY_PARAMETER.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.EMPTY_PARAMETER.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.EMPTY_PARAMETER.code);
    })
}),

describe("Verification of the GET method in the /playlist service", function () {
    it('Status code 200 - City Sounds Rio de Janeiro: Playlist', async function () {
        let playlistID = 7817393802;

        let response = await httpMethod.GET(urls.playlist(playlistID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(playlistID);
        expect(response.res.title).toEqual(deezerComparisonData.playlistDeezer.title);
        expect(response.res.description).toEqual(deezerComparisonData.playlistDeezer.description);
        expect(response.res.type).toEqual(deezerComparisonData.playlistDeezer.type);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let playlistID = 89;

        let response = await httpMethod.GET(urls.playlist(playlistID));

        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - Playlist does not Exist', async function () {
        let playlistID = "";

        let response = await httpMethod.GET(urls.playlist(playlistID));

        expect(response.status).toEqual(messageByStatusCode.PLAYLIST_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.PLAYLIST_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /artist service", function () {
    it('Status code 200 - Maria Betania: Artist', async function () {
        let artistID = 15588;

        let response = await httpMethod.GET(urls.artist(artistID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(artistID);
        expect(response.res.name).toEqual(deezerComparisonData.artistDeezer.name);
        expect(response.res.type).toEqual(deezerComparisonData.artistDeezer.type);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let artistID = 9999999;

        let response = await httpMethod.GET(urls.artist(artistID));
        
        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - Artist does not exist', async function () {
        let artistID = "";

        let response = await httpMethod.GET(urls.artist(artistID));

        expect(response.status).toEqual(messageByStatusCode.ARTIST_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.ARTIST_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /editorial service", function () {
    it('Status code 200 - K-Pop: Editorial', async function () {
        let editorialID = 23;

        let response = await httpMethod.GET(urls.editorial(editorialID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(editorialID);
        expect(response.res.name).toEqual(deezerComparisonData.editorialDeezer.name);
        expect(response.res.type).toEqual(deezerComparisonData.editorialDeezer.type);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let editorialID = 899;

        let response = await httpMethod.GET(urls.editorial(editorialID));

        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - Editorial does not exist', async function () {
        let editorialID = "";

        let response = await httpMethod.GET(urls.editorial(editorialID));

        expect(response.status).toEqual(messageByStatusCode.EDITORIAL_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.EDITORIAL_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /track service", function () {
    it('Status code 200 - K-Pop: track', async function () {
        let trackID = 2300990;

        let response = await httpMethod.GET(urls.track(trackID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(trackID);
        expect(response.res.name).toEqual(deezerComparisonData.trackDeezer.name);
        expect(response.res.type).toEqual(deezerComparisonData.trackDeezer.type);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let trackID = 899;

        let response = await httpMethod.GET(urls.track(trackID));
        
        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - track does not exist', async function () {
        let trackID = "";

        let response = await httpMethod.GET(urls.track(trackID));

        expect(response.status).toEqual(messageByStatusCode.TRACK_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.TRACK_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /comment service", function () {   
    it('Status code 200 - Invalid class comment', async function () {
        let commentID = 7817393802;

        let response = await httpMethod.GET(urls.comment(commentID));

        expect(response.status).toEqual(messageByStatusCode.INVALID_CLASS_COMMENT.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.INVALID_CLASS_COMMENT.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.INVALID_CLASS_COMMENT.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.INVALID_CLASS_COMMENT.code);
    }),

    it('Status code 404 - comment does not exist', async function () {
        let commentID = "";

        let response = await httpMethod.GET(urls.comment(commentID));

        expect(response.status).toEqual(messageByStatusCode.COMMENT_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.COMMENT_DOES_NOT_EXIST.message);
    })
}),

describe("Verification of the GET method in the /album service", function () {
    it('Status code 200 - K-Pop: album', async function () {
        let albumID = 327676417;

        let response = await httpMethod.GET(urls.album(albumID));

        expect(response.status).toEqual(messageByStatusCode.SUCCESS.statusCode);
        expect(response.res.id).toEqual(albumID);
        expect(response.res.title).toEqual(deezerComparisonData.albumDeezer.title);
        expect(response.res.type).toEqual(deezerComparisonData.albumDeezer.type);
    }),

    it('Status code 200 (Code message 800) - Data Exception', async function () {
        let albumID = 897;

        let response = await httpMethod.GET(urls.album(albumID));
        
        expect(response.status).toEqual(messageByStatusCode.DATA_EXCEPTION.statusCode);
        expect(response.res.error.type).toEqual(messageByStatusCode.DATA_EXCEPTION.type);
        expect(response.res.error.message).toEqual(messageByStatusCode.DATA_EXCEPTION.message);
        expect(response.res.error.code).toEqual(messageByStatusCode.DATA_EXCEPTION.code);
    }),

    it('Status code 404 - album does not exist', async function () {
        let albumID = "";

        let response = await httpMethod.GET(urls.album(albumID));

        expect(response.status).toEqual(messageByStatusCode.ALBUM_DOES_NOT_EXIST.statusCode);
        expect(response.res.message).toEqual(messageByStatusCode.ALBUM_DOES_NOT_EXIST.message);
    })
})