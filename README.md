# cloud-native-20250131-project-1
# 🌐 API Gateway with Microservices (Node.js + Express)

This project demonstrates a basic **API Gateway** architecture using **Node.js**, **Express**, and **JWT authentication**, routing requests to multiple microservices for user registration, login, search, update, and deletion.

---

## 🧱 Microservices Overview

| Service        | Port  | Description                      |
|----------------|-------|----------------------------------|
| Registration   | 5001  | Handles user registration        |
| Login          | 5002  | Authenticates users and returns a JWT token |
| Search         | 5003  | Searches for user data (requires token) |
| Update         | 5004  | Updates user profile (requires token) |
| Delete         | 5005  | Admin-only delete operation (requires token) |
| API Gateway    | 5000  | Routes requests to the appropriate service |

---

## 🔐 Authentication

- This project uses **JWT (JSON Web Tokens)** for authentication and role-based access control.
- You must include a valid token in the `Authorization` header for protected routes:
  ```
  Authorization: Bearer <your_token_here>
  ```

> 🔑 **Important**: Replace the `JWT_SECRETE` value in your `.env` file with your own secure secret key.

---

## 🧪 Login API Response Example

Send a `POST` request to `/userlogin` with:

```json
{
  "username": "user",
  "password": "123"
}
```

If valid, you will receive:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

Use this token to access protected routes like `/usersearch`, `/userupdate`, and `/admindel`.

---

## 🚀 How to Run

1. Clone the repository and navigate to each service folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in each service that uses JWT:
   ```
   JWT_SECRETE=your_secret_key
   ```
4. Start each service on its respective port:
   ```bash
   npm start
   ```

---

## 📬 API Gateway Routes

```http
GET /                  → Health check for API Gateway

POST /userreg          → Forwarded to Registration Service (5001)
POST /userlogin        → Forwarded to Login Service (5002)

GET /usersearch        → Requires JWT (role: user), forwarded to Search Service (5003)
PUT /userupdate        → Requires JWT (role: user), forwarded to Update Service (5004)
DELETE /admindel       → Requires JWT (role: admin), forwarded to Delete Service (5005)
```

---

## 📌 Notes

- This is a basic microservice setup for learning purposes.
- You can extend it with:
  - MongoDB integration
  - Docker containers
  - Kubernetes orchestration
  - CI/CD pipelines

---


