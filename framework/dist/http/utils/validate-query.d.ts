import { z } from "zod";
import { NextFunction } from "express";
import { BaseEntity, QueryConfig } from "@medusajs/types";
import { MedusaRequest, MedusaResponse } from "../types";
export declare function validateAndTransformQuery<TEntity extends BaseEntity>(zodSchema: z.ZodObject<any, any> | z.ZodEffects<any, any>, queryConfig: QueryConfig<TEntity>): (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validate-query.d.ts.map