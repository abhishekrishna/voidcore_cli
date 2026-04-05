import fs from "fs-extra";
import path from "path";

type Options = {
  framework: "nestjs" | "fastapi";
  database: "postgres" | "mongodb";
  outputDir: string;
};

export async function generateProject(opts: Options) {
  const { framework, outputDir } = opts;

  const templateDir = path.resolve(__dirname, `../templates/${framework}`);
  const outDir = path.resolve(process.cwd(), outputDir);

  try {
    await fs.copy(templateDir, outDir);
    console.log(`✅ Project scaffolded at: ${outputDir}`);
  } catch (err) {
    console.error("❌ Error scaffolding project:", err);
  }
}