/* eslint-disable no-process-env */

/**
 * Check the process.env global for the given key. If it does not exist,
 * throw an error since the app expects/requires that it exists in the environment.
 */
function getEnvValue(key: string): string {
  if (process.env[key] !== undefined) {
    return process.env[key]!;
  }
  throw new Error(`env ${key} does not exist`);
}

/**
 * Check the process.env global for the given key. If it exists, return true.
 * Otherwise, return false.
 */
function getEnvFlag(key: keyof NodeJS.ProcessEnv): boolean {
  if (process.env[key] !== undefined) {
    return true;
  }
  return false;
}

/**
 * NODE_ENV: The environment that our web app is running in:
 *   - dev: Development mode, optimize for developers (logging, tooling, etc)
 *   - test: Test mode, optimize for test runners
 *   - production: Production/Staging mode, optimize for the end user & remove dev tooling
 */
export const NODE_ENV = getEnvValue('NODE_ENV');
/** API_URL: The Full URL of the Application API */
// export const API_URL = getEnvValue('REACT_APP_API_URL') || '//localhost:8080';
export const API_URL =  '//localhost:8080';
