import { readdirSync, writeFileSync } from 'fs';
import { extname, basename } from 'path';
import { format } from 'date-fns';

const directory = './images/drawings';
const fileList = readdirSync(directory);
const drawings = {};

console.log(fileList);

for (const item of fileList) {
  if (extname(item) !== '.py') {
    const fileName = basename(item, extname(item));
    const description = prompt(`Describe ${fileName}:\n`);
    drawings[fileName] = {
      desc: description,
      file: `images/drawings/${item}`,
      UploadDate: format(new Date(), 'yyyy-MM-dd'),
    };
  }
}

writeFileSync('data/drawings.json', JSON.stringify(drawings, null, 2));

console.log(drawings);

