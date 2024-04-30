# Blogosphere

Blogosphere is a minimalist blogging app built with React and Redux, powered by Appwrite. It offers a user-friendly interface for creating, managing, and sharing blog content. With a responsive design and SEO optimization, it's the perfect platform for bloggers to express their thoughts and engage with their audience.

## Development Status

Blogosphere is still under development. Some features may be incomplete or in progress. Feedback is appreciated as I work towards a stable release.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Appwrite**: Backend as a Service (BaaS) platform for user authentication, database management, and file storage.

## Backend Services

In designing Blogosphere's backend services, I've prioritized backend agnosticism by abstracting away specific backend implementation details. This allows for easy integration with different backend systems or services, promoting flexibility and scalability in the application architecture.

### Authentication Service (AuthService)

Usage: Manages user authentication using the Appwrite service.
Initialization: Sets up the Appwrite client and initializes the account.
Methods:
- createAccount(): Creates a new user account.
- login(): Logs in a user.
- getCurrentUser(): Retrieves the currently logged-in user.
- logout(): Logs out the current user.

### Service (Service)

Usage: Handles database and file storage operations using the Appwrite service.
Initialization: Sets up the Appwrite client, databases, and storage.
Methods:
- createPost(): Creates a new post in the database.
- updatePost(): Updates an existing post.
- deletePost(): Deletes a post.
- getPost(): Retrieves a post.
- getPosts(): Retrieves multiple posts.
- uploadFile(): Uploads a file to storage.
- deleteFile(): Deletes a file from storage.
- getFilePreview(): Retrieves a file preview.
