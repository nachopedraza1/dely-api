/* CAMPOS DELY-APP V1*/

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,              -- Identificador único para cada producto
    name VARCHAR(20) NOT NULL,                      -- Nombre del producto
    description VARCHAR(100),                       -- Descripción detallada del producto
    price DECIMAL(10, 2) NOT NULL,                  -- Precio del producto
    category VARCHAR(20) NOT NULL,                           -- Categoría del producto (por ejemplo, entrada, plato principal, postre, etc.)
    stock INT DEFAULT 0 NOT NULL,                            -- Cantidad disponible en inventario
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha en la que se agregó el producto
    active BOOLEAN DEFAULT TRUE                     -- Estado del producto (activo o no)
    addons JSON                                     -- Agregados del producto
);

CREATE TABLE payment_methods (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Identificador único para cada método de pago
    active BOOLEAN DEFAULT TRUE,                -- Estado del metodo de pago (activo o no)
    method_name VARCHAR(50) NOT NULL UNIQUE     -- Nombre del método de pago (e.g., 'transferencia', 'efectivo', 'debito')
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,                          -- Identificador único para cada pedido
    dni_customer VARCHAR(20) NOT NULL,                          -- DNI del cliente
    name_customer VARCHAR(50) NOT NULL,                         -- Nombre del cliente
    payment_status BOOLEAN DEFAULT TRUE NOT NULL,               -- Estado de pago
    payment_method INT NOT NULL,                                -- ID del método de pago
    order_status ENUM('delivered', 'undelivered') NOT NULL,     -- Estado del pedido
    shipping_type ENUM('local-pick-up', 'delivery') NOT NULL,   -- Tipo de envío
    amount_total DECIMAL(10, 2) NOT NULL,                       -- Monto total de la orden
    date_order TIMESTAMP DEFAULT CURRENT_TIMESTAMP,             -- Fecha en la que se realizó el pedido
    FOREIGN KEY (payment_method) REFERENCES payment_methods(id) -- Clave foránea para el método de pago
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,                  -- Identificador único para cada línea de producto
    order_id INT NOT NULL,                              -- ID del pedido al que pertenece el producto
    product_id INT NOT NULL,                            -- ID del producto
    quantity INT NOT NULL,                              -- Cantidad del producto en el pedido
    price DECIMAL(10, 2) NOT NULL,                      -- Precio del producto en el momento de la compra
    FOREIGN KEY (order_id) REFERENCES orders(id),       -- Relación con la tabla de pedidos
    FOREIGN KEY (product_id) REFERENCES products(id)    -- Relación con la tabla de productos
);

