# TEAM42-CRM

## Connection Locally

Start the project locally:

1. in ./Team42-CRM/, run: npm install

2. in ./Team42-CRM/crm/, run: npm install

3. creat a .env file in toor directory, including:

  -   MYSQL_HOST=us-cdbr-east-04.cleardb.com
  -   MYSQL_USER=b01eb9170bdd13
  -   MYSQL_DATABASE=heroku_c2fca39d7a7384f
  -   MYSQL_PASSWORD=fd7ba9ac
  -   REDIS_URL=redis://:p8a9a536e37e24dcb479b2badb88bf9dc7808ed53900c90a23d5f3d88519eb8f6@ec2-54-156-199-127.compute-1.amazonaws.com:32020
  -   SESSION_SECRET_KEY=team42-crm

4. in ./Team42-CRM/, run: npm run dev

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

#### https://team42-crm.herokuapp.com/creat
Create a new customer
- POST
- json in body

#### https://team42-crm.herokuapp.com/customer/:id
Search customer infomation by id(e.g. 1)
- GET

#### https://team42-crm.herokuapp.com/customer/all
Search all customer infomation
- GET

