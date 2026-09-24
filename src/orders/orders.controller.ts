import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrdersService } from "./orders.service";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrdersSummaryService } from "./orders-summary.service";

@Controller("orders")
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly ordersSummaryService: OrdersSummaryService,
  ) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(Number(id), updateOrderDto);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Patch(":id/ready")
  markAsReady(@Param("id") id: string) {
    return this.ordersService.markAsReady(Number(id));
  }

  @Get("summary")
  getSummary() {
    return this.ordersSummaryService.getSummary();
  }

  @Get(":id/estimate")
  estimateOrder(@Param("id") id: number) {
    return this.ordersService.estimateOrder(id);
  }

  @Get("pending")
  findRecentPending() {
    return this.ordersService.findRecentPending();
  }

  @Get(":id/priority")
  getPriority(@Param("id") id: string) {
    return this.ordersService.getPriority(Number(id));
  }

  @Get("pending-queue")
  findPendingQueue() {
    return this.ordersService.findPendingQueue();
  }
}
