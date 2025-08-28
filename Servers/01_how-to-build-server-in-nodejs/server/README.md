# 🚀 Servers Learning Repository

Welcome! This repository contains tutorials and examples for **building servers in Node.js** and other backend projects. Each folder contains a mini-project or step-by-step guide.

---

## 📂 Projects

### Node.js Servers
  A step-by-step guide to create a Node.js server with MongoDB, REST APIs, and automatic reloading.

---

## 🔧 Tools & Technologies Used
- **Node.js** – JavaScript runtime
- **Express.js** – Server framework
- **MongoDB** – Database
- **Mongoose** – ODM for MongoDB
- **Nodemon** – Auto-restart server on file changes
- **dotenv** – Environment variables management

---

## 📖 How to Use
1. Clone this repository:  
```bash
git clone https://github.com/ansh271/Servers.git
```


Step 1 : install the nodejs
Step 2 : check the version and make sure it has global path
Step 3 : create a folder name server
            mkdir server
            cd server
Step 4 : npm init -y
Step 5 : npm install express mongoose dotenv
Step 6 : create ".env" file
Step 7 : Make a file "index.js" 
Step 8 : for automatic restart of server when changes are made in it
        npm install -g nodemon
        npm install --save-dev nodemon

Step 9 : Change scripts in package.json
        "scripts": {
            "start": "node index.js",
            "dev": "nodemon index.js"
        }

Step 10 : Run Server using
            npm run dev
            npx nodemon server.js
            npx nodemon --legacy-watch server.js




