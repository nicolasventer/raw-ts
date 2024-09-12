import { argv, write } from "bun";

if (argv.length < 3) {
	console.log("Usage: unraw-ts <file>");
	process.exit(1);
}

const file = argv[2];
const bunFile = Bun.file(file);
if (!bunFile.exists()) {
	console.log(`File not found: ${file}`);
	process.exit(1);
}
const content = (await import(`./${file}`).then((m) => m.default)) as string;
const newFile = file.includes("Raw.ts") ? file.replace("Raw.ts", ".ts") : file.replace(/\..+$/, "Unraw.ts");
write(newFile, content);
console.log(`${newFile} created.`);
