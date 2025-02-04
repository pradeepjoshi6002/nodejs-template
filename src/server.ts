import fs from 'fs';

fs.writeFile('./src/try.js', 'console.log("this is trial file")', (err) => {
  if (err) {
    console.error(err?.message);
  }
});
