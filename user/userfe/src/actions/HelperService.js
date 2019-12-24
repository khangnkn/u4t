export const helperService = {
    loadSkills,
    loadCities,
    loadLevels,
    loadContract,
    loadUserInfor
}

function loadUserInfor(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    }

    return fetch(`/api/users/${id}`,requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    }) 
}

function loadSkills() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(`/api/skills`, requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    })
}

function loadCities() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(`/api/cities`, requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    })
}

function loadLevels() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(`/api/levels`, requestOptions).then(resp => resp.json()).then(data => {
        return data.data;
    })
}

function loadContract(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','_id' : id}
    }
    return fetch(`/api/contracts/${id}`,requestOptions).then(resp => resp.json()).then(data => {
        return data;
    });
}