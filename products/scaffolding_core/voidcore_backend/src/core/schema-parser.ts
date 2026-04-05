import fs from "fs";
import yaml from "js-yaml";

export interface Field {
  name: string;
  type: string;
  required?: boolean;
}

export interface Resource {
  name: string; // PascalCase
  fields: Field[];
}

export function parseSchema(filePath: string): Resource[] {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Schema file not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(fileContent) as { resources: any[] };

  return data.resources.map((res) => ({
    name: res.name,
    fields: res.fields || [],
  }));
}