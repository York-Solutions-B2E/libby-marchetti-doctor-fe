export class Doctor {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public availablity: Date[] | null;
    public appointments: Date[] | null

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        availability: Date[] | null,
        appointments: Date[] | null
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.availablity = availability;
        this.appointments = appointments
    }
}