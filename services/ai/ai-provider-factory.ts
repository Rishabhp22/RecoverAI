import { OpenRouterProvider } from "@/services/ai/providers/openrouter-provider";
import type { AIProvider, AIProviderName } from "@/types/ai";
import { ServiceConfigurationError } from "@/utils/service-errors";

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (value === undefined || value.length === 0) {
    throw new ServiceConfigurationError(`${name} must be configured.`);
  }

  return value;
}

export function createAIProvider(): AIProvider {
  const providerName = getRequiredEnvironmentVariable("AI_PROVIDER") as AIProviderName;

  if (providerName !== "openrouter") {
    throw new ServiceConfigurationError(
      `Unsupported AI provider: ${providerName}.`,
    );
  }

  getRequiredEnvironmentVariable("OPENROUTER_API_KEY");

  return new OpenRouterProvider(
    getRequiredEnvironmentVariable("OPENROUTER_MODEL"),
  );
}
