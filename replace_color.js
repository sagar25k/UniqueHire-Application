const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.next' || file === '.git') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.match(/#0B5ED7/i)) {
                content = content.replace(/#0B5ED7/gi, '#043b73');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(__dirname);
console.log('Finished updating colors');
