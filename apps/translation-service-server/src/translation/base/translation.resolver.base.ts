/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Translation } from "./Translation";
import { TranslationCountArgs } from "./TranslationCountArgs";
import { TranslationFindManyArgs } from "./TranslationFindManyArgs";
import { TranslationFindUniqueArgs } from "./TranslationFindUniqueArgs";
import { DeleteTranslationArgs } from "./DeleteTranslationArgs";
import { TranslationService } from "../translation.service";
@graphql.Resolver(() => Translation)
export class TranslationResolverBase {
  constructor(protected readonly service: TranslationService) {}

  async _translationsMeta(
    @graphql.Args() args: TranslationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Translation])
  async translations(
    @graphql.Args() args: TranslationFindManyArgs
  ): Promise<Translation[]> {
    return this.service.translations(args);
  }

  @graphql.Query(() => Translation, { nullable: true })
  async translation(
    @graphql.Args() args: TranslationFindUniqueArgs
  ): Promise<Translation | null> {
    const result = await this.service.translation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Translation)
  async deleteTranslation(
    @graphql.Args() args: DeleteTranslationArgs
  ): Promise<Translation | null> {
    try {
      return await this.service.deleteTranslation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
