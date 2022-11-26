export class User {
    public id: number;
    public role: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public availability: Date[] | null;
    public appointments: Date[] | null

    constructor(
        id: number,
        role: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        availability: Date[] | null,
        appointments: Date[] | null
    ) {
        this.id = id;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.availability = availability;
        this.appointments = appointments
    }
}