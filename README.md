# Job Portal Backend

Welcome to the Job Portal Backend repository! This backend system serves as the foundation for a job portal application, providing essential functionalities such as user registration, authentication, job search, and sorting filters.

## Features

-> User Registration and Login:
Users can register as recruiters and securely log in using JWT token-based authentication.

-> Token Generation: JWT (JSON Web Tokens) are generated upon successful login and used to authenticate and authorize requests to protected routes.

-> Authentication Middleware: Implementation of middleware to secure routes, ensuring that only authenticated users can access them.

-> Job Search: Provides a search query to find jobs based on specific criteria.

-> Sorting Filters: Utilizes MongoDB Aggregation Pipeline for sorting and filtering job listings.

## Setup
1. Clone the Repository:
```python
bash

# https://github.com/PreritKhandelwal98/JobPortal-Nodejs.git

```
2. Install Dependencies:
```python
bash

# cd job-portal-backend
  npm install

```
3. Environment Variables:

    -> Create a '.env' file in the root directory.

   -> Define environment variables including JWT_SECRET for JWT token 
      encryption and other necessary configurations.
4. Start the Server:
```python
sql

# npm start

```
3. API Routes:

    -> Registration: /api/register - POST request to register as a 
      recruiter.

     -> Login: /api/login - POST request to login and receive JWT token.
    
    -> Protected Routes: Various routes are protected by the authMiddleware, requiring a valid JWT token for access.

## Technologies Used

-> Node.js

-> Express.js

-> MongoDB

-> JWT (JSON Web Tokens)

-> Aggregation Pipeline

## Dependencies

-> bcryptjs: For password encryption

-> colors: For colorful console output

-> cors: Cross-Origin Resource Sharing middleware

-> dotenv: Load environment variables from a .env file

-> moment: For handling dates and times

-> mongoose: MongoDB object modeling for Node.js

-> nodemon: Development utility for automatically restarting the server

-> validator: Library for data validation and sanitization

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.



