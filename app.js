function head(title) {
  document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="root">
        <div class="head">
            <a href="index.html" class="logo"><img src="image/amazon-logo.png" alt="Image Not Found"></a>
            <input type="search" placeholder="Search products" size=70 id="search" class="search-bar">
            <button class="search" Onclick="product();"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="login">Login</button>
            <button class="login">Register</button>
            <button class="cart"><i class="fa-solid fa-cart-shopping"></i>cart</button>
        </div>
    `);
}
function nav(arr) {
  document.write(`<div class="nav">`);
  for (i in arr) {
    document.write(`<a href="#">${arr[i]}</a>`);
  }
  document.write(`</div>`);
}
function mid() {
  document.write(`
    <div class="aside">
    <p class="aside-user"><i class="fa-solid fa-circle-user"></i>&nbsp;&nbsp;Hello, sign in</p>
    `);
  let heading = {
    Trending: "Best Sellers;New Releases;Movers And Shakers",
    Digital:
      "Echo & Alexa,Fire TV;Kindle E-Readers & eBooks;Audible Audiobooks;Amazon Prime Video;Amazon Prime Music",
    Shop: "Mobiles, Computers;TV, Appliances, Electronics;Men's Fashion;Women's Fashion;Home, Kitchen, Pets;Beauty, Health, Grocery;Sports Fitness, Bags, Luggage;Toys, Baby Products, Kid's Fashion;Car, Motorbike, Industrial;Books;Movies, Music & Video Games",
    Programs:
      "Gift Cards & Mobile Recharges;Amazon Launchpad;Flight Tickets;Clearance Store",
    Help: "Your Account;Customer Service;Sign in",
  };
  for (key in heading) {
    document.write(`<p class="heading">${key}</p>`);
    let inner = Array(`${heading[key]}`.split(";"));
    for (j in inner[0]) {
      document.write(`<p class="sub-heading">${inner[0][j]}</p>`);
    }
    document.write(`<hr>`);
  }
  document.write(`</div>`);
  document.write(`
    <div class="article" id="article">
        <div class="homePost">`);
  let postName = [
    "Clothing",
    "Footwear",
    "Watches",
    "Bags & luggage",
    "Bedsheets",
    "Home Decoration",
    "Home Storage",
    "Lighting Solutions",
    "Air Conditioners",
    "Refrigerators",
    "Microwaves",
    "Washing Machines",
    "Cleaning Accessories",
    "Tyre & Rim Care",
    "Helmets",
    "Vacuum cleaner",
    "Women's Clothing",
    "Footwear, Handbags",
    "Watches",
    "Fashion jewellery",
    "Smartwatches",
    "Tablets",
    "Laptops",
    "Monitors",
  ];
  let postHeading = [
    "Up to 60% off | Styles for men",
    "Revamp your home in style",
    "Appliances for your home | Up to 55% off",
    "Automotive essentials | Up to 60% off",
    "Up to 60% off | Styles for women",
    "Electronics devices for home office",
  ];
  let img = [
    "image/homeimg3.jpg",
    "image/homeimg4.jpg",
    "image/homeimg5.jpg",
    "image/homeimg6.jpg",
    "image/homeimg7.jpg",
    "image/homeimg8.jpg",
    "image/homeimg9.jpg",
    "image/homeimg10.jpg",
    "image/homeimg11.jpg",
    "image/homeimg12.jpg",
    "image/homeimg13.jpg",
    "image/homeimg14.jpg",
    "image/homeimg15.jpg",
    "image/homeimg16.jpg",
    "image/homeimg17.jpg",
    "image/homeimg18.jpg",
    "image/homeimg19.jpg",
    "image/homeimg20.jpg",
    "image/homeimg21.jpg",
    "image/homeimg22.jpg",
    "image/homeimg23.jpg",
    "image/homeimg24.jpg",
    "image/homeimg25.jpg",
    "image/homeimg26.jpg",
  ];
  var start = 0;
  var end = 0;
  var postCount = 0;
  for (i in postHeading) {
    document.write(`
        <div class="salePost">
            <h1>${postHeading[i]}</h1>
        `);
    start += 4;
    while (start != end) {
      document.write(`
            <p><img src="${img[end]}" alt="Image Not Found">
            ${postName[postCount]}</p>
            `);
      postCount++;
      end++;
    }
    document.write(`
        <a href="#">See all Offers</a>
        </div>
        `);
  }
  var start = 0;
  var end = 0;
  let strechPostHeading = [
    "Up to 60% off | Get your kitchen what it needs",
    "Up to 60% off | Car & bike accessories & more",
  ];
  let strechPostImage = [
    "image/strechimg1.jpg",
    "image/strechimg2.jpg",
    "image/strechimg3.jpg",
    "image/strechimg4.jpg",
    "image/strechimg5.jpg",
    "image/strechimg6.jpg",
    "image/strechimg7.jpg",
    "image/strechimg8.jpg",
  ];
  for (i in strechPostHeading) {
    document.write(`
        <div class="strechSalePost">
            <h1>${strechPostHeading[i]}</h1>
            <a href="#">See all Offers</a>
            <br>
        `);
    start += 4;
    while (start != end) {
      document.write(`
            <img src="${strechPostImage[end]}" alt="Image Not Found">
            `);
      end++;
    }
    document.write(`</div>`);
  }
  document.write(`
        </div>
    </div>
    `);
}
function footer(footValue) {
  document.write(`
    <div class="footer">
        ${footValue}
    </div>
    </div>
    </body>
    </html>
    `);
}
function product() {
  document.getElementById("article").style.padding = "1%";
  let optn = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Avg. Customer Review",
    "Newest Arrivals",
  ];
  document.getElementById("article").innerHTML = "";
  document.getElementById("article").innerHTML += `
    Results
    <select id="select"></select>`;
  for (i in optn) {
    document.getElementById("select").innerHTML += `
        <option>${optn[i]}</option>
        `;
  }
  document.getElementById("article").innerHTML += `<br><br><hr>`;
  val = document.getElementById("search").value;
  switch (val) {
    case "mobile":
      let mobname = [
        "Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage) | 50MP Triple Cam | 6000mAh Battery | 5nm Octa-Core Processor | 12GB RAM with RAM Plus | Android 13 | Without Charger",
        "Redmi 12C (Mint Green, 4GB RAM, 12GB Storage) | High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery",
        "Samsung Galaxy M04 Dark Blue, 4GB, 128GB Storage | Upto 8GB RAM with RAM Plus | Mediatek Helio P35 Octa-Core Processor | 5000mAh Battery | 13MP Dual Camera",
        "Samsung Galaxy M04 Dark Blue, 4GB, 64GB Storage | Upto 8GB RAM with RAM Plus | Mediatek Helio P35 Octa-Core Processor | 5000mAh Battery | 13MP Dual Camera",
        "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
      ];
      let mobprice = ["14,490", "8,499", "9,499", "8,499", "17,999"];
      let mobimg = [
        "image/mobimg1.jpg",
        "image/mobimg2.jpg",
        "image/mobimg3.jpg",
        "image/mobimg4.jpg",
        "image/mobimg5.jpg",
      ];
      for (i in mobimg) {
        document.getElementById("article").innerHTML += `
                <div class="post">
                <img src="${mobimg[i]}">
                <p class="name">${mobname[i]}</p>
                <p class="price">&#8377;&nbsp;${mobprice[i]}</p>
                </div>
                `;
      }
      break;
    case "laptop":
      let lapname = [
        'Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) A515-57G (15.6" FHD Display, 1.8 Kg) - Flat 10% cashback on Amazon Pay ICICI Credit Card',
        `Dell G15 5520 Gaming Laptop, Intel i5-12500H,16GB DDR5,512GB SSD,NVIDIA RTX 3050 (4GB GDDR6),15.6"(39.62cm) FHD WVA AG 120Hz 250 nits, Backlit KB Orange, Win 11 + MSO'21,Dark Shadow Grey,2.81kg`,
        'ASUS Vivobook 15, Intel Core i7-12650H 12th Gen, 15.6" (39.62 cm) FHD, Thin and Light Laptop (16GB/512GB/Win11/Office 2021/Blue/1.7 kg), X1502ZA-EJ741WS',
        "HP Pavilion Aero AMD Ryzen 7 7735U 13.3 inch(33.8cm) WUXGA IPS Micro-Edge Laptop(16GB RAM/1TB SSD/AMD Radeon Graphics/Win 11/MSO/Backlit Keyboard/B&O/FPR/Alexa/Silver/970 Grams 13-be2048AU",
        'Lenovo IdeaPad Slim 3 Intel Core i7 11th Gen 15.6" (39.62cm) FHD Laptop (16GB/512GB SSD/Win 11/Office 2021/1 Year Warranty/Arctic Grey/1.65Kg), 82H803LNIN',
      ];
      let lapprice = ["54,990", "72,990", "59,990", "78,990", "56,990"];
      let lapimg = [
        "image/lapimg1.jpg",
        "image/lapimg2.jpg",
        "image/lapimg3.jpg",
        "image/lapimg4.jpg",
        "image/lapimg5.jpg",
      ];
      for (i in lapimg) {
        document.getElementById("article").innerHTML += `
                <div class="post">
                <img src="${lapimg[i]}">
                <p class="name">${lapname[i]}</p>
                <p class="price">&#8377;&nbsp;${lapprice[i]}</p>
                </div>
                `;
      }
      break;
  }
}
