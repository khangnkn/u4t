export const helperService = {
    loadSkills,
    loadCities,
    loadLevels
}

function loadSkills(){
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    } 

    return fetch(`/api/skills`,requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    })
}

function loadCities(){
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    } 

    return fetch(`/api/cities`,requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    })
}

function loadLevels(){
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    } 

    return fetch(`/api/levels`,requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    })
}