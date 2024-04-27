async function handle(valueid){

    const categoryName = valueid;
    let categoryind = 0;

    switch(categoryName){

        case "Women":
            categoryind=1;
            break;
        
        case "Kids":
            categoryind=2;
            break;
        
        default:
            categoryind=0;
            break;
    }

    const res = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');

    if(!res.ok){
        throw new Error("Could not fetch products");
    }
    const data = await res.json();
    console.log(data.categories);
    console.log(data.categories[categoryind]);
    console.log(data.categories[categoryind].category_products[0].title+" "+data.categories[categoryind].category_products[0].price)
    const detailsele = document.getElementById('d');
   // detailsele.innerHTML = data.categories[categoryind];

    const container = document.getElementById("prodcontainer");

   categoryData = data.categories[categoryind].category_products;
    container.innerHTML = " ";

    categoryData.forEach(item => {
        // card container
        const card = document.createElement("div");
        card.classList.add("card");

        // CARD IMG
        const img = document.createElement("img");
        img.src = item.image; 
        img.alt = item.title; 
        card.appendChild(img);

        // Create card content container
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

    

        // badge element
        const badgediv = document.createElement("div");
        const badgeText = document.createElement("p");
        badgeText.classList.add("badge");
        badgeText.textContent = item.badge_text; 
        if(item.badge_text !== null){
            badgediv.appendChild(badgeText);

        }

        //title & vendor div
        const div1 = document.createElement("div");
        div1.classList.add("div-inner");
        // title element
        const title = document.createElement("h2");
        title.textContent = item.title;
        title.classList.add("item");
        div1.appendChild(title);

        // vendor element
        const vendor = document.createElement("ul");
        vendor.classList.add("item");
        const li = document.createElement("li");
        li.textContent = item.vendor;
        vendor.appendChild(li);
        div1.appendChild(vendor);

        cardContent.appendChild(div1);

        // price,old price,discount div
        const div2 = document.createElement("div");
        div2.classList.add("div-inner");
        // curr price element
        const price = document.createElement("p");
        price.classList.add("item");
        price.textContent = "Rs." +" "+ item.price;
        div2.appendChild(price);

        // old price element
        const oldprice = document.createElement("p");
        oldprice.classList.add("item");
        oldprice.textContent = item.compare_at_price;
        div2.appendChild(oldprice);

        // discount element
        const discount = document.createElement("p");
        let discountValue =  ((item.compare_at_price - item.price)/item.compare_at_price * 100);
        discount.classList.add("item");
        discount.textContent = discountValue.toFixed(0) +"% OFF";
        div2.appendChild(discount);

        cardContent.appendChild(div2);

        // add to cart btn element
        const btncontainer = document.createElement("div");
        btncontainer.classList.add("btn-container");
        const btn = document.createElement("button");
        btn.classList.add("item");
        btn.textContent = "Add to cart";
        // btn.addEventListener("click", () => {
        //     add
        // }
        btncontainer.appendChild(btn);

        

        // Append card content container to the card
        card.appendChild(badgediv);
        card.appendChild(cardContent);
        
        // Append card to the container

        const innerDivprod = document.createElement('div');
        innerDivprod.classList.add('prodcontainer-inner');       
        innerDivprod.appendChild(card);
        innerDivprod.appendChild(btncontainer);

        container.appendChild(innerDivprod);
    });


}