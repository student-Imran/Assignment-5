#Assignment - 5

1 . What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
   -> getElementById : Select the item with this specific id . Ex : getElementById(copy-btn)  
   -> getEleentByClassName : Select multiple item with the class name and return HTML collection .   
   -> querySelector : Select the first element that mathche the specific selector.  
   -> querySelectorAll : Select all elements of that selection and return a NodeList.  
2 . How do you create and insert a new element into the DOM?  
   -> document.createElement()  
   -> appendChild()   
3 . What is Event Bubbling and how does it work?
   -> A mechanism  in the DOM tree where an event on a child element, when triggered, will "bubble up" and also trigger the same event on all of its parent elements.
4 . What is Event Delegation in JavaScript? Why is it useful?
   -> A pattern of handling events where I am attach a single event listener to a parent element instead of to each individual child
5 . What is the difference between preventDefault() and stopPropagation() methods?
   -> preventDefault() : stops the default browser action for an event.
   -> stopPropagation() : prevents the event from bubbling up to parent elements.
