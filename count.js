const fs = require('fs');

let data = JSON.parse(fs.readFileSync('compilation-stats.json').toString());


let modules = data.children[0].modules;

let importLists = modules
                      .map(({name, reasons}) => {
                        let importers =
                            reasons.map(({moduleName}) => moduleName);
                        return ({name, importers, count: importers.length});
                      })
                      .sort((a, b) => b.count - a.count)
                      .filter(({name}) => name.indexOf('/node_modules/') == -1)
                      .map(({name, count}) => `${count}: ${name}`);

console.log(importLists)
