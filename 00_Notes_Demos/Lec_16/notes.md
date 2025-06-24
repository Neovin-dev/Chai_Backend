# Access Refresh Token, Middleware and cookies in Backend

user model has refresh token and access token. this is a modern practice we can work with access token only. access token is short lived and refresh token are long lived. the concept is while we have access token we can access it. if login section is too short we need to login again and again.

Access tokens and refresh tokens are essential components of **authentication and authorization** systems, especially in **OAuth 2.0** and **JWT-based** workflows. Here's a simple breakdown of what each is and how they work:

---

### 🔐 Access Token

* **What it is:** A short-lived token that proves a user is authenticated.
* **Purpose:** Used to access **protected resources** (like APIs) on behalf of the user.
* **Expiration:** Typically expires quickly (e.g., 15 minutes to 1 hour).
* **Usage:** Sent with each request to the server, usually in the `Authorization` header like this:

  ```
  Authorization: Bearer <access_token>
  ```

---

### 🔄 Refresh Token

* **What it is:** A long-lived token used to **get a new access token** when the old one expires.
* **Purpose:** Keeps the user logged in without needing to log in again.
* **Expiration:** Can last from hours to months (should be securely stored and rotated).
* **Usage:** Sent to a token endpoint (e.g., `/auth/refresh`) to get a new access token.

---

### 🧠 How They Work Together

1. **User logs in**

   * Server verifies credentials
   * Server returns an **access token** and a **refresh token**

2. **User makes requests**

   * Access token is used in requests to protected endpoints

3. **Access token expires**

   * Client sends refresh token to get a **new access token**

4. **Refresh token is invalid or expired**

   * User must **log in again**

---

### ⚠️ Security Tips

* **Never store refresh tokens in localStorage** (prefer httpOnly cookies for web apps).
* **Access tokens can be stored in memory or localStorage**, but only if secure.
* Always use **HTTPS** to transmit tokens.
* Implement **token revocation** logic on logout or suspicious activity.



we will use these and write a login user 
we will use the middleware in logout to make it more save and compreshesable 
so we will be writin out own custom middleware. this will verify if there is a user or not. 