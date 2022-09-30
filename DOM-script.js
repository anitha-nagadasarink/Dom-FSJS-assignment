// Om Ganapathi Siddhi Buddhi
// Omahskthi amma Shivappa
// Vishnu Lakhsmi
// Brahama Saraswathi
// Dakshinamurthy Haygriva
// Sri Venakteshwara Sri Vidya Vijaya Gnana Dhyrya Aurogya Samayaspoorthi Ananda Lakshmi devi

//1. 
document.querySelector(".side-bar .crayons-subtitle-2").innerHTML = "iNeuron";
document.querySelector(".side-bar .crayons-card p").innerHTML = "I Write Code";

// 2. 
let product = document.querySelectorAll(".as-imagegrid-item .as-imagegrid-item-title");
let pro = [];
product.forEach(function(ele){     
    pro.push((ele.innerText).split('\n')[0]);   
});

// 3. Google Accordion
let accordionParent = document.querySelector(".accordion-homepage");

let newFaq = document.createElement("section");
newFaq.setAttribute("class", "parent");
// FAQ heading
let faqHeading = document.createElement("h3");
faqHeading.setAttribute("role", "button");
faqHeading.setAttribute("tabindex", "0");
faqHeading.setAttribute("aria-expanded", "false");
faqHeading.setAttribute("aria-label", "My New FAQ");

let faqTextNode = document.createTextNode("My New FAQ");

faqHeading.append(faqTextNode);
newFaq.appendChild(faqHeading);
accordionParent.appendChild(newFaq);

// 4. One Pluse 
document.querySelector(".service-number").innerHTML = "+91 6366256689";

//5. Samsung - 
document.querySelector(".diwali-deals-product-sale-pro-outer a.diwali-deals-product-sale-btn").innerHTML = "Checkout";

//6. Adidas
let searchBar = document.querySelector(".searchinput___zXLAR");
searchBar.addEventListener("mouseover", function(){
  searchBar.style.backgroundColor = "red";  
});

// 8. 
let langArr = document.querySelectorAll("#SIvCob a");
langArr[langArr.length-1].remove();
langArr[langArr.length-2].remove();

// 9. Codewars
let codeWarsHeading = document.querySelector(".display-heading-1");
codeWarsHeading.style.fontFamily= "monospace"; 
codeWarsHeading.style.color= "#b1361e"; 


// 10. Free code camp
let signupBtn = document.querySelector(".signup-btn .login-btn-text");
signupBtn.addEventListener("mouseover", function(){
  signupBtn.style.backgroundColor = "red !important";
});

// 11.  Realme
document.querySelector(".icon-logo").style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";

// 12. Github
let gitBtn = document.querySelector(".btn-sm.btn-primary");
gitBtn.style.backgroundColor = "blue";

// 13. Hackerrank
document.querySelector(".fl-heading-text").innerHTML = "JSBOOTCAMP";

// 14 Asus
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

// 15. Dell
let prodDetail = document.querySelector(".add-pipe-after + span");
prodDetail.style.display = "block";
prodDetail.style.textAlign = "right";

//16. Vercel
document.querySelector(".section-title_title__VEDfK").innerHTML = "Start with Scratch";

// 17. Sony
let currDate = new Date();
let sonyBtn = document.querySelector(".buy-button");
sonyBtn.style.backgroundColor = "transparent";
sonyBtn.style.color = "#2f353d";
sonyBtn.innerText = currDate;

// 18. Philips
let philipsFooter = document.querySelector(".p-f03-footer-container");
philipsFooter.style.background = "#ffa500";

// 19. Canon
let canonLogo = document.querySelector(".logo");
console.log(canonLogo.getAttribute("src"));

//20. Oppo
let oppoText = document.querySelector(".index__three-products-1 .product-card-content .desc");
oppoText.style.color = "#ffa500";
