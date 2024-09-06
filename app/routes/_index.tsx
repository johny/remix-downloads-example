import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { DownloadButton } from "~/components/download-button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Link to="/download?type=direct" reloadDocument download>
            Download a report (directly)
          </Link>
        </li>
        <li>
          <DownloadButton
            path="/download?type=fetcher"
            loadingState="Downloading..."
          >
            Download a report (via fetcher with loading state)
          </DownloadButton>
        </li>
      </ul>
    </div>
  );
}
