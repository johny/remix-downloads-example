import fs from "fs";

export async function generatePdf() {
  // dummy wait for few seconds to simulate a long running process
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // open PDF from file system and return it as a buffer
  const path = "../../public/assets/pdf/remix.pdf";

  // read the file from full path
  const fullPath = new URL(path, import.meta.url).pathname;
  const data = fs.readFileSync(fullPath);

  return data;
}
