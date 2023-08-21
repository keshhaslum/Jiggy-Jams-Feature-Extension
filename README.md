# Jiggy Jams 

This is a Feature Extension project of [Carli's](https://github.com/Carli27/jiggyjams) full stack app to show the products available at Jiggy Jams and eventually will be a website people can buy from. 

## Components I added

1. Admin page to add and delete jams.

2. Nav bar.

3. Log in and registration page.

## 🌱 Next version

1. Add to basket function

2. Favourites section

### 📦 Dependencies

1. Run `npm install` in project directory.

2. Run `npm install react-router-dom`.

3. Run `npm install jsonwebtoken bcrypt` for the log in backend component - this creates a token for each user registered

4. Run `npm install react-axios` - axios is a library to use fetch requests needed for the login/ register  component

5. Run `npm i react-router-dom`

6. Run `npm start` to start the Express server.
      
7. `cd client` and run `npm install`.

8. Run `npm run dev` in the client folder as well to view in the local host browser.

### 💾 Database Setup

1. Create a database called `jams`.
2. Create a `.env` file in the project directory with the following structure:

| Variable | Value         |
| -------- | ------------- |
| DB_HOST  | localhost     |
| DB_USER  | `<username>`  |
| DB_NAME  | jams          |
| DB_PASS  | `<password>`  |

3. Run `npm run migrate`.

## 📋 Tables in test:

| Tables_in_jams          |
| ----------------------- |
| jamusers                |
| products                |



## 📋 Table structure for products:

| Field         | Type         | Null | Key | Default | Extra          |
| ------------- | ------------ | ---- | --- | ------- | -------------- |
| id            | int          | NO   | PRI | NULL    | auto_increment |
| name          | varchar(50)  | NO   |     | NULL    |                |
| ingredients   | longtext     | NO   |     | NULL    |                |
| description   | longtext     | NO   |     | NULL    |                |
| quanitity     | int          | NO   |     | NULL    |                |
| price         | int          | NO   |     | NULL    |                |
| size          | int          | NO   |     | NULL    |                |
| image         | varchar(999) | NO   |     | NULL    |                |

## 📋 Table structure for jamusers:

| Field         | Type          | Null | Key | Default | Extra          |
| ------------- | ------------  | ---- | --- | ------- | -------------- |
| id            | int           | NO   | PRI | NULL    | auto_increment |
| username      | varchar(255)  | NO   |     | NULL    |                |
| password      | varchar(255)  | NO   |     | NULL    |token encrypted |

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, in the project directory do `cd client` and run `npm run dev` to open the page(front end)
