create database retrogamer_db;
use retrogamer_db;

create table productos(
	id int auto_increment,
	nombre varchar(150) not null,
	precio double not null,
	primary key (id)
);

create table venta(
	id int auto_increment,
	cliente varchar(100) not null,
	fecha date not null,
	primary key (id)
);

create table detalleventa(
	id int auto_increment,
	producto_id int references productos(id),
	venta_id int references venta(id),
	cantidad int not null,
	descuento double not null,
	primary key (id)
);

select * from detalleventa;