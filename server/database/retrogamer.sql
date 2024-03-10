create database retrogamer_db

create table products (
	ID int,
	SKU bigint,
	name varchar(500),
	stock int,
	price float,
	primary key (ID)
)

select * from products;

insert into products values (1,2443562,'Mando Dualsense PS5 White V2',24,280.00);
insert into products values (2,2443563,'Mando Dualsense PS5 Black V2',20,299.99);