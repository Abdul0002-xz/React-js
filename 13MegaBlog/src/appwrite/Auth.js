import config from "../Config/Config";
import { Client, Account, ID } from "appwrite";
class Auth {
    Client = new Client();
    Account;

    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.Account = new Account(this.Client)
    }


    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.Account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // wre will call another callback function
                return this.Login({email,password});
            }

            else {
                return userAccount;
            }

        } catch (error) {
            console.error("Account creation failed:", error.message);
            throw new Error("Unable to create account. Please try again.");
        }
    }

    async Login({ email, password }) {
        try {
            return this.Account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            console.error("Account Login failed:", error.message);
            throw new Error("Unable to Login account. Please try again.");
        }
    }

    


};

const AuthService = new Auth();

export default AuthService;