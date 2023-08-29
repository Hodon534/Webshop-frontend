export interface Order {
    id: number;
    items: Array<OrderItem>;
    status: string;
    createdAt: string;
    total: number;
    userId: number;
    
}

export interface OrderItem {
    id: number;
    productId: number;
    productName: string;
    productImage: string;
    price: number;
    quantity: number;
    
}