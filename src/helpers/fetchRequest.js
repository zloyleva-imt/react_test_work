import axios from 'axios'

export const fetchRequest = (options) => {

    return new Promise((resolve, reject) => {
        return axios(options)
            .then(res => {
                return (res.status == 200)?resolve(res.data):reject(res.data)
            })
    })

}