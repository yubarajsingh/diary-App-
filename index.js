/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm=document.getElementById('entryForm')

/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section we just created
*/
const entriesSection= document.querySelector('#entries')
const entryTextbox=document.querySelector('.entry-textbox')
const entriesNav=document.querySelector('.entries-nav')
/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/

/*
  Hide the user's entry by default after it is appended to the entries
  section
*/
entriesSection.hidden=true
let counter=1

entryForm.addEventListener('submit',function(event){
    event.preventDefault()
    const entryDiv=document.createElement('div');
    
    entryDiv.className='single-entry'
    entryDiv.innerText=entryTextbox.value
    
    entriesSection.appendChild(entryDiv)
    entryDiv.style.display = 'none';
    entryTextbox.value=""
   
    const displayEntryButton=document.createElement('button')
    displayEntryButton.className='displayEntry'
    displayEntryButton.innerText=counter
    displayEntryButton.value=counter;
    counter++
    entriesNav.appendChild(displayEntryButton)
    entriesSection.hidden=false
/*
      - Inside the displayEntryButton addEventListener function,
          create a new variable named 'allEntries'.
      - use the document.queryselectorAll method to select all
          elements with the class of 'single-entry' and make that the
          value of the new allEntries variable.
    */
    displayEntryButton.addEventListener('click', function(event) {
      const allEntries=document.querySelectorAll('.single-entry')
      
     console.log(allEntries[1])
     /*
            - Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.
        */

      for(let i=0;i<allEntries.length;i++){
        console.log(allEntries[i])
        if(i!==event.value)
        {allEntries[i].style.display='none'}
      }
     entryDiv.style.display = 'block';
  })
})

