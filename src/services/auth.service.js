import api from './api'

class Auth{
    constructor(){
        this.authenticated = false
    }

    login(data, callBack, elseCallBack){
        api.post('/auth/login', data)
            .then(response => {
                if(response.status === 200 && response.data.access_token){
                    localStorage.setItem("access_token", response.data.access_token)
                    this.authenticated = true
                    callBack()
                }
                else{
                    this.authenticated = false
                    elseCallBack()
                }
            })
            .catch(err => {
                this.authenticated = false
                elseCallBack()
                console.error(err)
            })
    }

    logout(callBack){
        this.authenticated = false
        callBack()
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new Auth()