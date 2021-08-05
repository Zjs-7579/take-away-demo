
import axios from  'axios'

export default function get(url) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'GET',
            url: url
        }).then(res => resolve(res.data))
            .catch(error=>reject(error.data))
    })
}