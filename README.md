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
  -   EMAIL_ACCOUNT=lynk.crm@gmail.com
  -   EMAIL_PASSWORD=lynklynk

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

## Redis Connection

Redis can be accessed through heroku cli by using the following command:

- heroku redis:cli -a team42-crm -c team42-crm

Redis connection:

- redis://:p8a9a536e37e24dcb479b2badb88bf9dc7808ed53900c90a23d5f3d88519eb8f6@ec2-54-156-199-127.compute-1.amazonaws.com:32020

## Email

- email account: lynk.crm@gmail.com
 
- email password: lynklynk

## Routes

#### refer to API handbook:
https://team1-comp30022.atlassian.net/wiki/spaces/HOME/pages/52396033/API+Handbook+WIP

