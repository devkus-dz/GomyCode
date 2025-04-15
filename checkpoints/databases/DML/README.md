## Problem

In this checkpoint, we have the following relational model created. Now we must insert data into the different tables using DML language:

[Relational model](https://i.imgur.com/q25t2MI.png)

**Instructions :**

Write SQL commands to insert the following rows into the corresponding tables : [Tables](https://i.imgur.com/DcLUzM5.png)

## SQL

- INSERT INTO `Product` (Product_id, product_name, category, price)<br>
  VALUES <br>
  ('P01', 'Samsung Galaxy S20', 'Smartphone', 3299),<br>
  ('P02', 'ASUS Notebook', 'PC', 4599);

- INSERT INTO `Customer` (Customer_id, Customer_Name, Customer_Tel)<br>
  VALUES <br>
  ('C01', 'ALI', 71321009),<br>
  ('C02', 'ASMA', 77345823);

- INSERT INTO `Orders` (Customer_id, Product_id, OrderDate, Quantity, Total_amount) <br>
  VALUES <br>
  ('C01', 'P02', NULL, 2, 9198), <br>
  ('C02', 'P01', '2020-05-28', 1, 3299);
