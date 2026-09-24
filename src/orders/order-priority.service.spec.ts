import { OrderPriorityService } from "./order-priority.service";
import { OrderEntity } from "./entities/order.entity";

describe("OrderPriorityService", () => {
  const service = new OrderPriorityService();

  function buildOrder(overrides: Partial<OrderEntity>): OrderEntity {
    return {
      id: 1,
      item: "Café",
      quantity: 1,
      status: "pending",
      customer: undefined as any,
      createdAt: new Date(),
      ...overrides,
    };
  }

  it("returns normal priority for a pending order with quantity 1", () => {
    const order = buildOrder({ status: "pending", quantity: 1 });
    const result = service.classify(order);
    expect(result.priority).toBe("normal");
  });

  it("returns medium priority for a pending order with quantity 3", () => {
    const order = buildOrder({ status: "pending", quantity: 3 });
    const result = service.classify(order);
    expect(result.priority).toBe("medium");
  });

  it("returns high priority for a pending order with quantity 4", () => {
    const order = buildOrder({ status: "pending", quantity: 4 });
    const result = service.classify(order);
    expect(result.priority).toBe("high");
  });

  it("returns completed priority for a ready order regardless of quantity", () => {
    const order = buildOrder({ status: "ready", quantity: 5 });
    const result = service.classify(order);
    expect(result.priority).toBe("completed");
  });
});