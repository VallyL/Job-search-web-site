# Cooljob - A Modern Job Search Platform

This project is a React-based web application that functions as a modern job search platform. It's designed to help users find their ideal job by providing a streamlined and user-friendly experience.

# Key Features:

- Comprehensive Job Search: Users can search for jobs based on position, location, and category, allowing for targeted searches.
- User-Friendly Interface: The platform utilizes React components for an intuitive and visually appealing user interface.
- Secure Registration and Login: Users can create accounts and log in securely using a form with built-in validation.
- Category-Based Exploration: Jobs are organized into various categories, making it easy for users to browse and find opportunities in specific fields.

# Technology Stack:

- React: The core framework for building the user interface.
- React Router DOM: Used for handling routing between different pages of the application.
- Material UI: Used for styling and UI components (Autocomplete, TextField).
- React Hook Form: Provides form validation and management for the registration and login forms.
- SVG Icons: SVG icons are used throughout the project for branding and visual elements.

# Logic Implemented:

- Job Filtering: The AllVacancies component filters the job listings based on search criteria (selected position and location) passed through state management.
- Search Submission: The handleSubmit function navigates to the Vacancies page with the selected search criteria stored in the state.
- Category Display: The Categories component displays a curated list of categories, with the ability to expand and show more categories.
- Form Validation and Management: The ModalWindow component uses react-hook-form for form validation and management for the registration and login forms:
  - Input Validation: The useForm hook from react-hook-form is used to validate fields, ensuring that data meets specific criteria (e.g., email format, password length).
  - Error Handling: The component displays error messages to the user if form validation fails, providing clear feedback on input issues.
- Page Navigation and Component Interactions: The application uses React Router DOM to manage navigation between pages and to pass data between components. And provides a seamless user experience by loading all content within the same page, avoiding full page reloads.

# Project Structure:

- Components: Header, Search, SmallSearch, Categories, VacanciesList, AllVacancies, ModalWindow, Footer
- Pages: HomePage, VacanciesPage
- Utilities: SearchUtils
- Assets: Images (icons) and stylesheets

# Getting Started:

- Clone the repository
- Install dependencies using npm install
- Start the development server using npm start

# Future Enhancements:

- User Authentication: Implement user accounts and login/registration functionality to allow users to save job searches and personalize their experience.
- Job Applications: Add functionality for users to apply to jobs directly through the platform.
- Job Alerts: Implement a feature to notify users about new job openings that match their saved search criteria.

# Contributions are welcome! Feel free to fork the repository and suggest improvements or new features!
