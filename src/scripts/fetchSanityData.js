import fs from "fs";
import path from "path";

// Use relative paths instead of @/
import { getHeader, getFooter, getPage } from "../../sanity/sanity-utils.js"; 


const dataDir = path.resolve("src/data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

async function fetchData() {
  const headerData = await getHeader();
  const footerData = await getFooter();
  const insurancePageData = await getPage("Insurance");

  fs.writeFileSync(
    path.join(dataDir, "headerData.json"),
    JSON.stringify(headerData, null, 2)
  );
  fs.writeFileSync(
    path.join(dataDir, "footerData.json"),
    JSON.stringify(footerData, null, 2)
  );
  fs.writeFileSync(
    path.join(dataDir, "insurancePageData.json"),
    JSON.stringify(insurancePageData, null, 2)
  );

  console.log("✅ Data fetched and saved successfully!");
}

fetchData();
