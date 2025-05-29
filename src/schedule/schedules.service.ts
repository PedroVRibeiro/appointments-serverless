export class ScheduleService {
  getAll() {
    return {
      doctors: [
        {
          id: 1,
          name: "Dr. João Silva",
          speciality: "Cardiologista",
          available_dates: [
            "2024-10-05 09:00",
            "2024-10-05 10:00",
            "2024-10-05 11:00",
          ],
        },
        {
          id: 2,
          name: "Dra. Maria Souza",
          speciality: "Dermatologista",
          available_dates: ["2024-10-06 14:00", "2024-10-06 15:00"],
        },
      ],
    };
  }
}
