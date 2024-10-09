import { NextFunction, Response } from "express";
import { MedusaError } from "@medusajs/utils";
import { MedusaRequest } from "../types";
export declare function errorHandler(): (err: MedusaError, req: MedusaRequest, res: Response, next: NextFunction) => void;
/**
 * @schema Error
 * title: "Response Error"
 * type: object
 * properties:
 *  code:
 *    type: string
 *    description: A slug code to indicate the type of the error.
 *    enum: [invalid_state_error, invalid_request_error, api_error, unknown_error]
 *  message:
 *    type: string
 *    description: Description of the error that occurred.
 *    example: "first_name must be a string"
 *  type:
 *    type: string
 *    description: A slug indicating the type of the error.
 *    enum: [QueryRunnerAlreadyReleasedError, TransactionAlreadyStartedError, TransactionNotStartedError, conflict, unauthorized, payment_authorization_error, duplicate_error, not_allowed, invalid_data, not_found, database_error, unexpected_state, invalid_argument, unknown_error]
 */
//# sourceMappingURL=error-handler.d.ts.map