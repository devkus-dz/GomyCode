## Problem

In this checkpoint, we have the following relational model: [ER model](https://i.imgur.com/aZeHhHe.png), <br>
and their corresponding data types tables: [Tables](https://i.imgur.com/vx1xFvS.png)

**Instructions :**

- You are asked to create the above given relational model using SQL language and based on the different mentioned constraints.
- After creating tables, write SQL commands to:
  - Add a column Category (VARCHAR2(20)) to the PRODUCT table.
  - Add a column OrderDate (DATE) to the ORDERS table which have SYSDATE as a default value.

## SQL

- CREATE TABLE `Product` (<br>

  - `product_id` VARCHAR(20) CONSTRAINT pk_product PRIMARY KEY,
  - `product_name` VARCHAR(20) CONSTRAINT nn_product NOT NULL,
  - `price` NUMBER CONSTRAINT `positive_value` CHECK (price > 0) <br>
    );

- CREATE TABLE `Customer` ( <br>

  - `customer_id` VARCHAR(20) CONSTRAINT `pk_customer` PRIMARY KEY,
  - `customer_name` VARCHAR(20) CONSTRAINT `nn_customer` NOT NULL,
  - `customer_tel` NUMBER <br>
    );

- CREATE TABLE `Orders` (<br>

  - `customer_id` VARCHAR(20),
  - `product_id` VARCHAR(20),
  - `quantity` NUMBER,
  - `total_amount` NUMBER,
  - CONSTRAINT fk_product FOREIGN KEY (`product_id`) REFERENCES `Product` (`prodduct_id`),
  - CONSTRAINT fk_customer FOREIGN KEY (`customer_id`) REFERENCES `Product` (`customer_id`) <br>
    );

## Adding Columns

- ALTER TABLE PRODUCT ADD `category` VARCHAR(20);
- ALTER TABLE ORDERS ADD `orderDate` DATE DEFAULT SYSDATE;
