import { appendFile, readFile, writeFile } from 'node:fs/promises';

const readFileFn = async () => {
  const fileUrl = new URL('../../package.json', import.meta.url);
  const fileContent = await readFile(fileUrl, 'utf-8');
  console.log(fileContent);
}

await readFileFn();

const writeThatFile = async () => {
  await writeFile('script.js', 'const x = 10;');
}

await writeThatFile();

const appendThatFile = async () => {
  await appendFile('script.js', 'const y = 11;');
}

await appendThatFile();