import { readFile } from 'node:fs/promises';

const readFileFn = async () => {
  const fileUrl = new URL('../../package.json', import.meta.url);
  const fileContent = await readFile(fileUrl, 'utf-8');
  console.log(fileContent);
}

readFileFn();