import axios from 'axios'
class ApiCalls{
    public baseUrl = 'http://localhost:3000/api/dashboard'
    public usersController = `${this.baseUrl}/users`
    public contactusController = `${this.baseUrl}/contactus`
    public jobsController = `${this.baseUrl}/jobs`
    public jobsApplicationsController = `${this.baseUrl}/jobsapplications`

    onError = (error: any) => {
        console.log('An error occurred: ', error.message)
    }
    Error = this.onError.bind(this)

    findALlUsers = (onData: any, onError: any = this.Error) => {
        axios.get(this.usersController).then(onData, onError)
    }

    findContactUs =(onData:any, onError:any = this.Error)=>{
        axios.get(this.contactusController).then(onData, onError)
    }

    findAllJobs=(onData:any, onError:any = this.Error)=>{
        axios.get(this.jobsController).then(onData, onError)
    }

    findAllJobsApplications =(onData:any, onError:any = this.Error)=>{
        axios.get(this.jobsApplicationsController).then(onData, onError)
    }
     UpDataJobs=(jobs:any,onData:any, onError:any = this.Error)=>{
        axios.put(this.jobsController,jobs).then(onData, onError)
    }
    UpDataJobsApplications=(JobsApplications: any,onData:any,onError:any =this.Error)=>{
        axios.put(this.jobsApplicationsController,JobsApplications).then(onData, onError)
    }

}

export default new ApiCalls()
