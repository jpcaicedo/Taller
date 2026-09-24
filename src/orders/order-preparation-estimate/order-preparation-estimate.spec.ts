import { OrderEntity } from "../entities/order.entity";
import { OrderPreparationEstimateService } from "./order-preparation-estimate.service";

describe("OrderRulesService", () => {
  const service = new OrderPreparationEstimateService();

  it("return order estimate in 0 because status is ready", () => {
    const order = {
      quantity: 2,
      status: "ready",
      id: 1,
    } as OrderEntity;

    expect(service.estimate(order)).toStrictEqual({
      orderId: 1,
      status: "ready",
      estimatedTime: 0,
    });
  });
});
