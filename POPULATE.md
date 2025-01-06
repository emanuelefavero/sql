# Populate database

To populate the database with the data from the CSV files, follow these steps:

> Make sure you have `mysql` installed on your machine. Go to [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/) to download the MySQL Workbench or run `brew install mysql` if you are using a Mac.
> After installing `mysql`, run `brew services start mysql` to make sure the MySQL server is running at startup (to stop the server, run `brew services stop mysql`)

- Start the MySQL server by running `mysql -u root` (add the `-p` flag if you have a password)

- Create a new database:

```sql
CREATE DATABASE test_db;
USE test_db;
```

- Create a table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT,
    occupation VARCHAR(255)
);
```

> Note: Make sure the columns in the table match the columns in the CSV files

- Load the data from the CSV files into the tables (add the absolute path to the CSV files):

> Note: To enable CSV file importing, run the following query: `SET GLOBAL local_infile = true;`, then `exit` the MySQL Workbench and re-enter with `mysql -u root --local-infile=1` to enable the local infile option

```sql
USE test_db;
LOAD DATA LOCAL INFILE '/path/to/users.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS; -- skip the header row
```

- Run the following query to check if the data has been loaded successfully:

```sql
SELECT * FROM users;
```

- Repeat the steps above for the other tables

- Once you have loaded the data into the tables, you can start querying the database either through the MySQL Workbench (that you opened with `mysql -u root`) or in the `index.js` file
