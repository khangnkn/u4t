import queryString from 'query-string';

const host = 'http://localhost:8080';


function loadSkills() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${host}/api/skills`, requestOptions).then((resp) => {return resp.json();}).then((data) => {return data.data});
}

function loadCities() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${host}/api/cities`, requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

function loadLevels() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${host}/api/levels`, requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

const search = (data) => {
  console.log(data);
  const qs = queryString.stringify(data);
  return fetch(`${host}/api/search?${qs}`).then((data) => data.json()).then((ret) => ret);
};


function loadContract(id) {
  const requestOptions = {
<<<<<<< HEAD
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
  }
  return fetch(`${host}/api/contracts/${id}`,requestOptions).then(resp => resp.json()).then(data => {
      return data;
  });
=======
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`/api/contracts/${id}`, requestOptions).then((resp) => resp.json()).then((data) => data);
>>>>>>> 00febc84c2a559e68dc215010cc01ea369986dce
}

function loadUserInfor(id) {
  const requestOptions = {
    method: 'GET',
<<<<<<< HEAD
    headers: { 'Content-Type': 'application/json'}
}
return fetch(`${host}/api/users/${id}`,requestOptions).then(resp => resp.json()).then(data => {
    return data;
});
=======
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`${host}/api/users/${id}`, requestOptions).then((resp) => resp.json()).then((data) => data);
>>>>>>> 00febc84c2a559e68dc215010cc01ea369986dce
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
