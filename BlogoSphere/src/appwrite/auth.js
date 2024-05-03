import config from "../config/config.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account= new Account(this.client)
    }

    async createAccount({email , password ,name}){
        try{
            const userAcount = await this.account.create(ID.unique(),email,password,name)
            if(userAcount){
                //call a method to login directly
                this.login({email,password})
            }else{
                return error;
            }
        }catch(error){
            throw error;
        }

    }
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)    
        }catch(error){
            return error;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get(); 
                   
        }catch(error){
            console.log("yo") 
            console.log("Appwrite service :: getcurrentuser ::: error",error);
        }
        return null ;
    }
    async logout(){
        try{
            await this.account.deleteSessions()
        }catch(error){
            console.log("appwrite service:: logout:: error",error)
        }
    }
}

const authService = new AuthService

export default authService;
