import queryString from 'query-string';

const host = 'http://localhost:8080';


function loadSkills() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch('/api/skills', requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

function loadCities() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch('/api/cities', requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

function loadLevels() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch('/api/levels', requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

const search = (data) => {
  console.log(data);
  const qs = queryString.stringify(data);
  return fetch(`${host}/api/search?${qs}`).then((data) => data.json()).then((ret) => ret);
};


function loadContract(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`/api/contracts/${id}`, requestOptions).then((resp) => resp.json()).then((data) => data);
}

function loadUserInfor(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`${host}/api/users/${id}`, requestOptions).then((resp) => resp.json()).then((data) => data);
}

const helperService = {
  loadSkills,
  loadCities,
  loadLevels,
  loadContract,
  search,
  loadUserInfor,
};

export {
  helperService,
};
