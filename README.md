# TEAM42-CRM

## Connectionn Locally

Start the project locally:

1. in ./Team42-CRM/, run: npm install

2. in ./Team42-CRM/crm/, run: npm install

3. in ./Team42-CRM/, run: npm run dev

4. creat a .env file in toor directory, including:

  -   MYSQL_HOST=us-cdbr-east-04.cleardb.com
  -   MYSQL_USER=b01eb9170bdd13
  -   MYSQL_DATABASE=heroku_c2fca39d7a7384f
  -   MYSQL_PASSWORD=fd7ba9ac

then,

react will run on localhost:3000, 

backend will run on localhost:5000.

## MySQL Connection

MySql can be accessed through MYSQL Workbench already,

the following is the connection infomation:

- host: us-cdbr-east-04.cleardb.com

- user: b01eb9170bdd13

- password: fd7ba9ac

## Routes

#### http://.../customer/creat
Create a new customer
- POST
- json in body

#### http://.../customer/:id
Search customer infomation by id(e.g. 1)
- GET

#### http://.../customer/all
Search all customer infomation
- GET

