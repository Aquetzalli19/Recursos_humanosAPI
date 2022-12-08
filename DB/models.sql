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