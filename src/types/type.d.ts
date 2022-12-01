export type Flight = {
    data: string;
    origin: string;
    destination: string;
    price:numberstring;
    availability: number
}


export type Trip = {
    id: string,
    origin: Flight,
    destination: Flight,
    availability: number;
    price: number;
    days: number;
}