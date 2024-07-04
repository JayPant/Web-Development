# Technical Interview Preparation

## JavaScript

### Variables: `var`, `let`, and `const`

#### `var`
- **Scope:** `var` is function-scoped, meaning it's only accessible within the function it's declared in. If declared outside any function, it becomes globally scoped.
- **Hoisting:** Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means they can be referenced before their actual declaration in the code without causing a runtime error.
- **Redeclaration:** `var` allows the same variable to be redeclared within its scope, which can lead to unexpected behaviors and bugs.

#### `let`
- **Scope:** `let` is block-scoped, meaning it's only accessible within the block (enclosed by `{}`) it is declared in. This includes loops, if statements, and functions.
- **Hoisting:** Variables declared with `let` are also hoisted but not initialized. Accessing them before their declaration results in a ReferenceError, known as the "temporal dead zone."
- **Redeclaration:** Unlike `var`, `let` does not allow redeclaration within the same scope, making the code less prone to errors.

#### `const`
- **Scope:** `const` is also block-scoped like `let`. It restricts the variable to the block it's declared in.
- **Hoisting:** Variables declared with `const` are hoisted but not initialized. Accessing them before their declaration also results in a ReferenceError.
- **Assignment:** `const` requires an initial value at the time of declaration and does not allow reassignment afterward. However, it does not make the variable immutable; if the variable is an object or array, the contents can still be modified.

### JavaScript Scope

#### Global Scope
- Variables declared outside any function are in the global scope, accessible from anywhere in the code. This can lead to conflicts if not managed properly, especially in large applications.

#### Function Scope
- Variables declared inside a function using `var` are function-scoped. They are not accessible outside the function, which helps in avoiding conflicts with variables declared in other functions.

#### Block Scope
- Variables declared inside a block (e.g., within `{}`) using `let` or `const` are block-scoped. This means they are only accessible within that specific block, helping to keep variables limited to their relevant context and avoiding unintentional overwrites.

## Git and GitHub

### Difference between Git and GitHub

#### Git
- **Definition:** Git is a distributed version control system that allows multiple developers to work on a project simultaneously without interfering with each other's work. It tracks changes to files and helps manage project history.
- **Use Case:** Git is used to manage source code history, enabling developers to revert to previous versions, branch out for new features, and merge changes seamlessly.
- **Offline Use:** Git can work offline. Developers can commit changes locally and later synchronize with a remote repository when they have an internet connection.

#### GitHub
- **Definition:** GitHub is a cloud-based platform for hosting Git repositories. It provides additional collaboration features like pull requests, issues, and project management tools.
- **Use Case:** GitHub centralizes repository hosting, facilitating collaboration among developers. It allows teams to review code, manage projects, and track issues efficiently.
- **Offline Use:** GitHub requires an internet connection to interact with the platform, such as pushing or pulling changes, creating issues, or managing pull requests.

#### Can we use Git without GitHub?
- **Answer:** Yes, Git can be used locally on your machine without any need for GitHub. You can initialize a Git repository, track changes, commit, and branch all on your local machine. GitHub is simply a remote hosting service for Git repositories, providing additional tools for collaboration and project management.

## Email Validation

### Methods
1. **Client-Side Validation:**
   - **Regex Validation:** You can validate email format using regular expressions on the client side, providing immediate feedback to users before they submit a form. For example, using JavaScript:
     ```javascript
     function validateEmail(email) {
         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return re.test(email);
     }
     ```
2. **Server-Side Validation:**
   - Server-side validation is crucial for security as client-side validation can be bypassed. You can use regex or validation libraries to ensure the email format is correct. Additionally, you can check for valid MX records to ensure the domain can receive emails.
   - Example in Python:
     ```python
     import re

     def validate_email(email):
         pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
         return re.match(pattern, email)
     ```

### Should we validate email on server side or client side?
- **Answer:** Both client-side and server-side validation should be used. Client-side validation provides a quick user experience by catching errors before form submission. However, server-side validation is essential for security to prevent malicious data from entering the system, ensuring robust and reliable validation.

## Security

### Encryption, Decryption, and Hashing

#### Encryption
- **Definition:** Encryption is the process of converting plaintext into ciphertext to prevent unauthorized access. It ensures that even if data is intercepted, it cannot be understood without the decryption key.
- **Reversible:** Yes, with the correct decryption key.
- **Use Case:** Secure data transmission, such as sending sensitive information over the internet.

#### Decryption
- **Definition:** Decryption is the process of converting ciphertext back to plaintext using a decryption key. It allows authorized users to access the original data.
- **Reversible:** Yes, using the appropriate key.
- **Use Case:** Accessing encrypted data, such as decrypting messages or files that have been securely transmitted.

#### Hashing
- **Definition:** Hashing is a process that converts data into a fixed-size string of characters (hash). It is designed to be a one-way function, meaning it cannot be reversed to obtain the original data.
- **Reversible:** No, hashing is a one-way process.
- **Use Case:** Data integrity checks, storing passwords securely, digital signatures.

#### Can we reverse a hashed password?
- **Answer:** No, hashing is a one-way process. Once data is hashed, it cannot be reversed. This is why hashing is used for storing passwords securely; even if the hash is exposed, the original password cannot be retrieved.

### Storing Passwords Securely in a Database

#### Answer
- **Method:** Use hashing with a strong algorithm such as bcrypt, Argon2, or PBKDF2. These algorithms are designed to be slow, making brute-force attacks impractical. Additionally, use salting, which involves adding a unique random value to each password before hashing to prevent attackers from using precomputed hash tables (rainbow tables).

### Difference between Public Key and Private Key

#### Public Key
- **Definition:** In asymmetric encryption, the public key is used for encrypting data and can be shared openly. It allows anyone to encrypt data intended for the key's owner.
- **Use Case:** Encrypting data, verifying digital signatures to ensure data integrity and origin.

#### Private Key
- **Definition:** The private key is kept secret and is used for decrypting data that was encrypted with the corresponding public key. It is also used to create digital signatures.
- **Use Case:** Decrypting data, creating digital signatures to prove the authenticity and integrity of data.

### Difference between Cookies and Local Storage

#### Cookies
- **Storage Limit:** Typically 4KB per cookie.
- **Expiration:** Can have an expiration date, after which the cookie is automatically deleted. Useful for session management.
- **Use Case:** Storing session information, user preferences, tracking user behavior across different sessions.
- **Sent with Requests:** Cookies are automatically sent with every HTTP request to the server, making them suitable for maintaining user sessions.

#### Local Storage
- **Storage Limit:** Around 5MB per domain, though this can vary by browser.
- **Expiration:** No expiration date by default; data persists until explicitly deleted.
- **Use Case:** Storing data on the client side for offline use, such as user preferences, state management, and application data.
- **Sent with Requests:** Local Storage is not sent with HTTP requests, making it more efficient for storing large amounts of data that do not need to be sent to the server.

#### Where should JWT token be stored?
- **Answer:** JWT tokens can be stored in either Local Storage or HTTP-only Cookies. For enhanced security, especially to prevent XSS attacks, storing JWT tokens in HTTP-only Cookies is recommended, as they are not accessible via JavaScript.

## Network and IP

### Can Two Devices Have the Same IP Address?

#### Answer
- **Yes:** Two devices can have the same IP address if they are on different networks. For instance, devices on separate private networks (behind different routers) can have the same private IP addresses. Within the same network, IP conflicts can occur unless managed by a DHCP server that assigns unique addresses to each device.

## Database

### How Indexing Works in a Database

#### Answer
- **Definition:** Indexing is a data structure technique used to quickly locate and access the data in a database. An index is created on a database table's columns to enhance the speed of data retrieval operations.
- **Use Case:** Improves the performance of search queries by reducing the amount of data the database engine needs to scan. Indexes are commonly used for primary keys, foreign keys, and frequently searched columns.
- **Types:** Common types of indexes include B-tree indexes, hash indexes, and bitmap

 indexes. Each type has its strengths and use cases, such as B-tree for range queries and hash indexes for exact match queries.

### Storing JWT Token
- **HTTP-only Cookies:** Secure and not accessible via JavaScript, reducing the risk of XSS attacks.
- **Local Storage:** Persistent storage on the client-side, accessible via JavaScript, and easier to implement but vulnerable to XSS attacks.

## System Design

### URL Shortener

#### Requirements
1. **Shorten URL:** Convert a long URL into a short, unique identifier.
2. **Redirect:** Redirect the user to the original URL when the short URL is accessed.
3. **Scalability:** Handle a large number of URLs and high traffic.
4. **Reliability:** Ensure the service is highly available and fault-tolerant.

#### Components
1. **API Gateway:** Manages incoming requests and routes them to the appropriate service.
2. **URL Shortening Service:** Generates short URLs and stores mappings between short and long URLs.
3. **Database:** Stores URL mappings. Use a highly available database like Cassandra or DynamoDB.
4. **Cache:** Speeds up retrieval of URL mappings using a caching layer like Redis.
5. **Redirection Service:** Handles redirection from short URLs to original URLs.

#### Flow
1. **Shortening Process:**
   - User submits a long URL.
   - The URL Shortening Service generates a unique short identifier (e.g., using Base62 encoding).
   - The mapping is stored in the database and optionally cached.
   - The short URL is returned to the user.

2. **Redirection Process:**
   - User accesses the short URL.
   - The Redirection Service retrieves the original URL from the cache or database.
   - The user is redirected to the original URL.

#### Considerations
- **Hash Collision:** Use a collision-resistant hash function or maintain a counter-based approach to ensure uniqueness.
- **Expiration:** Implement URL expiration if needed, with periodic cleanup of expired URLs.
- **Analytics:** Track usage metrics and provide analytics on URL usage.

### Algorithm for a Lift (Elevator) System

#### Requirements
1. **Efficient Movement:** Minimize wait times and efficiently manage multiple requests.
2. **Safety:** Ensure safe operations, handling emergency stops and door operations.
3. **Prioritization:** Handle different priority levels (e.g., emergency requests).

#### Components
1. **Controller:** Manages the overall logic of the lift system, processing requests, and coordinating lift movement.
2. **Sensors:** Detect the position of the lift, door status, and presence of obstacles.
3. **Motor:** Controls the movement of the lift, receiving commands from the controller.

#### Data Structures
1. **Queue:** Manage incoming requests (e.g., people pressing lift buttons).
2. **Priority Queue:** Handle prioritization of requests, such as emergency requests.
3. **State Variables:** Track current floor, direction of movement, and door status.

#### Algorithm
1. **Request Handling:**
   - Add incoming requests to the queue.
   - Prioritize requests based on predefined rules (e.g., nearest floor first).

2. **Movement:**
   - Move the lift in the direction of the nearest request.
   - Update the current floor and direction based on requests.
   - Stop at requested floors and handle door operations safely.

3. **Safety and Efficiency:**
   - Continuously monitor sensors for safety.
   - Optimize movement to reduce wait times and energy consumption.

### Auto Quality in Streaming Services (YouTube)

#### Requirements
1. **Adaptive Quality:** Adjust video quality based on user's internet connection speed.
2. **Seamless Experience:** Ensure minimal buffering and smooth playback.

#### Components
1. **Video Player:** Manages playback, monitors buffer, and requests different quality levels.
2. **Network Monitor:** Continuously checks internet speed and available bandwidth.
3. **Quality Selector:** Decides which video quality to request based on current network conditions.

#### Algorithm
1. **Initial Buffering:**
   - Start with a medium quality video to balance initial loading time and quality.

2. **Monitoring:**
   - Continuously measure the buffer level and network speed.

3. **Adjustment:**
   - If the buffer level drops below a threshold, reduce video quality.
   - If the network speed increases, switch to a higher quality video.

4. **Seamless Switching:**
   - Pre-buffer the next segment of video in the new quality before switching to ensure smooth playback.

### Designing a CAPTCHA System from Scratch

#### Requirements
1. **Human Verification:** Distinguish between human users and automated bots.
2. **Accessibility:** Ensure the CAPTCHA is usable by all users, including those with disabilities.
3. **Security:** Prevent easy circumvention by automated systems.

#### Components
1. **CAPTCHA Generator:** Creates challenges (e.g., distorted text, image recognition tasks).
2. **Validation Service:** Verifies user responses to CAPTCHA challenges.
3. **Database:** Stores CAPTCHA challenges and responses temporarily for validation.

#### Algorithm
1. **Challenge Creation:**
   - Generate a random string or select an image-based challenge.
   - Apply distortions or transformations to make automated recognition difficult.

2. **User Interaction:**
   - Display the CAPTCHA challenge to the user.
   - Collect the user's response.

3. **Validation:**
   - Compare the user's response with the correct answer.
   - If the response is correct, proceed with the user's request. Otherwise, present a new challenge.

4. **Security Measures:**
   - Implement rate limiting to prevent brute force attacks.
   - Regularly update the challenge generation algorithm to stay ahead of automated solvers.

---
