//Declare an empty array for Library
let myLibrary=[];

//Object constructor for book object
function Book(Title,Author,Pages,Read){
    this.Title=Title;
    this.Author=Author;
    this.Pages=Pages;
    this.Read=Read;
}

//Function for adding new book to Library
function addBooktoLibrary(Title,Author,Pages,Read){
    let book=new Book(Title,Author,Pages,Read);
    myLibrary.push(book);
}