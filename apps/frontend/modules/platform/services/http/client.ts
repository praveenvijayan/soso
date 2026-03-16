import type { DomainServiceResult, ServiceError } from "@/shared/types/service";

export interface RequestContext {
  moduleId: string;
  trace: string;
  tenantSlug?: string;
}

export interface RequestOptions extends RequestInit {
  context: RequestContext;
}

function normalizeError(error: unknown): ServiceError {
  if (error instanceof Error) {
    return {
      code: "UNKNOWN",
      message: error.message,
      details: error,
    };
  }

  return {
    code: "UNKNOWN",
    message: "Unexpected service error",
    details: error,
  };
}

export async function serviceRequest<T>(
  producer: () => Promise<T>,
  options: RequestOptions
): Promise<DomainServiceResult<T>> {
  try {
    const data = await producer();
    return {
      data,
      error: null,
      meta: {
        requestId: options.context.trace,
        source: options.context.moduleId,
      },
    };
  } catch (error) {
    return {
      data: null,
      error: normalizeError(error),
      meta: {
        requestId: options.context.trace,
        source: options.context.moduleId,
      },
    };
  }
}
