/**
 * Loads ".env" file based upon the environment in which the
 * app is running.
 *
 * - Loads ".env" file by default.
 * - Loads ".env.staging" when "environment=staging".
 * - Loads ".env.production" when "environment=production".
 * - Loads ".env.test" when "environment=test".
 *
 * This method does not return any value and updates the "process.env"
 * object instead.
 */
export declare function loadEnv(environment: string, envDir: string): void;
//# sourceMappingURL=load-env.d.ts.map