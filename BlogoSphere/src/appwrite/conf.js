import config from "../config/config.js";

import { Client, Account, ID , Databases , Query ,Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost( {title,content,featuredImage,status,userid}){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid
                }
            )
        }catch(error){
            console.log("appwrite service :: createPost :: error",error)
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        }catch(error){
            console.log("appwrite service :: updatePost :: error",error)
        }
    }
    async deletPost(slug){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        }catch(error){
            console.log("appwrite service :: deletepost :: error", error)
            return false
        }
        
    }
    async getPost(slug){
        try{
            await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true
        }catch(error){
            console.log("appwrite service :: getPost :: error",error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        }catch(error){
            console.log("appwrite service:: getpPosts :: error ",error)
            return false;
        }
    }

    //file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique
            )
        }catch(error){
            console.log("appwrite services:: uploadFile :: error",error)
        }
    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        }catch(error){
            console.log("appwrite services:: deleteFile :: error",error)
            return false ;
        }
    }
}

const service = new Service();

export default service