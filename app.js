var firstItem = document.getElementById("one");

// Get the content of the first list item
var itemContent = firstItem.innerHTML;
console.log(itemContent);

// Update the content of the first list item so it is a link 
firstItem.innerHTML = '<a href="http://example.org">' + itemContent + '</a>';