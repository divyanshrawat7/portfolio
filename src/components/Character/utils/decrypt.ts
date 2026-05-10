async function generateAESKey(password: string): Promise<CryptoKey> {
  // Fallback for environments where crypto.subtle is unavailable
  if (!crypto.subtle) {
    throw new Error(
      "crypto.subtle is not available. Ensure running on HTTPS or localhost with proper setup."
    );
  }

  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const encryptedData = await response.arrayBuffer();
    const iv = new Uint8Array(encryptedData.slice(0, 16));
    const data = encryptedData.slice(16);
    const key = await generateAESKey(password);
    return await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
  } catch (err) {
    console.error("Decryption failed:", err);
    throw err;
  }
};