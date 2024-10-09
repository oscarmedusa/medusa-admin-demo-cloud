import { z } from "zod";
import { NextFunction } from "express";
import { MedusaRequest, MedusaResponse } from "../types";
export declare function validateAndTransformBody(zodSchema: z.ZodObject<any, any> | ((customSchema?: z.ZodObject<any, any>) => z.ZodObject<any, any> | z.ZodEffects<any, any>)): (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validate-body.d.ts.map