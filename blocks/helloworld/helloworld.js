export default function decorate(block) {
    [...block.children].forEach((row) => {
        const image = row.getElementsByTagName('img')[0];
        row.innerHTML = `<div><img src = ${image.src}></img><br/><p>${row.innerText}</p></div>`;
        
    });
  
}