/**
 * @fileoverview feature sliced relative path checker
 * @author onnkek
 */
"use strict";
const path = require('path');
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "feature sliced relative path checker",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {}, // Add messageId and message
  },

  create(context) {
    
    return {
      
      ImportDeclaration(node) {
        // all/entities/Article
        const importTo = node.source.value;
        // C:/Users/onnkek/Desktop/web/prodgun/src/entities/Article
        const fromFileName = context.getFilename();

        if (shouldBeRelative(fromFileName, importTo)) {
          context.report(node, 'Within the module, paths must be relative.');
        }

      }
    };
  },
};

const layers = {
  'entities': 'entities',
  'features': 'features',
  'pages': 'pages',
  'shared': 'shared',
  'widgets': 'widgets'
}

function isPathRelative(path) {
  return path === '.' || path.startsWith('./') || path.startsWith('../');
}

function shouldBeRelative(from, to) {
  if (isPathRelative(to)) {
    return false;
  }

  const toArray = replaceBackSlashesWithForward(to).split('/');
  const toLayer = toArray[0];
  const toSlice = toArray[1];
  
  if (!toLayer || !toSlice || !layers[toLayer]) {
    return false;
  }

  const projectFrom = replaceBackSlashesWithForward(from).split('src')[1];
  const fromArray = projectFrom.split('/');
  const fromLayer = fromArray[1];
  const fromSlice = fromArray[2];
  if (!fromLayer || !fromSlice || !layers[fromLayer]) {
    return false;
  }


  return toSlice === fromSlice && toLayer === fromLayer;

}
function replaceBackSlashesWithForward(path) {
  if (!path) {
    return "";
  }
  return path.replace(/\\/g, "/");
}



