import config from "../config/config.js";

import { Client, ID , Databases , Query ,Storage } from "appwrite";

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
        console.log("hello")
        console.log(config.appwriteCollectionId)
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
        console.log("gilalal",file);
        console.log("bilala",config.appwriteBucketId);
        try {
            const aaron = await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            
            )
            return aaron
        }catch(error){
            console.log("appwrite services:: uploadFile :: error",error)
            console.log(" create file here",aaron)
            return false
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
    getFilePreview(fileId){
        this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
            
        )
    }
}
const service = new Service();

export default service