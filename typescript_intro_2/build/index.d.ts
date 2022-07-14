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
