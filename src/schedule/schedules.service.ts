export class ScheduleService {
  getAll() {
    return {
      doctors: [
        {
          id: 1,
          name: "Dr. João Silva",
          speciality: "Cardiologista",
          schedule: [
            { date: "2024-10-05 09:00", patient: "João Carlos" },
            { date: "2024-10-05 10:00", patient: "João Alberto" },
            { date: "2024-10-05 11:00", patient: "João Frota" },
          ],
        },
        {
          id: 2,
          name: "Dra. Maria Souza",
          speciality: "Dermatologista",
          schedule: [
            { date: "2024-10-05 11:00", patient: "Carlos Frota" },
            { date: "2024-10-05 12:00", patient: "Carlos Francisco" },
          ],
        },
      ],
    };
  }
}
