export const userService = {
    login,
    register,
    logOut
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
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify({username,password})
    }

    return fetch(`/user/login`,requestOptions)
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
    return fetch(`/user/register`,requestOptions)
            .then(handleLogOut).then(resp => resp.json()).then(data => {
                return data;
            })
}