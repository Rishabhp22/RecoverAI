import { createAIProvider } from "@/services/ai/ai-provider-factory";
import type { AIProvider } from "@/types/ai";

export function getAIService(): AIProvider {
  return createAIProvider();
}
