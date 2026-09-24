import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { OrderEntity } from "./entities/order.entity";
import { CustomerEntity } from "./entities/customer.entity";
import { DiningEntity } from "./entities/dining.entity";
import { OrderRulesService } from "./order-rules/order-rules.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersSummaryService } from "./orders-summary.service";
import { OrderPreparationEstimateService } from "./order-preparation-estimate/order-preparation-estimate.service";
import { OrderPriorityService } from "./order-priority.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, CustomerEntity, DiningEntity]),
  ],
  providers: [
    OrdersService,
    OrderRulesService,
    OrdersSummaryService,
    OrderPreparationEstimateService,
    OrderPriorityService,
  ],
  controllers: [OrdersController],
})
export class OrdersModule {}
