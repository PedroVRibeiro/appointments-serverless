import { GetScheduleController } from "../schedule/schedule.controller";
import { ScheduleService } from "../schedule/schedules.service";

export const container = {
  getScheduleController: () => {
    const scheduleService = new ScheduleService();
    return new GetScheduleController(scheduleService);
  },
};
