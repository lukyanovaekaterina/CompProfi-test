const gamburger__iconButton = document.querySelector(".gamburger__icon");
const navigation = document.querySelector(".header__menu");

 gamburger__iconButton.addEventListener("click", function() {
 navigation.classList.toggle("active");
 document.body.classList.toggle("overflow");
});

navigation.addEventListener("click", function(){
  navigation.classList.remove("active");
});