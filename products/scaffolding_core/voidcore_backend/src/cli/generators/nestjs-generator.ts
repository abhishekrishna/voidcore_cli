import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { parseSchema, Resource } from "../../core/schema-parser.js";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function pascalCase(str: string) {
  return str.replace(/(^\w|_\w)/g, (m) => m.replace("_", "").toUpperCase());
}

function mapType(type: string) {
  const typeMap: Record<string, string> = {
    string: "string",
    number: "number",
    boolean: "boolean",
    date: "Date",
    objectid: "Types.ObjectId",
  };
  return typeMap[type.toLowerCase()] || "any";
}

function generateFields(fields: { name: string; type: string; required?: boolean }[]) {
  return fields
    .map(
      (f) =>
        `  @Prop({ required: ${f.required || false} })\n  ${f.name}: ${mapType(f.type)};`
    )
    .join("\n");
}

export function generateCrudFiles(schemaPath: string, outputDir: string) {
  const resources = parseSchema(schemaPath);

  resources.forEach((res: Resource) => {
    const resourceFolder = path.join(outputDir, "src", res.name.toLowerCase());
    fs.ensureDirSync(resourceFolder);

    ["controller", "service", "module", "schema"].forEach((type) => {
      const templatePath = path.join(
        process.cwd(),
        "templates",
        "curd",
        "nestjs",
        `${type}.template.ts`
      );

      if (!fs.existsSync(templatePath)) {
        console.error(`❌ Missing template: ${templatePath}`);
        return;
      }

      let content = fs.readFileSync(templatePath, "utf8");

      content = content
        .replace(/__resource__/g, res.name.toLowerCase())
        .replace(/__PascalResource__/g, pascalCase(res.name))
        .replace(/\.schema\.template/g, `.${res.name.toLowerCase()}.schema`);

      if (type === "schema") {
        content = content.replace(/__fields__/g, generateFields(res.fields));
      }

      fs.writeFileSync(
        path.join(resourceFolder, `${res.name.toLowerCase()}.${type}.ts`),
        content
      );
    }); 
  });
}