import axios from "axios";
class LoginServices{
    create(user){
        return axios.post(" http://localhost:3001/user",user);
        }
    
    login(username,password){
        return axios.get("    http://localhost:3001/user?username=" +username+ "&password=" +password);
    }
}


export default new LoginServices();