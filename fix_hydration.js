const fs = require('fs');
const path = 'src/app/components/units/Unit1Content.jsx';
let content = fs.readFileSync(path, 'utf8');

// Pattern to match the problematic p tag containing BlockMath
// We use [\s\S]*? to match across newlines
const pattern = /<p>\s*Consider the sequence:\s*<br \/>\s*<BlockMath math="x\[n\] = \\{ 1, 2, 1, 2, 1, 2, \\dots \\}" \/>\s*<\/p>/;

const replacement = `<p>
          Consider the sequence:
        </p>
        <div className="py-2">
          <BlockMath math="x[n] = \\{ 1, 2, 1, 2, 1, 2, \\dots \\}" />
        </div>`;

if (pattern.test(content)) {
    content = content.replace(pattern, replacement);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Hydration error fixed successfully.');
} else {
    console.log('Pattern not found. Could not fix hydration error.');
    // Debug: print a snippet where we expect it
    const snippet = content.substring(content.indexOf('Consider the sequence'), content.indexOf('Consider the sequence') + 200);
    console.log('Snippet found in file:', snippet);
}
