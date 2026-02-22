import React, { useState, type ChangeEvent } from "react";
import type {
  FileUploadGeneratorProps,
  UploadResponse,
} from "../interfaces/interfaces";

const FileUploadGenerator: React.FC<FileUploadGeneratorProps> = ({
  uploadUrl = import.meta.env.VITE_API_URL,
  defaultExpiryMinutes = 5,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const [expiryMinutes, setExpiryMinutes] =
    useState<number>(defaultExpiryMinutes);

  const [loading, setLoading] = useState<boolean>(false);

  const [result, setResult] = useState<UploadResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  /**
   * Handle file change
   */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    setFile(e.target.files[0]);
    setResult(null);
    setError(null);
  };

  /**
   * Handle expiry change
   */
  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpiryMinutes(Number(e.target.value));
  };

  /**
   * Submit file to backend
   */
  const handleSubmit = async (): Promise<void> => {
    if (!file) {
      setError("Please select a file");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${uploadUrl}?expiryMinutes=${expiryMinutes}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data: UploadResponse = await response.json();

      setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Copy URL
   */
  const copyToClipboard = async (): Promise<void> => {
    if (!result) return;

    await navigator.clipboard.writeText(result.url);
  };

  return (
    <div className="flex justify-content-center mt-6">
      <div className="card shadow-3 border-round p-4 w-full md:w-6 lg:w-4">
        <h2 className="text-xl font-semibold mb-4">Generate File Link</h2>

        {/* File Input */}
        <div className="mb-3">
          <label className="block mb-2 font-medium">Select File</label>

          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border-1 border-300 border-round"
          />
        </div>

        {/* Expiry Input */}
        <div className="mb-3">
          <label className="block mb-2 font-medium">
            Expiry Time (minutes)
          </label>

          <input
            type="number"
            value={expiryMinutes}
            min={1}
            onChange={handleExpiryChange}
            className="w-full p-2 border-1 border-300 border-round"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-primary text-white border-none border-round p-2 cursor-pointer"
        >
          {loading ? "Generating..." : "Generate Link"}
        </button>

        {/* Error */}
        {error && <div className="text-red-500 mt-3">{error}</div>}

        {/* Result */}
        {result && (
          <div className="mt-4 p-3 border-1 border-300 border-round">
            <div className="mb-2 font-medium">URL</div>

            <div className="flex gap-2">
              <input
                value={result.url}
                readOnly
                className="w-full p-2 border-1 border-300 border-round"
              />

              <button
                onClick={copyToClipboard}
                className="p-2 bg-green-500 text-white border-none border-round cursor-pointer"
              >
                Copy
              </button>
            </div>

            <div className="mt-2 text-sm text-600">
              Expires at: {new Date(result.expiresAt).toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadGenerator;
