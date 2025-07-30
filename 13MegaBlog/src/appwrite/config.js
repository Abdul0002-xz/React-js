import {Client , ID , Storage , Databases , Query} from 'appwrite'
import config from '../Config/Config'

 export class Service{

    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title , slug , content , featuredImage , status , userId}){
        try {

           return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.error("Account creation failed:", error.message);
            throw new Error("Unable to create account. Please try again.");
        }
    }

    async updatePost(slug , {title , content , featuredImage , status}){
        try {

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
            )
            
        } catch (error) {
             console.error("Account updation failed:", error.message);
            throw new Error("Unable to update account. Please try again.");
        }
    }

    async deletePost(slug){
        try {

            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )

            return true;
            
        } catch (error) {
            console.error("Account deletion failed:", error.message);
            throw new Error("Unable to delete account. Please try again.");
        }
    }

    async getPost(slug){
        try {

          return  await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.error("Account getting failed:", error.message);
            throw new Error("Unable to get account. Please try again.");
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error" , error);
            return false;
        }
    }

    // file upload Service

    async uploadFile(file){
        try {

            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error" , error);
            return false;
        }
    }

    // delete File

    async deleteFile(fileId){
        try {

            return await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.log("appwrtie serive :: deleteFile :: errors" , error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }


 }; 

 const service = new Service();

 export default service