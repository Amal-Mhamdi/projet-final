window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

/*                        contact                      */
  function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "الرجاء ادخال اسم متكون من 5 احرف فاكثر";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = " الرجاء ادخال موضوع متكون من 10 احرف و رموز فاكثر";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "الرجاء ادخال رقم هاتف متكون من 10 ارقام";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "الرجاء التثبت من الحساب الاكتروني";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "الرجاء ادخال رسالة متكونة من 10 احرف و رموز فاكثر";
      error_message.innerHTML = text;
      return false;
    }
    alert(" لقد تمت عمليةالارسال بنجاح شكرا لكم");
    return true;
  }

 /*                   program.html js              */
 if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-ticket-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function purchaseClicked() {
  alert('شكرا لك على اتمام الطلب')
  var cartItems = document.getElementsByClassName('cart-tickets')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}


function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-ticket-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-ticket-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-ticket-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-tickets')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-ticket-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('تمت إضافة هذا العنصر إلى سلة التسوق من قبل')
          return
      }
  }
  var cartRowContents = `
  <div class="cart-quantity cart-column">
      <button class="btn btn-danger" type="button">REMOVE</button>
      <input class="cart-quantity-input" type="number" value="1">
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-ticket cart-column">
      <span class="cart-ticket-title">${title}</span>
      <img class="cart-ticket-image" src="${imageSrc}" width="100" height="100">

  </div>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-tickets')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('د.ت', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = total + 'د.ت' 
}


const btns = document.getElementsByClassName('heart');
console.log(btns)
let index = 0;

const colors = ['red', 'white'];

for( let i=0; i<btns.length; i++){
  let heart = btns[i];
  heart.addEventListener('click', function() {
      heart.style.backgroundColor = colors[index];
      heart.style.color = 'black';
    
      index = index >= colors.length - 1 ? 0 : index + 1;
  });
}

/*  Initialize Swiper  */
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

