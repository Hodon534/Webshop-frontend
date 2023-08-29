import { Address } from "./address.model";

export class Manufacturer {
    id: number = 0;
    name: string = "";
    address: Address = new Address();
    taxCode: string = "";
}