//your code here!


const infiList = document.getElementById('infi-list');

function checkScroll() {
  const totalHeight = infiList.scrollHeight;
  const currentPosition = infiList.scrollTop + infiList.clientHeight;

  console.log('Total Height:', totalHeight);
  console.log('Current Position:', currentPosition);

  if (totalHeight <= currentPosition + 5) {
    loadItems(2);
  }
}

let count = 1;

function loadItems(num){
  for(let i=0;i<num;i++){
    const item = document.createElement('li');
    item.textContent = `Item ${count++}`;
    infiList.appendChild(item);
  }
}

loadItems(10);

infiList.addEventListener('scroll', checkScroll);