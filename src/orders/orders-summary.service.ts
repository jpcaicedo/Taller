import { Injectable } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Injectable()
export class OrdersSummaryService {
  constructor(private readonly ordersService: OrdersService) {}

  async getSummary() {
    const orders = await this.ordersService.findAll();

    return {
      total: orders.length,
      pending: orders.filter((order) => order.status === "pending").length,
      ready: orders.filter((order) => order.status === "ready").length,
    };
  }
}
