import decode from 'jwt-decode'
import {set} from './localStorage'

export const saveUserToken = (token) => {
    set('token', token)
    return decode(token)
}
