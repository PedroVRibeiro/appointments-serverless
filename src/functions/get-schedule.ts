import { APIGatewayProxyHandler } from "aws-lambda";
import { container } from "../utils/di-container";

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const controller = container.getScheduleController();
  return controller.handle();
};
