# StudentEntry

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

# Students Entry Application

This repository hosts the **Students Entry** project, a web application built with Angular to manage student data, including CRUD (Create, Read, Update, Delete) functionality.

## Features

- **Add Students**: Register new students with details like name, address, course, and more.
- **View Students**: Display a list of all registered students in a table.
  <!-- - **Edit Students**: Update existing student records. -->
  <!-- - **Delete Students**: Remove student records. -->
- **Search and Filter**: Search for students by name or ID.

## Technologies Used

- **Frontend**: Angular, Angular Material
- **Backend**: JSON Server (for mock data)
- **Styling**: SCSS

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v20 or later)
- Angular CLI (v18 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deepakjha14/students-entry.git
   ```

2. Navigate to the project directory:

   ```bash
   cd students-entry
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the JSON Server:

   ```bash
   npx json-server --watch db.json --port 3000
   ```

2. Serve the Angular application:

   ```bash
   ng serve
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Project Structure

```
student-entry/
│
├── src/
│ ├── app/
│ │ ├── core/ # Core modules and services
│ │ │ ├── guards/ # Route guards
│ │ │ ├── interceptors/ # HTTP interceptors
│ │ │ └── services/ # Shared services
| | | |──api.service.ts
| | | └──auth.service.ts
│ │ ├── features/ # Feature modules
│ │ │ ├── login/ # Login module
│ │ │ ├── dashboard/ # Dashboard module
│ │ │ └── student-crud/ # Student CRUD operations
| | ├── services/
│ | └── student.service.ts # Handles HTTP calls for student data
│ | |
│ │ └── state/ # State management (NgRx)
│ | ├── actions/
│ │ | └── student.actions.ts # Defines actions for student state
│ | ├── effects/
│ │ | └── student.effects.ts # Handles side effects (e.g., API calls)
│ | ├── reducers/
│ │ | └── student.reducer.ts # Defines reducer logic for state changes
│ | ├── selectors/
│ │ | └── student.selectors.ts # Selectors to query student state
| │ ├── models/
| │ └── student-record.model.ts
│ ├── assets/ # Static assets (images, JSON, etc.)
│ ├── environments/ # Environment-specific configurations
│ ├── index.html # Main HTML file
│ ├── main.ts # Application entry point
│ ├── polyfills.ts # Polyfills for compatibility
│ └── styles.scss # Global styles
│
├── angular.json # Angular CLI configuration
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

```

## Usage

- **Add a Student**: Fill out the form and click **Add** to create a new student record.
  <!-- - **Edit a Student**: Click the edit icon in the table to update a student’s details. -->
  <!-- - **Delete a Student**: Click the delete icon in the table to remove a student. -->
- **Search**: Use the input field to filter students by name or ID.

## API Endpoints

The application uses JSON Server as a mock backend. Below are the available endpoints:

- `GET /students`: Fetch all student records.
- `POST /students`: Add a new student.
<!-- - `PUT /students/:id`: Update a student by ID.
- `DELETE /students/:id`: Delete a student by ID. -->

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```

````

3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
````
