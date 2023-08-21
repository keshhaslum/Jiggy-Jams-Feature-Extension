-u# jiggyjams

This is a full stack app to show the products available at jiggy jams and eventually will be a website people can buy from. Jiggy jams signature jam is a Scotch Bonnet Chilli Jam that can be a condiment, sauce, with cheese or incoporated into a marinade to give a spicy kick if that's your jam (see what I did there)

### Basic Requirments (to do everytime you open this project - but ONLY after you've followed the steps below)

- Run `npm start` in project directory from terminal to start the Express server on port 4000
- In another terminal run in the project directory again `cd client` then `npm run dev` to view the front end (local host browser view)

## Setup

### 1. Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

###

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called test: `create database test`. To check this has been done in mysql type command `show databases`;

- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=jams
  DB_PASS=root
```

Ensure you created the env in the project folder and not a sub folder or the file will not work.

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'products' in your database.

- Make sure you understand how the `products` & `clients` table is constructed. In your MySQL console, you can run `use jams;` and then `describe products;` to see the structure of the products table & `describe clients;` to see the structure of the clients table.

- Products will include a table with the following fields: id, name, ingredients, description, quantity, price, size and image

- Clients will in include a table with the following fields: username, password

- Everytime you make a change to the init_db_sql file you need to run `npm run migrate`

- Run `npm install jsonwebtoken bcrypt` for the log in backend component - this creates a token for each user registered

- Run `npm install react-axios` - axios is a library to use fetch requests needed for the login/ register  component

- Run `npm i react-router-dom`


### Development

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, in the project directory do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173 (front end)
