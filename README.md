chooser
=======
## What is this? ##
This is a html page to help you choose things to buy from a store, or to see how many things you can buy for a certain amount of money.  
It was inspired by an internet meme image showing you could buy a nexus 4, nexus 7 and a chromebook for (roughly) the price of an iphone 5s.  I was in the process of teaching myself html/css/js and this seemed like a good project to cut my teeth on.  Rather than make a spreadsheet to easily add things together, I decided to make a nifty web page.
## How does it work? ##
Each line item has one or more options associated with it, and each option has a price.  The price for the item's current option is shown in the far right column.  Click on different options to see the price updated.  Click on an item to make it active and its price will be included in the total.  Activate several items and their prices will be totaled.  
Click the edit button to make edits to the item, including name, options, and option prices.  
v4: The page is generated using json data stored in a js file.  It was easier to figure out how to create a js object rather than read in json data without a web server.  
