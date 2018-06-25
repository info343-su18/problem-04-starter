const fs = require('fs');

//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

const jsPath = __dirname + '/js/index.js';

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    expect([jsPath]).toHaveNoEsLintErrors();
  })
});

describe('Drew a pretty picture', () => {
  test('that is included in the /img directory', () => {
    const path = __dirname + '/img/drawing.png'
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  })
})

//TODO: could send events to the fake canvas for testing