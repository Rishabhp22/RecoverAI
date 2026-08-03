import type {
  AIProvider,
  CaseSummaryInput,
  ChatInput,
  ChatResult,
  FIRInput,
  FIRResult,
  OCRInput,
  OCRResult,
  SummaryResult,
} from "@/types/ai";
import { ServiceConfigurationError } from "@/utils/service-errors";

export class OpenRouterProvider implements AIProvider {
  public constructor(public readonly model: string) {}

  public async generateFIR(input: FIRInput): Promise<FIRResult> {
    void input;
    return this.notAvailableDuringFoundation();
  }

  public async extractInvoice(input: OCRInput): Promise<OCRResult> {
    void input;
    return this.notAvailableDuringFoundation();
  }

  public async summarizeCase(input: CaseSummaryInput): Promise<SummaryResult> {
    void input;
    return this.notAvailableDuringFoundation();
  }

  public async chat(input: ChatInput): Promise<ChatResult> {
    void input;
    return this.notAvailableDuringFoundation();
  }

  private notAvailableDuringFoundation(): never {
    throw new ServiceConfigurationError(
      "AI requests are not available during the Sprint 1 foundation phase.",
    );
  }
}
