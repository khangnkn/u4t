import { resolve } from "dns";

export const userService = {
    login,
    register,
    logOut,
    update
}

function handleLogOut(resp){
    if (resp.code !== 1){
        if (resp.code === 401){
            logOut();
            window.location.reload(true);
        }
    }
    return resp;
}

function logOut(){
    localStorage.removeItem('user');
}
function login(username,password){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username,password})
    }

    return fetch(`/api/auth/login`,requestOptions)
            .then(resp => resp.json()).then(data=>{
                if (data.code !== 1){
                    return data;
                }
                var user = data.data;
                localStorage.setItem('user',JSON.stringify(user));
                return data;
            })
}

function register(user){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user})
    }
    return fetch(`/api/auth/register`,requestOptions)
            .then(handleLogOut).then(resp => resp.json()).then(data => {
                return data;
            })
}

function update(user){
    let header = new Headers();
    var userCookie = JSON.parse(localStorage.getItem('user'));
    header.append("Content-Type",'application/json');
    header.append("Authorization",userCookie ? 'Bearer' + userCookie.token : '');
    console.log(header, userCookie);
    let fd = new FormData();
    let {id,infor,avatar,data} = user;
    
    fd.append('id',JSON.stringify(id));
    fd.append('infor',JSON.stringify(infor));

    if (avatar != null) fd.append('avatar',avatar);
    fd.append('data',JSON.stringify(data));

    let req = new Request('/api/p/users/info',{
        method: 'POST',
        headers: header,
        mode: 'no-cors',
        body: fd
    })

    return fetch(req).then(handleLogOut).then(resp => resp.json()).then(data => {
        if (data.ok)  {
            var user = data.user;
            localStorage.setItem('user',JSON.stringify(user));
            return data;
        } else {
            return data;
        }
    })
}