insert into category ( id , name , created_at , updated_at ) values (1, 'T-shirt', '2023-08-31 00:00:00', '2023-08-31 00:00:00');
insert into category ( id , name , created_at , updated_at ) values (2, 'Mug', '2023-08-31 00:00:00', '2023-08-31 00:00:00');

insert into product (id , category_id , name , price , image , created_at , updated_at , weight , length , height , width , diameter) values (1 , 1 , 'Basic T-shirt' , 15.99 , '' , '2023-08-31 00:00:00' , '2023-08-31 00:00:00' , 2 , 10 , 30 , 40 , 0.5);
insert into product (id , category_id , name , price , image , created_at , updated_at , weight , length , height , width , diameter) values (2 , 2 , 'Basic Mug' , 9.99 , '' , '2023-07-31 00:00:00' , '2023-07-31 00:00:00' , 2 , 4 , 5 , 6 , 7);
insert into product (id , category_id , name , price , image , created_at , updated_at , weight , length , height , width , diameter) values (3 , 2 , 'Modern Mug' , 18.99 , '' , '2023-08-31 00:00:00' , '2023-08-31 00:00:00' , 3 , 5 , 7 , 9 , 5);
insert into product (id , category_id , name , price , image , created_at , updated_at , weight , length , height , width , diameter) values (4 , 1 , 'Modern T-shirt' , 24.99 , '' , '2023-07-31 00:00:00' , '2023-07-31 00:00:00' , 3 , 13 , 34 , 45 , 0.9);
