# Blogosphere

Blogosphere is a minimalist blogging app built with React and Redux, powered by Appwrite. It offers a user-friendly interface for creating, managing, and sharing blog content. With a responsive design and SEO optimization, it's the perfect platform for bloggers to express their thoughts and engage with their audience.

## Development Status

Blogosphere is still under development. Some features may be incomplete or in progress. Feedback is appreciated as I work towards a stable release.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management library for managing application state.
- **React Router**: Declarative routing for React applications.
- **React Forms**: Efficient form handling and validation for React applications.
- **Appwrite**: Backend as a Service (BaaS) platform for user authentication, database management, and file storage.

## Backend Services

In designing Blogosphere's backend services, I've prioritized backend agnosticism by abstracting away specific backend implementation details. This allows for easy integration with different backend systems or services, promoting flexibility and scalability in the application architecture.

### Authentication Service (AuthService)

- Manages user authentication using the Appwrite service.
- Initialization: Sets up the Appwrite client and initializes the account.
- Methods:
  - createAccount(): Creates a new user account.
  - login(): Logs in a user.
  - getCurrentUser(): Retrieves the currently logged-in user.
  - logout(): Logs out the current user.

### Service (Service)

- Handles database and file storage operations using the Appwrite service.
- Initialization: Sets up the Appwrite client, databases, and storage.
- Methods:
  - createPost(): Creates a new post in the database.
  - updatePost(): Updates an existing post.
  - deletePost(): Deletes a post.
  - getPost(): Retrieves a post.
  - getPosts(): Retrieves multiple posts.
  - uploadFile(): Uploads a file to storage.
  - deleteFile(): Deletes a file from storage.
  - getFilePreview(): Retrieves a file preview.

## Components

### Footer Component:

- Displays footer section with Company, Support, and Legals links.
- Uses React Router for navigation.

### Header Component:

- Represents header/navigation bar.
- Conditionally renders links based on authentication status.
- Uses React Router for navigation.

### LogoutBtn Component:

- Provides logout functionality.
- Dispatches logout action with Redux.

### Button Component:

- Reusable button component.
- Customizable text, type, and styles.

### Input Component:

- Reusable input component for forms.
- Supports labels, types, and classNames.
- Utilizes `forwardRef` for input element reference.

### Login Component:

- Login form page.
- Uses React Router for navigation.
- Manages authentication state with Redux.
- Implements form validation with `react-hook-form`.
- Conditional rendering based on authentication status.

### Logo Component:

- Represents a logo.
- Can be customized with an actual logo image or icon.

### PostCard Component:

- Displays a card for post content.
- Uses React Router for navigation.
- Includes post title and featured image.

### Select Component:

- Reusable select/dropdown component.
- Supports options, labels, and classNames.
- Utilizes `forwardRef` for select element reference.

### Signup Component:
- Facilitates user registration for the blogging app.
- Utilizes `react-hook-form` for form validation.
- Manages account creation and error handling.

### AuthLayout Component:
- Secures routes based on user authentication status.
- Displays loading message during authentication check.
- Supports customization for authentication requirement.

### RTE Component:
- Integrates a rich text editor into a React application.
- Utilizes `@tinymce/tinymce-react` for the editor functionality.
- Incorporates `react-hook-form` for form management.
- Provides customization options for editor configuration.
- Enables users to input and format text with various styling options.

## PostForm Component:
- Manages form submission for creating or updating blog posts.
- Utilizes `react-hook-form` for form handling and validation.
- Incorporates various input components like Input, RTE (Rich Text Editor), and Select for user interaction.
- Allows users to upload a featured image for the post.
- Supports dynamic rendering based on whether the component is used for creating a new post or updating an existing one.
- Integrates with the backend service (`service` module) for file upload and post creation/update operations.

## Pages

### SignupPage

- Renders the Signup component for user registration/authentication.

### Post

- Displays a single post based on the slug parameter from the URL.
- Parses post content from HTML.
- Allows post author to edit or delete the post if authenticated.
- Redirects to the homepage if no post is found.
- Technologies: React, React Router DOM, HTML React Parser, Redux (for authentication), Appwrite (for backend services).

### LoginPage

- Renders the Login component for user authentication.
- Technologies: React, Redux (for authentication).

### Home

- Homepage displaying multiple PostCards.
- Fetches posts and renders PostCard components for each.
- Prompts users to log in if no posts are available.
- Technologies: React, Appwrite (for backend services).

### EditPost

- Allows users to edit an existing post.
- Retrieves post data based on the slug parameter from the URL.
- Renders a PostForm component with the post data if found.
- Redirects to the homepage if no post is found.
- Technologies: React, React Router DOM, Appwrite (for backend services).

### AllPosts

- Displays all available posts.
- Fetches and renders PostCard components for each post.
- Technologies: React, Appwrite (for backend services).

### AddPost

- Renders a form (PostForm component) to add a new post.
- Technologies: React, Appwrite (for backend services).
