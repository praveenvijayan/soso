export type ServiceErrorCode =
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION"
  | "NETWORK"
  | "UNKNOWN";

export interface ServiceError {
  code: ServiceErrorCode;
  message: string;
  details?: unknown;
}

export interface DomainServiceResult<T> {
  data: T | null;
  error: ServiceError | null;
  meta?: {
    requestId?: string;
    source?: string;
  };
}
