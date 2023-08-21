DROP TABLE if exists products;

CREATE TABLE `jamusers`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `username`VARCHAR(255) NOT NULL,
    `password`VARCHAR(255) NOT NULL,
    `name`VARCHAR(255) NOT NULL,
    `surname`VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
);


CREATE TABLE `products`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `ingredients` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    `price` FLOAT UNSIGNED NOT NULL, 
    `size` INT UNSIGNED NOT NULL,
    `image` VARCHAR(999) NOT NULL,PRIMARY KEY(`id`)
);

INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Berrylicious Jam', 'Mixed berries, sugar, lemon juice', 'A delightful blend of fresh berries with a tangy twist of lemon', 50, 6.99, 250, 'https://i0.wp.com/mountainmamacooks.com/wp-content/uploads/2015/05/triple-berry-jam-mountain-mama-cooks-4.jpg?resize=600%2C900&ssl=1');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Peach Paradise Jam', 'Ripe peaches, sugar, vanilla extract', 'Taste the sweet essence of summer with this heavenly peach jam', 30, 7.99, 200, 'https://www.chilipeppermadness.com/wp-content/uploads/2018/03/96bf577e2682bc7925dad067c2022909.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Tropical Tango Jam', 'Pineapple, mango, papaya, sugar', 'Transport yourself to a tropical island with this exotic fruit jam', 40, 8.99, 300, 'https://chelsweets.com/wp-content/uploads/2020/08/recipe-card-thumb-4-scaled-735x1102.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Citrus Burst Jam', 'Oranges, lemons, sugar', 'Experience a burst of citrus flavor in every spoonful of this zesty jam', 60, 5.99, 200, 'https://www.lordbyronskitchen.com/wp-content/uploads/2019/06/3-3.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Cherrylicious Jam', 'Fresh cherries, sugar, almond extract', 'Indulge in the sweet and tart taste of cherries with a hint of almond', 25, 9.99, 150, 'https://thenovicechefblog.com/wp-content/uploads/2022/01/Cherry-Chia-Jam-1.jpeg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Mellow Mango Jam', 'Ripe mangoes, sugar, lime juice', 'Savor the tropical flavor of luscious mangoes in this smooth and mellow jam', 35, 6.99, 250, 'https://insimoneskitchen.com/wp-content/uploads/2014/05/20120712-_MG_3602.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Raspberry Rhapsody Jam', 'Raspberries, sugar, lemon zest', 'Embark on a delightful journey with the intense flavors of raspberries and lemon', 20, 7.99, 200, 'https://www.fabfood4all.co.uk/wp-content/uploads/2019/07/Raspberry-Chocolate-Jam-23-lr-B-tall.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Apricot Delight Jam', 'Fresh apricots, sugar, vanilla bean', 'Delight your taste buds with the natural sweetness of apricots enhanced with vanilla', 45, 8.99, 300, 'https://en.julskitchen.com/wp-content/uploads/sites/2/2019/07/Confettura-di-albicocche-002.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Blueberry Bliss Jam', 'Juicy blueberries, sugar, cinnamon', 'Experience pure bliss with the burst of juicy blueberries and a hint of cinnamon', 55, 5.99, 200, 'https://www.fabfood4all.co.uk/wp-content/uploads/2017/01/Blueberry-Jam-87-lr2.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Strawberry Symphony Jam', 'Fresh strawberries, sugar, balsamic vinegar', 'Let your taste buds dance to the symphony of flavors in this strawberry jam', 40, 9.99, 150, 'https://www.sweetandsavorybyshinee.com/wp-content/uploads/2022/09/Strawberry-Jam-2.jpg');







