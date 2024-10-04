import axios from 'axios'
// XhTxAuqtoSJ9g8yL
const EMPLOYEE_S_API_BASE_URL = "http://localhost:8080/employees"
// const EMPLOYEE_S_API_BASE_URL = "mongodb+srv://kirteshpatil05:XhTxAuqtoSJ9g8yL@cluster0.s44ah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_S_API_BASE_URL, employee)
    }

    getEmployees(){
        return axios.get(EMPLOYEE_S_API_BASE_URL)
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_S_API_BASE_URL+"/"+id)
    }
    
    deleteEmployeeById(id){
        return axios.delete(EMPLOYEE_S_API_BASE_URL+"/"+id)
    }

    updateEmployee(employee, id){
        return axios.put(EMPLOYEE_S_API_BASE_URL+"/"+id, employee)
    }
}

export default new EmployeeService();