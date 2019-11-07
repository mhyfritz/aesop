module.exports = { splitExt };

function splitExt(fileName) {
  const re = /(.*)(\..+)/;
  const [, root, ext] = re.exec(fileName);
  return [root, ext];
}
