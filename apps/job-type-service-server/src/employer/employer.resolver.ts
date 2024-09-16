import * as graphql from "@nestjs/graphql";
import { EmployerResolverBase } from "./base/employer.resolver.base";
import { Employer } from "./base/Employer";
import { EmployerService } from "./employer.service";

@graphql.Resolver(() => Employer)
export class EmployerResolver extends EmployerResolverBase {
  constructor(protected readonly service: EmployerService) {
    super(service);
  }
}
