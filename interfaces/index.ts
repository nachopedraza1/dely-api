// interfaces.ts

// Interfaz para los productos
export interface Product {
    id: number;                       // Identificador único para cada producto
    name: string;                    // Nombre del producto
    description?: string;            // Descripción detallada del producto (opcional)
    price: number;                   // Precio del producto
    category: string;                // Categoría del producto (por ejemplo, entrada, plato principal, postre, etc.)
    stock: number;                  // Cantidad disponible en inventario
    added_date: Date;               // Fecha en la que se agregó el producto (opcional)
    active: boolean;                // Estado del producto (activo o no)
    addons?: any;                   // Agregados del producto (opcional, JSON puede ser cualquier tipo)
}

// Interfaz para los métodos de pago
export interface PaymentMethod {
    id: number;                       // Identificador único para cada método de pago
    active: boolean;                 // Estado del método de pago (activo o no)
    method_name: string;             // Nombre del método de pago (e.g., 'transferencia', 'efectivo', 'debito')
}

// Interfaz para los pedidos
export interface Order {
    id: number;                       // Identificador único para cada pedido
    dni_customer: string;            // DNI del cliente
    name_customer: string;           // Nombre del cliente
    payment_status: boolean;         // Estado de pago
    payment_method: number;          // ID del método de pago
    order_status: 'delivered' | 'undelivered'; // Estado del pedido
    shipping_type: 'local-pick-up' | 'delivery'; // Tipo de envío
    amount_total: number;            // Monto total de la orden
    date_order: Date;               // Fecha en la que se realizó el pedido (opcional)
}

// Interfaz para los ítems del pedido
export interface OrderItem {
    id: number;                      // Identificador único para cada línea de producto
    order_id: number;               // ID del pedido al que pertenece el producto
    product_id: number;             // ID del producto
    quantity: number;              // Cantidad del producto en el pedido
    price: number;                 // Precio del producto en el momento de la compra
}
