function handleLogOut(resp) {
  if (resp.code !== 1) {
    if (resp.code === 401) {
      logOut();
      window.location.reload(true);
    }
  }
  return resp;
}

function logOut() {
  localStorage.removeItem('user');
}
function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch('/api/auth/login', requestOptions)
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
  return fetch('/api/auth/register', requestOptions)
    .then(handleLogOut).then((resp) => resp.json()).then((data) => data);
}

function update(user) {
  const header = new Headers();
  const userCookie = JSON.parse(localStorage.getItem('user'));
  header.append('Content-Type', 'application/json');
  header.append('Authorization', userCookie ? `Bearer${userCookie.token}` : '');
  const fd = new FormData();
  const {
    id, infor, avatar, data,
  } = user;

  fd.append('id', JSON.stringify(id));
  fd.append('infor', JSON.stringify(infor));

  if (avatar != null) fd.append('avatar', avatar);
  if (infor.role === 0) {
    fd.append('data', JSON.stringify({}));
  } else {
    fd.append('data', JSON.stringify(data));
  }

  const req = new Request('/update', {
    method: 'POST',
    headers: header,
    mode: 'no-cors',
    body: fd,
  });

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

  return fetch('/api/top4', requestOptions).then((resp) => resp.json()).then((data) => data.data);
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


export default {
  login,
  register,
  logOut,
  update,
  loadTop4,
};
