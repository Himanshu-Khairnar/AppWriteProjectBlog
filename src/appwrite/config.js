import { Client, Account ,Databases,Storage} from "appwrite";

export const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APP_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
