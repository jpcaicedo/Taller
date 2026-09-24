import { Injectable } from "@nestjs/common";
// import { OrdersService } from "../orders.service";
import { OrderEntity } from "../entities/order.entity";

@Injectable()
export class OrderPreparationEstimateService {
  estimate(order: OrderEntity) {
    const estimatedTime = order.status === "ready" ? 0 : 3 + order.quantity * 2;

    return {
      orderId: order.id,
      status: order.status,
      estimatedTime: estimatedTime,
    };
  }
}
