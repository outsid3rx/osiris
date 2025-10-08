import { intro, outro, text } from "@clack/prompts"
import { promisify } from "node:util"
import { exec as execSync } from "node:child_process"
import { Project } from "ts-morph"

const exec = promisify(execSync)
const EXPORT_FILE_PATH = "./src/shared/shadcn/components/ui/index.ts"

const main = async () => {
  intro(`Let's add the Shadcn components to the project`)

  const value = String(
    await text({
      message: "Which components do you want to install?",
    }),
  );
  const components = value.split(" ")

  await exec(`npx shadcn@latest add ${value}`)
  await exec("yarn install")
  await exec(
    `eslint ${components.map((component) => `./src/shared/shadcn/components/ui/${component}.tsx`).join(" ")} --fix`,
  );

  const project = new Project()
  const sourceFile = project.addSourceFileAtPath(EXPORT_FILE_PATH)
  components.forEach((component) => {
    sourceFile
      .addExportDeclaration({
        namespaceExport: "",
        moduleSpecifier: `./${component}`,
      })
      .toNamespaceExport()
  });
  await sourceFile.save()

  await exec(`eslint ${EXPORT_FILE_PATH} --fix`)

  outro(
    `Components ${components.join(", ")} added! Import them from '~shared/shadcn/components/ui/'`,
  )
}

void main()
