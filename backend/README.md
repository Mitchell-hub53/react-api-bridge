# AgriGrow Backend

This is the Node.js, Express, and MongoDB backend for the AgriGrow React application.

## Table of Contents
1.  [Setup Instructions](#setup-instructions)
2.  [Running the Backend Locally](#running-the-backend-locally)
3.  [Environment Variables](#environment-variables)
4.  [Creating an Admin User](#creating-an-admin-user)
5.  [API Endpoints](#api-endpoints)
6.  [Connecting the React Frontend](#connecting-the-react-frontend)
7.  [Deployment Instructions](#deployment-instructions)

---

### Setup Instructions

1.  **Clone the repository** (if you haven't already) and navigate into the `backend` directory.
2.  **Install dependencies** by running the following command in your terminal:
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `backend` root directory. Copy the contents of `.env.example` into it.

---

### Running the Backend Locally

To run the server in development mode (with automatic restarts on file changes), use:

```bash
npm run dev
```

The server will start on `http://localhost:5000` (or the port you specify in your `.env` file).

---

### Environment Variables

Your `.env` file should contain the following variables. Replace the placeholder values with your actual data.

```
# --- .env ---

# Port for the server to run on
PORT=5000

# Your MongoDB connection string
# Example: mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<databaseName>?retryWrites=true&w=majority
MONGO_URI=

# Secret key for signing JWTs (JSON Web Tokens)
# Can be any long, random string
JWT_SECRET=your_super_secret_key_123

# Default admin credentials for initial setup
# IMPORTANT: Change the password after the first login
ADMIN_EMAIL=admin@agrigrow.com
ADMIN_PASSWORD=adminpassword
```

---

### Creating an Admin User

An admin user is automatically created for you the first time you start the server, using the `ADMIN_EMAIL` and `ADMIN_PASSWORD` from your `.env` file. You can use these credentials to log in and manage portfolio projects.

**IMPORTANT**: For security, you should change this default password immediately after your first login.

---

### API Endpoints

-   `POST /api/auth/login` - **Public** - Authenticate an admin user. Expects `email` and `password` in the body. Returns a JWT.
-   `POST /api/messages` - **Public** - Submit a message from the contact form. Expects `name`, `email`, `subject`, `message`.
-   `GET /api/projects` - **Public** - Get all portfolio projects.
-   `GET /api/projects/:id` - **Public** - Get a single project by its ID.
-   `POST /api/projects` - **Protected** - Create a new project. Requires a valid JWT.
-   `PUT /api/projects/:id` - **Protected** - Update a project. Requires a valid JWT.
-   `DELETE /api/projects/:id` - **Protected** - Delete a project. Requires a valid JWT.

---

### Connecting the React Frontend

To connect your AgriGrow React frontend to this backend, you need to update the API calls in your React code to point to your new local backend server.

1.  **Update API Base URL:**
    It's best practice to have a single source for your API's base URL. You can modify your `src/lib/api.ts` file or create a new config file.

2.  **Example: Updating the Contact Form Submission**

    Modify the `handleSubmit` function in your `src/pages/Contact.tsx` file.

    ```javascript
    // src/pages/Contact.tsx

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    ```

3.  **Handling Authentication (for Admin Panel):**

    When you build the admin panel for managing projects:

    *   **Login:** Send a `POST` request to `/api/auth/login`. If successful, the backend will return a token.
    *   **Store Token:** Store this JWT in `localStorage`.
    *   **Send Token:** For any protected API calls (like creating or deleting a project), include the token in the `Authorization` header.

    ```javascript
    const token = localStorage.getItem('authToken');

    await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(newProjectData),
    });
    ```

---

### Deployment Instructions

You can deploy this backend for free on services like Render or Railway.

#### Deploying on Render

1.  **Push to GitHub:** Make sure your `backend` code is in a GitHub repository.
2.  **Create a New Web Service:** Go to your Render dashboard and click "New" -> "Web Service".
3.  **Connect Your Repo:** Choose your GitHub repository.
4.  **Configure Settings:**
    *   **Name:** Give your service a name (e.g., `agrigrow-backend`).
    *   **Root Directory:** Set this to `backend` (if your repo has both frontend and backend folders).
    *   **Environment:** `Node`.
    *   **Build Command:** `npm install`
    *   **Start Command:** `npm start`
5.  **Add Environment Variables:** Under the "Environment" section, add the same key-value pairs from your `.env` file (`MONGO_URI`, `JWT_SECRET`, `PORT`, etc.).
6.  **Deploy:** Click "Create Web Service". Render will automatically build and deploy your application.

    Your backend will be live at the URL provided by Render (e.g., `https://agrigrow-backend.onrender.com`). Remember to update the API endpoints in your deployed frontend to use this new URL.
