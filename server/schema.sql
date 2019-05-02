-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
 id int auto_increment,
 user_name varchar(20),
 primary key (id)
);

CREATE TABLE chatrooms (
 id int auto_increment,
 chatroom_name varchar(20),
 primary key (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment,
  tweet varchar(300),
  sender int not null,
  message_time time,
  chatroom_id int not null, 
  primary key (id),
  foreign key(sender) references users(id),
  foreign key(chatroom_id) references chatrooms(id)
); 


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

