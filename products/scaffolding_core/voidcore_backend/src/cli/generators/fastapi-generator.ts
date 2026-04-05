import fs from "fs-extra";
import path from "path";
import { parseSchema, Resource } from "../../core/schema-parser";

function snakeCase(str: string) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
}

export function generateCrudFiles(schemaPath: string, outputDir: string) {
  const resources = parseSchema(schemaPath);

  resources.forEach((res: Resource) => {
    const resourceFolder = path.join(outputDir, res.name.toLowerCase());
    fs.ensureDirSync(resourceFolder);

    ["controller", "service", "model"].forEach((type) => {
      const templatePath = path.join(process.cwd(), "templates", "fastapi", "curd", "common", `${type}.template.py`);
      if (!fs.existsSync(templatePath)) return;

      let content = fs.readFileSync(templatePath, "utf8");
      content = content
        .replace(/__resource__/g, res.name.toLowerCase())
        .replace(/__Resource__/g, res.name)
        .replace(/__snake_resource__/g, snakeCase(res.name));

      fs.writeFileSync(path.join(resourceFolder, `${res.name.toLowerCase()}_${type}.py`), content);
    });
  });
}