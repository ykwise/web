// book data
const books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 10.99 },
    { id: 2, title: "Book 2", author: "Author 2", price: 12.99 },
    { id: 3, title: "Book 3", author: "Author 3", price: 9.99 },
    { id: 4, title: "Book 4", author: "Author 4", price: 14.99 },
    { id: 5, title: "Book 5", author: "Author 5", price: 11.99 }
  ];
  
  // cart data
  let cart = [];
  
  // display book list
  function displayBookList() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
      const bookListItem = document.createElement("li");
      bookListItem.innerHTML = `${book.title} by ${book.author} - $${book.price}`;
      bookListItem.addEventListener("click", () => {
        displayBookDetails(book);
      });
      bookList.appendChild(bookListItem);
    });
  }
  
  // display book details
  function displayBookDetails(book) {
    const bookDetails = document.getElementById("book-details");
    bookDetails.style.display = "block";
    document.getElementById("book-description").innerHTML = `Title: ${book.title}<br>Author: ${book.author}`;
    document.getElementById("book-price").innerHTML = `Price: $${book.price}`;
    document.getElementById("add-to-cart").addEventListener("click", () => {
      addToCart(book);
    });
  }
  
  // add to cart
  function addToCart(book) {
    cart.push(book);
    displayCart();
  }
  
  // display cart
  function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach(book => {
      const cartListItem = document.createElement("li");
      cartListItem.innerHTML = `${book.title} - $${book.price}`;
      cartList.appendChild(cartListItem);
    });
    document.getElementById("checkout").addEventListener("click", () => {
      checkout();
    });
  }
  
  // checkout
  function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    displayCart();
  }
  
  // login/register
  function loginRegister() {
    const loginRegister = document.getElementById("login-register");
    loginRegister.style.display = "block";
    document.getElementById("login").addEventListener("click", () => {
      login();
    });
    document.getElementById("register").addEventListener("click", () => {
      register();
    });
  }
  
  // login
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  }
  
  // register
  function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert(`Thank you for registering, ${username}!`);
  }
  
  // event listeners
  document.addEventListener("DOMContentLoaded", () => {
    displayBookList();
    document.getElementById("browse-books").addEventListener("click", () => {
      displayBookList();
    });
    document.getElementById("cart").addEventListener("click", () => {
      displayCart();
    });
    document.getElementById("login-register").addEventListener("click", () => {
      loginRegister();
    });
  });