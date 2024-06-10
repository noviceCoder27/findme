# findme
A user creation application


Follow these steps to run the project:


1. **Clone the Repository**
   Clone the project repository to your local machine. Replace `<url>` with the URL of your repository.
   ```
   git clone <url>
   ```

2. **Navigate to the Project Directory**
   Change your current directory to the project's directory.
   ```
   cd <repository-name>
   ```
3. **Navigate to client and server directories**
    ```
    cd client
    cd server
    ```

4. **Install Dependencies**
   Install the project dependencies for both client and server using `npm`.
   ```
   npm install
   ```

5. **Setup environment variables**
   Create a `.env` file and add your environment variables.

    - client
   ```
   VITE_USERS_BACKEND_URL = <your_backend_url>
   ```
   - server
   
    ```
    MONGO_URI = <mongodb_uri>
    PORT = <port_number>
    SECRET = <your_jwt_secret>
    ```


6. **Run the Project**
   Finally, run the project.
   ```
   npm run start
   ```



That's it! Your Findme project should now be running.

## API Documentation

## Note: 
For admin privileges create account with admin after the "@" symbol in email.

eg:

```
    user1@admin.com
    user2@admin.com
```

### GET /:userName
Fetches the details of a user.
- **URL Params**: `userName` - The username of the user.
- **Success Response**: User object.
- **Error Response**: Error message.

### GET /profilePic/:userName
Fetches the profile picture of a user.
- **URL Params**: `userName` - The username of the user.
- **Success Response**: Profile picture file.
- **Error Response**: Error message.

### GET /
Lists all users. Requires authentication and admin privileges.
- **Headers**: `Authorization: Bearer <token>`
- **Success Response**: Array of user objects.
- **Error Response**: Error message.

### POST /create
Creates a new user.
- **Data Params**: User object. The profile picture should be included in the 'profilePic' field as a file.
- **Success Response**: Created user object and `token` for authenticated requests.
- **Error Response**: Error message.

### POST /login
Logs in a user.
- **Data Params**: Object with `userName` and `password`.
- **Success Response**: `token` for authenticated requests.
- **Error Response**: Error message.

### PUT /:id
Updates a user. Requires authentication.
- **URL Params**: `id` - The ID of the user.
- **Headers**: `Authorization: Bearer <token>`
- **Data Params**: User object with updated fields.
- **Success Response**: Updated user object.
- **Error Response**: Error message.

### DELETE /:id
Deletes a user. Requires authentication.
- **URL Params**: `id` - The ID of the user.
- **Headers**: `Authorization: Bearer <token>`
- **Success Response**: Deleted user object.
- **Error Response**: Error message.
