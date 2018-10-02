-- Created the DB "bamazonDB" 
DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

-- Created the table "products" 
CREATE TABLE products (
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(80)  NULL,
  department_name VARCHAR(80)  NULL,
  price DECIMAL(10,2)  NULL,
  stock_quantity INTEGER (200) NULL,
  PRIMARY KEY(item_id)
);

SELECT * FROM products;

  -- Insert 10 products into the table
  INSERT INTO products
    (item_id,product_name, department_name, price, stock_quantity)
  VALUES
    ("frame","home",15,20),
    ("spathiphyllum","plant",41.28,6),
    ("pachinko", "books",10.87,120),
    ("honest diaper","baby",26.99,200),
    ("t-shirt","clothing",110,499),
    ("coit sheets","home",74.99,88),
    ("hydro flask", "sports & outdoors",29.95,299),
    ("lego city police","toys & games",16.11,455),
    ("westcott scissors","office supply",6.48,432),
    ("detergent", "household",12.48,2334);