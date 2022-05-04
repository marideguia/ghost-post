# ghost-post

GhostPost is an anonymous learning engagement tool that allows audiences to communicate with their peers and lecturers in real time.

## SET UP PROJECT

1.  Install [Node.js](https://nodejs.org/en/download/)

2.  Download [Mysql](https://www.mysql.com/downloads/)
    You may need to create a new user in the MySQL Command Line client and grant them all permissions.
    Create a database called "GhostPost". 
    Add database user information in the GhostPost project server/config.json file. 
    Change username and password in the development object to the login credentials you specified for the user above.

3.  Run:
```
git clone https://github.com/marideguia/ghost-post.git
cd ghost-post/server
npm install
npm install mysql2 jsonwebtoken bcrypt sequelize cors mongoose knex nodemon body-parser express mysql
npm start
```

4. Open separate terminal and Run:

```
cd ghost-post/client
npm install
npm install nodemon react-scripts axios formik react-copy-to-clipboard yup react-device-detect react-usestateref
npm start
```

5. Open https://localhost:3001 in your browser if the last command doesn't automatically open it.
6. If npm packages did not install correctly, run

```
npm audit fix --force
```
## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/4Ponyib' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).
