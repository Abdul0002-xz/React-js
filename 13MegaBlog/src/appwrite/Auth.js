import config from "../Config/Config";
import {Client , Account , ID} from "appwrite";
class Auth{
    Client = new Client();
    Account;

    constructor(){
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            
            this.Account = new Account(this.Client)
    }
    

};

const AuthService = new Auth();

export default AuthService;