// custom.d.ts (your global definition file)

declare global {
    namespace Express {
        // Extending the built-in User interface with your properties
        interface User {
            id?: number;
            email?: string;
            displayName?:string;
            token?: string;
        }

        // Extending the built-in Request interface to include the 'user' property
        interface Request {
            user?: User;  // Make it optional as the user might not always be set
        }
        
        // Extending the built-in Response interface to include the 'user' property
         interface Response {
            user?: User;  // Make it optional as the user might not always be set
        }
    }
}

export { };  // This makes the file a module, which is required for TypeScript to treat this as a module definition
