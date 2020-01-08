import history from '../helpers/HistoryHelper';
const host = 'http://localhost:8080';
function handleLogOut(resp) {
  if (resp.code !== 1) {
    if (resp.code === 401) {
      logOut();
      // window.location.reload(true);
    }
  }
  return resp;
}

function logOut() {
  localStorage.removeItem('user');
  // window.location.reload(true);
  history.push('/');
}
function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${host}/api/auth/login`, requestOptions)
    .then((resp) => resp.json()).then((data) => {
      if (data.code !== 1) {
        return data;
      }
      const user = data.data;
      localStorage.setItem('user', JSON.stringify(user));
      return data;
    });
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user.username, password: user.password, role: user.role }),
  };
  console.log(requestOptions.body);
  return fetch(`${host}/api/auth/register`, requestOptions)
    .then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

function update(user) {
  var header = new Headers();
  const userCookie = JSON.parse(localStorage.getItem('user'));
  header.append('Content-Type', 'application/json');
  header.append('Authorization', userCookie ? `Bearer ${userCookie.token}` : ``);
  console.log(userCookie.token);
  var fd =new FormData();

  const {
    id, infor, avatar, data,
  } = user;

  fd.append('id', JSON.stringify(id));
  fd.append('infor', JSON.stringify(infor));
  
  
  if (infor.role === 0) {
    // fd.append('data', JSON.stringify({}));
  } else {
    fd.append('data', JSON.stringify(data));
  }

  if (avatar != null) fd.append('avatar', avatar);
  const req = new Request(`${host}/api/p/users/info`, {
    method: 'POST',
    headers: header,
    // mode: 'no-cors',
    body: fd,
  });
  console.log(req.headers);
  return fetch(req).then(handleLogOut).then((resp) => resp.json()).then((data) => {
    if (data.ok) {
      const { user } = data;
      localStorage.setItem('user', JSON.stringify(user));
      return data;
    }
    return data;
  });
}

function loadTop4() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${host}/api/tutors/top`, requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

function createContract(contract) {
  const header = new Headers();

  const userCookie = JSON.parse(localStorage.getItem('user'));

  header.append('Content-Type', 'application/json');
  header.append('Authorization', userCookie ? `Bearer${userCookie.token}` : 'Bearer');

  const fd = new FormData();

  fd.append('contract', JSON.stringify(contract));

  const req = new Request('/api/contract/create', {
    method: 'POST',
    headers: header,
    mode: 'no-cors',
    body: fd,
  });

  return fetch(req).then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

function loadAllContract(id) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      id,
    },
  };

  return fetch('/api/all-contract', requestOptions).then((resp) => resp.json()).then((data) => data.data);
}

function desicionContractAccept(id, value) {
  const header = new Headers();

  const userCookie = JSON.parse(localStorage.getItem('user'));

  header.append('Content-Type', 'application/json');
  header.append('Authorization', userCookie ? `Bearer${userCookie.token}` : 'Bearer');

  const fd = new FormData();

  fd.append('id', JSON.stringify(id));
  fd.append('choice', JSON.stringify(value));
  const req = new Request('/api/contract/accept', {
    method: 'POST',
    headers: header,
    mode: 'no-cors',
    body: fd,
  });

  return fetch(req).then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

function submitReviewContract(_id, review) {
  const headers = new Headers();
  const userCookie = JSON.parse(localStorage.getItem('user'));

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', userCookie ? `Bearer${userCookie.token}` : 'Bearer');

  const fd = new FormData();
  fd.append('_id', JSON.stringify(_id));
  fd.append('review', JSON.stringify(review));

  const req = new Request('/api/contracts/addreview', {
    method: 'POST',
    headers,
    mode: 'no-cors',
    body: fd,
  });

  return fetch(req).then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

function submitComplainContract(_id, complain) {
  const headers = new Headers();
  const userCookie = JSON.parse(localStorage.getItem('user'));

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', userCookie ? `Bearer${userCookie.token}` : 'Bearer');

  const fd = new FormData();
  fd.append('_id', JSON.stringify(_id));
  fd.append('complain', JSON.stringify(complain));

  const req = new Request('/api/contracts/addcomplain', {
    method: 'POST',
    headers,
    mode: 'no-cors',
    body: fd,
  });

  return fetch(req).then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

function submitCompleteContract(_id) {
  const headers = new Headers();
  const userCookie = JSON.parse(localStorage.getItem('user'));

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', userCookie ? `Bearer${userCookie.token}` : 'Bearer');

  const fd = new FormData();
  fd.append('_id', JSON.stringify(_id));

  const req = new Request('/api/contracts/complete', {
    method: 'POST',
    headers,
    mode: 'no-cors',
    body: fd,
  });

  return fetch(req).then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

export default {
  login,
  register,
  logOut,
  update,
  loadTop4,
  loadAllContract,
  createContract,
  desicionContractAccept,
  submitReviewContract,
  submitComplainContract,
  submitCompleteContract,
};
