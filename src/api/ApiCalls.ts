import axios from 'axios'
class ApiCalls{
    public baseUrl = 'http://localhost:3000/api/dashboard/'
    public usersController = `${this.baseUrl}/users`
    onError = (error: any) => {
        console.log('An error occurred: ', error.message)
    }
    Error = this.onError.bind(this)
    findALlUsers = (onData: any, onError: any = this.Error) => {
        axios.get(this.usersController).then(onData, onError)
    }
}

export default new ApiCalls()
