export type AIProviderName = "openrouter";

export type FIRInput = Readonly<Record<string, never>>;
export type FIRResult = Readonly<Record<string, never>>;
export type OCRInput = Readonly<Record<string, never>>;
export type OCRResult = Readonly<Record<string, never>>;
export type CaseSummaryInput = Readonly<Record<string, never>>;
export type SummaryResult = Readonly<Record<string, never>>;
export type ChatInput = Readonly<Record<string, never>>;
export type ChatResult = Readonly<Record<string, never>>;

export interface AIProvider {
  generateFIR(input: FIRInput): Promise<FIRResult>;
  extractInvoice(input: OCRInput): Promise<OCRResult>;
  summarizeCase(input: CaseSummaryInput): Promise<SummaryResult>;
  chat(input: ChatInput): Promise<ChatResult>;
}
