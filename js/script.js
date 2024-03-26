const quotesArray=['Nothing is impossible. The word itself says I\'m possible!','There is nothing impossible to they who will try.','Success is not final, failure is not fatal: it is the courage to continue that counts.']; 

const list = document.querySelector("#listul");
const inputBox = document.querySelector("#input-box");
const re_btn = document.querySelector("#reload-button") ;
const add_btn = document.querySelector("#add-button");
const completed = document.querySelector("#done");
const completedCounter =document.querySelector("#completed-counter");
const uncompletedCounter =document.querySelector("#uncompleted-counter");
const quotePlace= document.querySelector("#quoteDisplay");
const reload_btn= document.querySelector("#reload-button");
const addQuoteButton = document.querySelector("#addQuoteButton"); 
quoteInputSelector=document.querySelector("#quoteInput");
let indentComplete =0;
let indentUncomplete= 0;

add_btn.addEventListener('click', ()=> {
 const task = inputBox.value.trim(); 
  if (!task) { 
    alert("What is the task?");
      return;
  } 
    let currentDate = new Date(Date.now());
    let Hours = currentDate.getHours(); //Date Obj 
    let Minutes =currentDate.getMinutes()
    const newItem = document.createElement("li");
     newItem.innerHTML = capitalise(task) + ' ' + Hours+":"+Minutes;
  list.append(newItem);
    inputBox.focus();
     inputBox.value = '';
    indentUncomplete++;
    updateCounters();
})

addQuoteButton.addEventListener('click', ()=> {
  
  const newQuote = quoteInputSelector.value 
     if (!newQuote) { 
    alert("Enter the quote.");
      return;
  }
        quotesArray.push(newQuote); 
        quoteInputSelector.value = ''; 
})


list.addEventListener("click", (evt) => {
    if (evt.target.matches('li')) {
        const thisItem = evt.target;
        list.removeChild(thisItem);
        const newCompleted= document.createElement("li");
        newCompleted.innerHTML = thisItem.innerHTML;
        completed.append(newCompleted);
        completed.classList.add("itemdone");
    }   inputBox.focus();
     inputBox.value = '';
    indentUncomplete--;
    indentComplete++;
    quotes();
    updateCounters();
});

const  updateCounters = () => {
completedCounter.textContent = indentComplete;
  uncompletedCounter.textContent = indentUncomplete;
};

const quotes = () => {
    let randNum= Math.floor(Math.random() *(quotesArray.length));
    quoteDisplay.innerHTML='"'+quotesArray[randNum]+'"';
};

reload_btn.addEventListener('click', () => {
      completed.innerHTML = '';
    list.innerHTML = '';
    indentComplete =0;
    indentUncomplete= 0;
    updateCounters();
     quoteDisplay.innerHTML='';
     inputBox.value = '';
    inputBox.focus();
});

const capitalise = (task) => {
    const words = task.split(" ");
      const capitalizedWords = [];
    words.forEach(word => {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    });
    const capitalizedTask = capitalizedWords.join(" ");
    return capitalizedTask;
};

