import { json, LoaderFunctionArgs } from "@remix-run/node";

import { generatePdf } from "~/services/pdf";

export async function loader({ request }: LoaderFunctionArgs) {
  const pdfData = await generatePdf();

  // get params from request ()
  const downloadType = new URL(request.url).searchParams.get("type");

  if (downloadType === "fetcher") {
    return json({
      fileData: pdfData.toString("base64"),
      fileName: "report.pdf",
      fileType: "application/pdf",
    });
  }

  return new Response(pdfData, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=report.pdf",
    },
  });
}
