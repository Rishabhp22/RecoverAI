import type { ServiceErrorCode } from "@/types/service";

export class ServiceConfigurationError extends Error {
  public readonly code: ServiceErrorCode = "configuration";

  public constructor(message: string) {
    super(message);
    this.name = "ServiceConfigurationError";
  }
}
