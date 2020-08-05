'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

// --- write some code ---

const lI1 = document.createElement ('li')
lI1.innerHTML='toad';
const lir = ulEl.children[0];
ulEl.replaceChild(lI1,lir);

const lI2 = document.createElement('li');
lI2.innerHTML = 'frog';
const rep = ulEl.children[1];
ulEl.replaceChild(lI2,rep);

const lI4 = ulEl.children[3];
ulEl.removeChild(lI4);





// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));

console.assert(ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3');

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI',
    `Test: child ${i} .nodeName`);

  const actualInnerHTML = ulEl.children[i].innerHTML;
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML`);
}
