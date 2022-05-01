# ghost-post

GhostPost is an anonymous learning engagement tool that allows audiences to communicate with their peers and lecturers in real time.

## SET UP PROJECT

1.  Install [Node.js](https://nodejs.org/en/download/)

Download Mysql https://www.mysql.com/downloads/
You may need to create a new user in the MySQL Command Line client and grant them all permissions.
Create a database called "GhostPost". 
Add database user information in the GhostPost project server/config.json file. 
Change username and password in the development object to the log in credentials you specified for the user above.

2.  Run:
```
git clone https://github.com/marideguia/ghost-post.git
cd ghost-post/server
npm install
npm install mysql2 jsonwebtoken bcrypt sequelize cors mongoose knex nodemon body-parser express mysql
npm start
```

3. Open separate terminal and Run:

```
cd ghost-post/client
npm install
npm install nodemon react-scripts axios formik react-copy-to-clipboard yup react-device-detect react-usestateref
npm start
```

3. Open https://localhost:3001 in your browser if the last command doesn't automatically open it.
4. If npm packages did not install correctly, run

```
npm audit fix --force
```
