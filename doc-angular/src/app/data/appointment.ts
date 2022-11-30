export class Appointment {
    constructor(
        public id: number | null,
        public doctorId: number,
        public patientId: number | null,
        public date: Date,
        public slot: number
    ){}
}