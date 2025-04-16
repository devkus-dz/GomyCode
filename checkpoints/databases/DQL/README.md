## Problem

We have the following relational model created. Now we are going to write SQL queries to retrieve data from these tables using DQL language: [Tables](https://i.imgur.com/Am5S7XF.png)

**Instructions :**

Write SQL commands to:

1. Display all the data of customers
2. Display the product_name and category for products which their price is between 5000 and 10000
3. Display all the data of products sorted in descending order of price.
4. Display the total number of orders, the average amount, the highest total amount and the lower total amount for each product_id, display the number of orders
5. Display the customer_id which has more than 2 orders
6. For each month of the 2020 year, display the number of orders
7. For each order, display the product_name, the customer_name and the date of the order
8. Display all the orders made three months ago
9. Display customers (customer_id) who have never ordered a product

## SQL

1. SELECT `*` FROM `Customers`;
2. SELECT `product_name`, `category` FROM `Products` WHERE `price` BETWEEN 5000 AND 10000;
3. SELECT `*` FROM `Products` ORDER BY `price` DESC;
4. SELECT `Product_id`, <br>
   COUNT(`*`) AS `product_order_count`,<br>
   ( SELECT COUNT(`*`) FROM Orders ) AS `total_orders`,<br>
   ( SELECT AVG(`total_amount`) FROM Orders ) AS `avg_amount`,<br>
   ( SELECT MAX(`total_amount`) FROM Orders ) AS `max_total_amount`,<br>
   ( SELECT MIN(`total_amount`) FROM Orders ) AS `min_total_amount`<br>
   FROM `Orders`;<br>
   GROUP BY `Product_id`;

5. SELECT `customer_id` FROM `Orders` GROUP BY `customer_id` HAVING COUNT(`order_id`) > 2;
6. SELECT EXTRACT(`MONTH` FROM `order_date`) AS `month`, COUNT(`order_id`) AS `number_of_orders`<br>
   FROM `Orders`<br>
   WHERE EXTRACT(`YEAR` FROM `order_date`) = 2020<br>
   GROUP BY EXTRACT(`MONTH` FROM `order_date`)<br>
   ORDER BY `month`;

7. SELECT `p.product_name`, `c.customer_Name`, `o.OrderDate`<br>
   FROM `Orders` `o`<br>
   JOIN `Customer` `c` ON `o.Customer_id` = `c.Customer_id`<br>
   JOIN `Product` `p` ON `o.Product_id` = `p.Product_id`;

8. SELECT `*` FROM `Orders` <br>
   WHERE `OrderDate` = `CURRENT_DATE` - `INTERVAL 2 MONTH`;

9. SELECT `Customer_id`<br>
   FROM `Customer`<br>
   WHERE `Customer_id` NOT IN ( SELECT `Customer_id` FROM `Orders` );
