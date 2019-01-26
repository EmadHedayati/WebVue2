import Service from '../utils/Service'

export default class RegisterService extends Service {
    login (username, password) {
        return this.request('post', {name: 'register.login'}, {username: username, password: password})
    }

    signup (username, email, password) {
        return this.request('post', {name: 'register.signup'}, {username: username, email: email, password: password})
    }
}
