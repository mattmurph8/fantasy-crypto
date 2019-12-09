////////////////////////////////////////////////////////////////////////
// Generic API Request/Response Types
////////////////////////////////////////////////////////////////////////

export interface ApiResponseSuccess<T> {
  success: true;
  data: T;
}

export interface ApiResponseError {
  success: false;
  code?: number;
  message: string;
}

export interface ApiCredential {
  client_id: string;
  client_secret: string;
  customer_id: string;
}

/**
 * Usage:
 *   - ApiResponse<T>: A basic API response, returning data of type T or an ApiResponseError
 *   - ApiResponse<T, ApiResponseProblem>: An enhanced API response, returning data of type T,
 *   an ApiResponseProblem with enhanced error info, or a basic ApiResponseError if something
 *   went very wrong with the request.
 */
export type ApiResponse<T, U = ApiResponseError> = ApiResponseSuccess<T> | ApiResponseError | U;
