


function note(title, author){
    this.title = title; 
    this.author  = author;
}
 var myNote = new note("Pe", "Mo");

 console.log(myNote);


 function addPrice(amount){
    with(this){
       price = amount;
    }
 }
 
 function book(title, author){
    this.title = title;
    this.author  = author;
    this.price = 0;
    this.addPrice = addPrice; 
 }

 var myBook = new book("Perl", "Mohtashim");
 myBook.addPrice(100);

 console.log(myBook);