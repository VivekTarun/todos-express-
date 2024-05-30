# Express TodoApp

This is a simple Todo application built with Node.js and Express. It uses an in-memory database for demonstration purposes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/express-todoapp.git
    cd express-todoapp
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add any necessary environment variables.

4. Start the application:
    ```bash
    npm start
    ```

## Usage

Once the application is running, you can use the following API endpoints to interact with the Todo list.

## Project Structure

```plaintext
express-todoapp/
│
├── node_modules/
├── src/
│   ├── config/
│   │   ├── db.config.js
│   │   └── server.config.js
│   ├── controllers/
│   │   ├── index.js
│   │   └── todos.controller.js
│   ├── errors/
│   ├── models/
│   ├── repositories/
│   │   ├── index.js
│   │   └── todos.repository.js
│   ├── routes/
│   │   ├── v1/
│   │   │   ├── index.js
│   │   │   └── todos.routes.js
│   │   └── index.js
│   ├── services/
│   │   ├── index.js
│   │   └── todos.service.js
│   ├── utils/
│   └── validators/
│       └── index.js
├── .env
├── package-lock.json
├── package.json
└── README.md


## API Endpoints

### Ping Endpoint

- **GET** `/v1/todos/ping`
    - **Description:** Check the server status.
    - **Response:**
      ```json
      {
        "message": "pong"
      }
      ```

### Todos Endpoints

- **GET** `/v1/todos/:id`
    - **Description:** Get a todo by ID.
    - **Response:**
      ```json
      {
        "id": "123456",
        "text": "Sample Todo"
      }
      ```

- **GET** `/v1/todos`
    - **Description:** Get all todos.
    - **Response:**
      ```json
      [
        {
          "id": "123456",
          "text": "Sample Todo"
        },
        {
          "id": "7891011",
          "text": "Another Todo"
        }
      ]
      ```

- **POST** `/v1/todos`
    - **Description:** Add a new todo.
    - **Request Body:**
      ```json
      {
        "text": "New Todo"
      }
      ```
    - **Response:**
      ```json
      {
        "id": "234567",
        "text": "New Todo"
      }
      ```

- **DELETE** `/v1/todos`
    - **Description:** Delete all todos.
    - **Response:**
      ```json
      []
      ```

- **DELETE** `/v1/todos/:id`
    - **Description:** Delete a todo by ID.
    - **Response:**
      ```json
      {
        "id": "123456",
        "text": "Sample Todo"
      }
      ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

