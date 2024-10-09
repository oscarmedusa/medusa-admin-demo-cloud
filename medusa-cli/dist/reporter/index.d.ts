import ora from "ora";
import winston from "winston";
export declare class Reporter {
    protected activities_: Record<string, any>;
    protected loggerInstance_: winston.Logger;
    protected ora_: typeof ora;
    constructor({ logger, activityLogger }: {
        logger: any;
        activityLogger: any;
    });
    panic(data: any): void;
    /**
     * Determines if the logger should log at a given level.
     * @param {string} level - the level to check if logger is configured for
     * @return {boolean} whether we should log
     */
    shouldLog: (level: string) => boolean;
    /**
     * Sets the log level of the logger.
     * @param {string} level - the level to set the logger to
     */
    setLogLevel(level: string): void;
    /**
     * Resets the logger to the value specified by the LOG_LEVEL env var. If no
     * LOG_LEVEL is set it defaults to "silly".
     */
    unsetLogLevel(): void;
    /**
     * Begin an activity. In development an activity is displayed as a spinner;
     * in other environments it will log the activity at the info level.
     * @param {string} message - the message to log the activity under
     * @param {any} config
     * @returns {string} the id of the activity; this should be passed to do
     *   further operations on the activity such as success, failure, progress.
     */
    activity(message: string, config?: any): string;
    /**
     * Reports progress on an activity. In development this will update the
     * activity log message, in other environments a log message will be issued
     * at the info level. Logging will include the activityId.
     * @param {string} activityId - the id of the activity as returned by activity
     * @param {string} message - the message to log
     */
    progress(activityId: string, message: string): void;
    /**
     * Logs an error. If an error object is provided the stack trace for the error
     * will also be logged.
     * @param {String | Error} messageOrError - can either be a string with a
     *   message to log the error under; or an error object.
     * @param {Error?} error - an error object to log message with
     */
    error(messageOrError: string | Error, error?: Error): void;
    /**
     * Reports failure of an activity. In development the activity will be udpated
     * with the failure message in other environments the failure will be logged
     * at the error level.
     * @param {string} activityId - the id of the activity as returned by activity
     * @param {string} message - the message to log
     * @returns {object} data about the activity
     */
    failure(activityId: string, message: string): any;
    /**
     * Reports success of an activity. In development the activity will be udpated
     * with the failure message in other environments the failure will be logged
     * at the info level.
     * @param {string} activityId - the id of the activity as returned by activity
     * @param {string} message - the message to log
     * @returns {Record<string, any>} data about the activity
     */
    success(activityId: string, message: string): any;
    /**
     * Logs a message at the info level.
     * @param {string} message - the message to log
     */
    debug(message: string): void;
    /**
     * Logs a message at the info level.
     * @param {string} message - the message to log
     */
    info(message: string): void;
    /**
     * Logs a message at the warn level.
     * @param {string} message - the message to log
     */
    warn: (message: string) => void;
    /**
     * A wrapper around winston's log method.
     */
    log(...args: any[]): void;
}
declare const logger: Reporter;
export default logger;
//# sourceMappingURL=index.d.ts.map