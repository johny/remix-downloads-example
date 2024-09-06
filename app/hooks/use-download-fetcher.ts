import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export const base64ToUint8Array = (base64: string): Uint8Array => {
  // Decode Base64 data
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes;
};

type DownloadLinkData = {
  fileData: string;
  fileType: string;
  fileName: string;
};

export function useDownloadFetcher() {
  const fetcher = useFetcher<DownloadLinkData>();

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }

    const { fileData, fileType, fileName } = fetcher.data;
    const blob = new Blob([base64ToUint8Array(fileData)], { type: fileType });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  }, [fetcher.state, fetcher.data]);

  return fetcher;
}
