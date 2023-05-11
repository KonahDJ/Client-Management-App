Client
    cid
    name
    company
    email
    phone


Schedule
    sid
    name
    company
    project
    meeting


ORM 
Object Relational Maaping - when you define the objects in the application

create table Client(
    cid int PRIMARY KEY AUTO_INCREMENT,
    name varchar(256) NOT NULL,
    company varchar(256),
    email varchar(256) NOT NULL,
    phone varchar (20)
)

create table Schedules(
    sid int PRIMARY KEY AUTO_INCREMENT,
    name varchar(256) NOT NULL,
    company varchar(256),
    project varchar(256),
    meeting datetime
)

