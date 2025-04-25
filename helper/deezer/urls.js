function infos() {
    let rotaApi = `/infos`;
    
    return rotaApi
}

function radio(radioID='') {
    let rotaApi = `/radio/${radioID}`;
    
    return rotaApi
}

function genre(genreID='') {
    let rotaApi = `/genre/${genreID}`;
    
    return rotaApi
}

function search(searchKey='') {
    let rotaApi = `/search?q=${searchKey}`;
    
    return rotaApi
}

function playlist(playlistID='') {
    let rotaApi = `/playlist/${playlistID}`;
    
    return rotaApi
}

function artist(artistID='') {
    let rotaApi = `/artist/${artistID}`;
    
    return rotaApi
}

function editorial(editorialID='') {
    let rotaApi = `/editorial/${editorialID}`;
    
    return rotaApi
}

function track(trackID='') {
    let rotaApi = `/track/${trackID}`;
    
    return rotaApi
}

function comment(commentID='') {
    let rotaApi = `/comment/${commentID}`;
    
    return rotaApi
}

function album(albumID='') {
    let rotaApi = `/album/${albumID}`;
    
    return rotaApi
}
module.exports = { infos, radio, genre, search, playlist, artist, editorial, track, comment, album}