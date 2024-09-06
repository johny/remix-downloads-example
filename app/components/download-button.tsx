import { useDownloadFetcher } from "~/hooks/use-download-fetcher";

type DownloadButtonProps = {
  path: string;
  loadingState?: React.ReactNode;
  children?: React.ReactNode;
};

export const DownloadButton = ({
  path,
  loadingState,
  children,
}: DownloadButtonProps) => {
  const fetcher = useDownloadFetcher();

  const handleDownload = () => {
    if (fetcher.state !== "idle") return;
    fetcher.load(path);
  };

  return (
    <button onClick={handleDownload}>
      {fetcher.state !== "idle" ? loadingState : children}
    </button>
  );
};
