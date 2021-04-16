import { optionsDefault, fullUrl} from './config'

const apiGetUser = fullUrl('users')

const userServices = {

    getUsers() {
        return (fetch(apiGetUser,{
            method:'GET',
            ...optionsDefault
        }).then(res => res.json()))
    }

}

export default userServices