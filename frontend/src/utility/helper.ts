export function isValidOnePrintS3Url(url: string): boolean {
  try {
    const parsed = new URL(url);

    const host = parsed.hostname;

    // Must match your bucket only
    const bucketPattern = /^oneprint-files\.s3[.-][a-z0-9-]+\.amazonaws\.com$/i;

    if (!bucketPattern.test(host)) {
      return false;
    }

    // Must contain object path
    if (!parsed.pathname || parsed.pathname === "/") {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function extractFileName(url: string) {
  const lastSegment = new URL(url).pathname.split("/").pop();

  if (!lastSegment) return null;

  // Remove only UUID prefix (strict UUID pattern)
  return lastSegment.replace(
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}-/,
    "",
  );
}
