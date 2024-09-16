/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { JobTypeService } from "../jobType.service";
import { JobTypeCreateInput } from "./JobTypeCreateInput";
import { JobType } from "./JobType";
import { JobTypeFindManyArgs } from "./JobTypeFindManyArgs";
import { JobTypeWhereUniqueInput } from "./JobTypeWhereUniqueInput";
import { JobTypeUpdateInput } from "./JobTypeUpdateInput";

export class JobTypeControllerBase {
  constructor(protected readonly service: JobTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobType })
  async createJobType(
    @common.Body() data: JobTypeCreateInput
  ): Promise<JobType> {
    return await this.service.createJobType({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JobType] })
  @ApiNestedQuery(JobTypeFindManyArgs)
  async jobTypes(@common.Req() request: Request): Promise<JobType[]> {
    const args = plainToClass(JobTypeFindManyArgs, request.query);
    return this.service.jobTypes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async jobType(
    @common.Param() params: JobTypeWhereUniqueInput
  ): Promise<JobType | null> {
    const result = await this.service.jobType({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateJobType(
    @common.Param() params: JobTypeWhereUniqueInput,
    @common.Body() data: JobTypeUpdateInput
  ): Promise<JobType | null> {
    try {
      return await this.service.updateJobType({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteJobType(
    @common.Param() params: JobTypeWhereUniqueInput
  ): Promise<JobType | null> {
    try {
      return await this.service.deleteJobType({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
