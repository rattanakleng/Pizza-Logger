CREATE DATABASE pizza_db;
USE pizz_db;
CREATE TABLE pizzas (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
)