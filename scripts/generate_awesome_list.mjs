import fs from 'fs';

const graphPath = 'src/data/graphData.ts';
const readmePath = 'README.md';

const readGraphData = () => {
  const content = fs.readFileSync(graphPath, 'utf8');
  const startIndex = content.indexOf('export const graphData');
  if (startIndex === -1) {
    throw new Error('graphData export not found');
  }
  const arrayStart = content.indexOf('[', startIndex);
  const arrayEnd = content.lastIndexOf('];');
  if (arrayStart === -1 || arrayEnd === -1) {
    throw new Error('graphData array bounds not found');
  }
  const arrayText = content.slice(arrayStart, arrayEnd + 1);
  return Function(`"use strict"; return ${arrayText}`)();
};

const sanitize = (text) => {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
};

const buildAwesomeList = (graphData) => {
  const lines = [];

  const seen = new Set();

  graphData.forEach((node) => {
    // Sort by rating (highest first), then filter duplicates
    const nodeItems = [...node.resources]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .filter((resource) => {
        const key = resource.url || resource.title;
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    if (nodeItems.length === 0) {
      return;
    }

    lines.push(`### ${node.title}`);
    lines.push(sanitize(node.description));
    lines.push('');

    nodeItems.forEach((resource) => {
      const desc = sanitize(resource.description);
      lines.push(`- [${resource.title}](${resource.url}) - ${desc}`);
    });

    lines.push('');
  });

  return lines.join('\n').trim();
};

const START = '<!-- AWESOME_LIST:START -->';
const END = '<!-- AWESOME_LIST:END -->';

const footer = [
  '',
  '---',
  '',
  '\u00a9 [muellerberndt](https://twitter.com/muellerberndt) \u00b7 [GitHub](https://github.com/muellerberndt)',
  ''
].join('\n');

// When the README carries the markers, only the block between them is
// regenerated and every hand-written line around it survives. Without them the
// whole file is written, which is what a fresh repository wants.
const updateReadme = (generated) => {
  const existing = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
  const start = existing.indexOf(START);
  const end = existing.indexOf(END);

  if (start !== -1 && end !== -1 && end > start) {
    const next = `${existing.slice(0, start + START.length)}\n\n${generated}\n\n${existing.slice(end)}`;
    fs.writeFileSync(readmePath, next);
    console.log('Awesome list written between the AWESOME_LIST markers in README.md');
    return;
  }

  fs.writeFileSync(readmePath, `${generated}${footer}`);
  console.log('Awesome list written to README.md');
};

const graphData = readGraphData();
const awesomeList = buildAwesomeList(graphData);
updateReadme(awesomeList);
