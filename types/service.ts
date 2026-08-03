export type ServiceErrorCode =
  | "authentication"
  | "authorization"
  | "configuration"
  | "network"
  | "timeout"
  | "unavailable"
  | "validation"
  | "unknown";

export interface ServiceSuccess<T> {
  success: true;
  data: T;
}

export interface ServiceFailure {
  success: false;
  code: ServiceErrorCode;
  message: string;
}

export type ServiceResult<T> = ServiceSuccess<T> | ServiceFailure;
