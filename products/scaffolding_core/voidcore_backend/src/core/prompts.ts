import inquirer from "inquirer";

export async function getUserSelections() {
  const answers: any = {};

  // Step 1: Language
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Select language:",
      choices: ["TypeScript", "Python", "PHP"]
    }
  ]);
  answers.language = language;

  // Step 2: Framework (based on language)
  let frameworkChoices: { name: string; value: string }[] = [];
  if (language === "TypeScript") {
    frameworkChoices = [
      { name: "NestJS", value: "nestjs" },
      { name: "Express.js", value: "express" }
    ];
  } else if (language === "Python") {
    frameworkChoices = [
      { name: "FastAPI", value: "fastapi" },
      { name: "Django", value: "django" },
      { name: "Flask", value: "flask" }
    ];
  } else if (language === "PHP") {
    frameworkChoices = [
      { name: "Laravel", value: "laravel" },
      { name: "Symfony", value: "symfony" }
    ];
  }

  const { framework } = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Select framework:",
      choices: frameworkChoices
    }
  ]);
  answers.framework = framework;

  // Step 3: Database
  const { database } = await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: "Select database:",
      choices: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
    }
  ]);
  answers.database = database;

  // Step 4: Resource name(s)
  const { resourceName } = await inquirer.prompt([
    {
      type: "input",
      name: "resourceName",
      message: "Enter resource name(s) (comma-separated):"
    }
  ]);
  answers.resourceName = resourceName;

  return answers;
}