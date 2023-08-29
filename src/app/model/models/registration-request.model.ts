import { Address } from "./address.model";

export class RegistrationRequest {
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    address: Address = new Address();
    phoneNumber: number | undefined;
}