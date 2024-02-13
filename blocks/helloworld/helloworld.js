export default function decorate(block) {
    [...block.children].forEach((row) => {
        row.innerHTML = `<h1>${row.innerText}</h1>`;
        console.log('test');
    });
  
}