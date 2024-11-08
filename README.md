# Intern-Connect

Intern-Connect is an innovative platform designed to bridge the gap between students and internship opportunities. Whether you're a student looking to gain experience or an administrator managing internship programs, Intern-Connect provides a comprehensive solution.

Our website is hosted on [Intern-Connect](https://internconnect-somesh-guptas-projects.vercel.app/)
[Demo of our website](https://youtu.be/HIGJttxL22E?si=IXS770o-Ha-2kazV)

## Features

- **User Authentication**: Secure and seamless session management using cookies.
- **Role-Based Access**: Separate login portals for administrators and students to ensure secure and appropriate access.
- **Real-Time Notifications**: Instant notifications for password recovery requests.
- **Profile Management**: Both students and administrators can easily update their profiles.
- **Secure Password Management**: Robust password reset procedures to maintain account security.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: NodeJS
- **Database**: MySQL
- **Real-Time Communication**: Socket.IO

## Getting Started

### Prerequisites

- Node.js installed
- MySQL database setup on [Clever Cloud](https://www.clever-cloud.com/)
- Cloudinary Account Setup on [Cloudinary Official Site](https://cloudinary.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Som77G/Intern-Connect.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Intern-Connect
   ```

3. **Backend Setup:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install dependencies and start the server:

     ```bash
     npm install
     npm run dev
     ```

   - Create a `.env` file in the backend directory with the following environment variables:

     ```plaintext
     # Database Configuration
     mysql_url=
     MYSQL_HOST=
     MYSQL_PORT=
     MYSQL_DATABASE=
     MYSQL_USER=
     MYSQL_PASSWORD=

     # Server Configuration
     DOMAIN=http://localhost:5173
     PORT=3000

     # Authentication
     TOKEN_SECRET=5ca8968c-6116-443d-91b3-0d78d573f847

     # Email Configuration
     MY_EMAIL=
     MY_PASSWORD=

     # Cloudinary Configuration
     CLOUDINARY_CLIENT_NAME=
     CLOUDINARY_CLIENT_API=
     CLOUDINARY_CLIENT_SECRET=
     ```

     ### Environment Variables Explained:

     - **mysql_url**: The connection string for your MySQL database. This can be used as an alternative to specifying the individual MySQL connection parameters (host, port, database, user, password).
     - **MYSQL_HOST**: The hostname of your MySQL server.
     - **MYSQL_PORT**: The port number on which your MySQL server is running (default is usually 3306).
     - **MYSQL_DATABASE**: The name of the database you are connecting to.
     - **MYSQL_USER**: The username for accessing your MySQL database.
     - **MYSQL_PASSWORD**: The password for the MySQL user.
     - **DOMAIN**: The domain where your frontend application is running.
     - **PORT**: The port number on which your backend server will run.
     - **TOKEN_SECRET**: A secret key used for generating and verifying JWT tokens. This should be a long and random string to ensure security.
     - **MY_EMAIL**: The email address that will be used to send emails from the application.
     - **MY_PASSWORD**: The password for the email account specified in MY_EMAIL.
     - **CLOUDINARY_CLIENT_NAME**: Your Cloudinary account name.
     - **CLOUDINARY_CLIENT_API**: Your Cloudinary API key.
     - **CLOUDINARY_CLIENT_SECRET**: Your Cloudinary API secret.

4. **Frontend Setup:**

   - Navigate to the frontend directory:

     ```bash
     cd ../frontend
     ```

   - Install dependencies and start the development server:

     ```bash
     npm install
     npm run dev
     ```

The application should now be running locally. Visit http://localhost:5173 in your web browser to access Intern-Connect.

## Database Setup

- Create a table named `users_admin` in your MySQL database with the following structure and insert an admin user with a username and password.

```sql
CREATE TABLE IF NOT EXISTS users_admin(
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    resetpassword BOOLEAN DEFAULT FALSE,
    userid VARCHAR(100) PRIMARY KEY,
    verifytoken VARCHAR(100),
    profilecreated BOOLEAN DEFAULT FALSE
);

INSERT INTO users_admin (username, password, email, resetpassword, userid, verifytoken, profilecreated) 
VALUES ('admin_username', 'admin_password', 'admin_email', 0, 'admin_userid', NULL, 0);
```

**Note:** Replace the placeholders (`'admin_username'`, `'admin_password'`, `'admin_email'`, `'admin_userid'`) with actual values.

## Usage

1. **Login with your admin ID.**
   - If you're new to Intern-Connect, log in using the provided admin credentials. Once logged in, navigate to the "Add Student" feature available in the admin dashboard to create new student accounts. If you already have an account, simply log in using your credentials.

2. **Explore the dashboard.**
   - Students and administrators will have access to different features based on their roles. Students can browse internships, apply for opportunities, and manage their profiles. Administrators can post internships, review applications, and manage student profiles.

3. **Receive real-time notifications.**
   - Stay updated with real-time notifications for important actions such as password recovery requests.

4. **Manage your profile.**
   - Both students and administrators can update their profiles to keep information current and relevant.

## Contributing

If you'd like to contribute to Intern-Connect, we welcome your input! Please follow these steps:

1. **Fork the repository.**
   - Click on the "Fork" button at the top-right corner of the GitHub page to create your copy of the repository.

2. **Create a new branch for your feature:**

   ```bash
   git checkout -b feature-name
   ```

3. **Make your changes and commit them:**

   ```bash
   git add .
   git commit -m "Add feature description"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature-name
   ```

5. **Submit a pull request:**
   - Open a pull request on GitHub and provide a detailed description of your changes.

## License

Intern-Connect is licensed under the MIT License. See the LICENSE file for more information.
