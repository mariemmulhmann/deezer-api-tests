module.exports = {
    SUCCESS: {
        statusCode: 200
    },

    DATA_EXCEPTION: {
        statusCode: 200,
        type: "DataException",
        message: "no data",
        code: 800
    },

    WRONG_PARAMETER: {
        statusCode: 200,
        type: "ParameterException",
        message: "Wrong parameter",
        code: 500
    },

    EMPTY_PARAMETER: {
        statusCode: 200,
        type: "ParameterException",
        message: "empty parameter",
        code: 500
    },

    INVALID_CLASS_COMMENT: {
        statusCode: 200,
        type: "InvalidQueryException",
        message: "Unknown path components : /Invalid class comment",
        code: 600
    },

    RADIO_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/radio/' does not exist",
    },

    GENRE_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/genre/' does not exist",
    },

    PLAYLIST_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/playlist/' does not exist",
    },

    ARTIST_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/artist/' does not exist",
    },

    EDITORIAL_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/editorial/' does not exist",
    },

    TRACK_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/track/' does not exist",
    },

    COMMENT_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/comment/' does not exist",
    },

    ALBUM_DOES_NOT_EXIST: {
        statusCode: 404,
        message: "Endpoint '/album/' does not exist",
    }
}