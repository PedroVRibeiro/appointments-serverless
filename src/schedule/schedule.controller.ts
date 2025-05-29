import { ScheduleService } from "./schedules.service";

export class GetScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  handle() {
    const data = this.scheduleService.getAll();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }
}
