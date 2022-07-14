interface test {
    title: string;
    status: boolean;
    id: number;
}
interface combineName {
    firstName: string;
    lastName?: string;
}
declare function getName({ firstName, lastName }: combineName): string;
declare let nameobj: {
    firstName: string;
    lastName: string;
};
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    phones: number[];
    addresses: Address[];
    email?: string;
    firstName: string;
    lastName: string;
    middleName?: string;
}
