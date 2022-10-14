export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
            },
        body: JSON.stringify({
            password,
            email
            })
    })
    .then(response => {
        try {
            if (response.status === 201){
                return response.json();
            }
        } catch(e) {
            return (e)
        }
    })
    .then(res => res)
    .catch(err => console.log(`Не удалось зарегистрировать пользователя. ${err}`));
}

export const login = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
            },
        body: JSON.stringify({
            password,
            email
            })
    })
    .then(response => {
        try {
            if (response.status === 200){
                return response.json();
            }
        } catch(err) {
            return (err)
        }
    })
    .then(data => {
        if(data.token) {
            localStorage.setItem('token', data.token);
            return data;
        } else {
            return;
        }
    })
    .catch(err => console.log(`Не удалось войти. ${err}`));
}