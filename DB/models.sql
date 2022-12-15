CREATE database recusos_humanos;

USE recusos_humanos;

CREATE TABLE employees (
	id int auto_increment not null,
	name varchar(255),
    last_name varchar(255),
    phone varchar(50),
    email varchar(255),
    addres varchar(255),
    
    PRIMARY KEY(id)
);


CREATE TABLE user(
	id int auto_increment not null,
    user_name varchar(255),
    user_mail varchar(255),
    user_password varchar(255),
    
    PRIMARY Key(id)
    
);

INSERT INTO `employees` (`id`, `name`, `last_name`, `phone`, `email`, `addres`) VALUES
(1, 'Brian7u7', 'Nutriayapa', '4132349801', 'bryanbona0@gmail.com2', 'Iztapayork2'),
(2, 'Bryan2', 'Bonilla', '4423464696', 'bryanbona040@gmail.com', 'Tucorazon2'),
(3, 'Bryan3', 'Bonilla3', '442349864', 'bryanbona04@gmail.com', 'Tucorazon4'),
(4, 'Bryan4', 'Bonilla4', '552349864', 'bryanbona04@gmail.com', 'Iztapayork'),
(5, 'Brian', 'Nandayapa', '4132349864', 'bryanbona0@gmail.com', 'Iztapayork2');