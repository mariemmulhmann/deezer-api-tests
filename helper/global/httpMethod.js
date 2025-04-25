require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');
const config = require('../../resources/global/config');


async function GET(apiRoute) {
    const response = await fetch(config.URL_DEEZER + apiRoute, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
        }
    });

    try {

        let res = await response.json();

        return { res, status: response.status, detail: res.detail, items: res.items, key: res.key }

    } catch (st) {
        return { status: response.status }
    }
}

async function POST(apiRoute, postData) {

    a = await JSON.stringify(postData)

    const response = await fetch(config.URL_DEEZER + apiRoute, {
        method: "POST",
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
        },
        body: JSON.stringify(postData),
    }).catch((e) => { console.log('ERROR-POST', e) });

    try {
        let res = await response.json();

        return {
            res,
            status: response.status,
            detail: res.detail,
            items: res.items,
            key: res.key,
        }

    } catch (st) {
        return {
            status: response.status
        }
    }
}

async function PUT(apiRoute, putData) {

    const response = await fetch(config.URL_DEEZER + apiRoute, {
        method: "PUT",
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
        },
        body: JSON.stringify(putData)
    }).catch((e) => { console.log('ERROR-PUT', e) });

    let res = await response.json();

    return {
        res,
        status: response.status
    };
}

async function DELETE(apiRoute) {
    const response = await fetch(config.URL_DEEZER + apiRoute, {
        method: "DELETE",
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
        }
    });

    return { status: response.status };
}

async function PATCH(apiRoute, patchData) {
    const response = await fetch(config.URL_DEEZER + apiRoute, {
        method: "PATCH",
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
        },
        body: JSON.stringify(patchData)
    });
    return response;
}
module.exports = { GET, POST, PUT, DELETE, PATCH }