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

create table Client_Meetings(
    sid int PRIMARY KEY AUTO_INCREMENT,
    name varchar(256) NOT NULL,
    company varchar(256),
    project varchar(256),
    meeting datetime
)


insert into Client values(null, 'John Onsen', 'The Onsen Company', 'johnonsen@example.com', '117-117-1117')
insert into Client values(null, 'Nigel Uno', 'The Ones Organization', 'nigeluno@example.com', '111-111-1111')
insert into Client values(null, 'sNathan Drake', 'Uncharted Fortune Company', 'nathandrake@example.com', '777-777-7777')

insert into Client_Meetings values(null, 'Nigel Uno', 'The Ones Organization', 'The #1 Project', '2023-05-20 12:30:00')
insert into Client_Meetings values(null, 'John Onsen', 'The Onsen Company', 'The #1 Project', '2023-05-25 10:00:00')



