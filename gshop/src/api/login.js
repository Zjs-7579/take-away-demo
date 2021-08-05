import axios from  'axios'
export function PhoneLogin(url, data) {
    axios({
        method: 'POST',
        url: url,
        data: data,
    }).then(req => console.log(req))
        .catch(error => console.log(error))
}

export function UserLogin(url, data) {
    axios({
        method: 'POST',
        url: url,
        data: data,
    }).then(req => console.log(req))
        .catch(error => console.log(error))
}
