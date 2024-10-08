/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobTypeWhereInput } from "./JobTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobTypeOrderByInput } from "./JobTypeOrderByInput";

@ArgsType()
class JobTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobTypeWhereInput, { nullable: true })
  @Type(() => JobTypeWhereInput)
  where?: JobTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [JobTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobTypeOrderByInput], { nullable: true })
  @Type(() => JobTypeOrderByInput)
  orderBy?: Array<JobTypeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobTypeFindManyArgs as JobTypeFindManyArgs };
