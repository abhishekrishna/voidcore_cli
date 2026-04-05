#!/usr/bin/env tsx
import path from "path";
import fs from "fs-extra";
import { getUserSelections } from "../core/prompts";
import { generateCrudFiles as generateNestCrud } from "./generators/nestjs-generator";
import { generateCrudFiles as generateFastapiCrud } from "./generators/fastapi-generator";

async function run() {
  const answers = await getUserSelections();
  const { language, framework, database, resourceName } = answers;

  const baseTemplateDir = path.join(process.cwd(), "templates/base", framework, "");
  const crudTemplateDir = path.join(process.cwd(), "templates/curd", framework, "", database.toLowerCase());

  if (!fs.existsSync(baseTemplateDir)) {
    console.error(`❌ Base template for ${framework} not found: ${baseTemplateDir}`);
    process.exit(1);
  }

  const outputDir = path.join(process.cwd(), `${framework}-${database.toLowerCase()}-output`);
  fs.removeSync(outputDir);
  fs.ensureDirSync(outputDir);

  console.log(`📦 Copying base template: ${baseTemplateDir}`);
  fs.copySync(baseTemplateDir, outputDir);

  if (fs.existsSync(crudTemplateDir)) {
    console.log(`📦 Merging CRUD template: ${crudTemplateDir}`);
    fs.copySync(crudTemplateDir, outputDir, { overwrite: true });
  } else {
    console.warn(`⚠ No CRUD template found for ${framework} + ${database}. Skipping CRUD merge.`);
  }

  const schemaPath = path.join(process.cwd(), "schema.yaml");
  if (fs.existsSync(schemaPath)) {
    console.log(`🛠 Generating CRUD files from schema.yaml...`);
    if (framework.toLowerCase().includes("nest")) {
      generateNestCrud(schemaPath, outputDir);
    } else if (framework.toLowerCase().includes("fastapi")) {
      generateFastapiCrud(schemaPath, outputDir);
    } else if (framework.toLowerCase().includes("laravel")) {
      // generateLaravelCrud(schemaPath, outputDir);
    } else {
      console.warn(`⚠ No CRUD generator implemented for ${framework}.`);
    }
  } else {
    console.log(`ℹ No schema.yaml found. Skipping CRUD file generation.`);
  }

  console.log(`✅ Project generated in: ${outputDir}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});