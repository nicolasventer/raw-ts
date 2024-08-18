import { argv, write } from "bun";

if (argv.length < 3) {
	console.log("Usage: raw-ts <file>");
	process.exit(1);
}

const file = argv[2];
const bunFile = Bun.file(file);
if (!bunFile.exists()) {
	console.log(`File not found: ${file}`);
	process.exit(1);
}
const content = await bunFile.text();
const newFile = file.replace(/\..+$/, "Raw.ts");
write(newFile, `export default ${JSON.stringify(content)};`);
console.log(`${newFile} created.`);
