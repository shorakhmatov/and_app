import { Module } from "@nestjs/common";
import { EmployerModuleBase } from "./base/employer.module.base";
import { EmployerService } from "./employer.service";
import { EmployerController } from "./employer.controller";
import { EmployerResolver } from "./employer.resolver";

@Module({
  imports: [EmployerModuleBase],
  controllers: [EmployerController],
  providers: [EmployerService, EmployerResolver],
  exports: [EmployerService],
})
export class EmployerModule {}
