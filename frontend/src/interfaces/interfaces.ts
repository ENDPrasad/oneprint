export interface UploadResponse {
  message: string;
  url: string;
  expiresAt: string;
  expiresInMinutes: number;
}

export interface FileUploadGeneratorProps {
  uploadUrl?: string;
  defaultExpiryMinutes?: number;
}
