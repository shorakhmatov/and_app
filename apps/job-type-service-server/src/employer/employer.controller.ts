import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployerService } from "./employer.service";
import { EmployerControllerBase } from "./base/employer.controller.base";

@swagger.ApiTags("employers")
@common.Controller("employers")
export class EmployerController extends EmployerControllerBase {
  constructor(protected readonly service: EmployerService) {
    super(service);
  }
}
