var controllers = {
  createElements: function(){
    console.log("Vamos renderizar os componentes");

    App.elements.app.innerHTML = "<style>*{box-sizing: border-box;} html, body {min-width: 500px;min-height:500px;margin: 0;padding: 0;}</style>";

    this.setStyle(App.elements.app, {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flex: "1 0",
      flexDirection: "column",
    });

    // -------------------- Header

    this.setStyle(App.elements.header, {
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "lightcoral",
      padding: "0 20px",
      alignItems: "center",
      minHeight: "50px",
      maxHeight: "50px",
    });
    App.elements.header.innerHTML = "Header";
    App.elements.app.appendChild(App.elements.header);
      
    // -------------------- Body
    this.setStyle(App.elements.body, {
      display: "flex",
      backgroundColor: "lightgrey",
      flex: "1 0",
      flexFlow: "column nowrap",
      alignItems: "center",
      padding: "60px 15px",
    });
    App.elements.body.innerHTML = "<h1 style='margin-top: 0;'>Ofertas do dia !!!</h1>"
    App.elements.app.appendChild(App.elements.body);

    // -------------------- Produtos renderizados no Body
    this.setStyle(App.elements.bodyProducts, {
      backgroundColor: "#888",
      display: "flex",
      flexFlow: "row wrap",
      flex: "1 0",
      border: "1px solid darkblue",
      borderRadius: "5px",
      maxWidth: "1580px",
      padding: "5px",
      justifyContent: "center",
    });
    App.elements.body.appendChild(App.elements.bodyProducts);

    // -------------------- Footer
    this.setStyle(App.elements.footer, {
      backgroundColor: "cyan",
      display: "flex",
      justifyContent: "flex-start",
      padding: "0 20px",
      alignItems: "center",
      minHeight: "50px",
      maxHeight: "50px",
    });
    App.elements.footer.innerHTML = "Footer";
    App.elements.app.appendChild(App.elements.footer);


    /* 
    this.setStyle(App.elements.x, {
      
    });
    App.elements.y.appendChild(App.elements.x); 
    */
    console.log("Componentes renderizados");
  },

  setStyle: function(el, obj){
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        el.style[key] = obj[key];
    };
  },

  renderImages: function(parent, images) {
    for (let i = 0; i < images.length; i++) {
      var imgURL = images[i];

      var el = document.createElement("img");
      el.src = imgURL;
      // el.classList.add("product-item-img");

      parent.appendChild(el);      
    }
  },

  renderAllProducts: function() {
    console.log("Vamos renderizar todos os produtos");
    var products = App.store.state.products;

    console.log(products.length);
    for (let i = 0; i < products.length; i++) {
      var product = products[i];
      
      var el = document.createElement("div");
      el.classList.add("product-item");

      var imgContainer = document.createElement("div");
      imgContainer.style.width = "300px";
      imgContainer.style.height = "300px";
      // imgContainer.style.border = "1px solid black";
      var carrossel = new Carrossel({el: imgContainer, images: product.images});
      el.appendChild(imgContainer);

      var title = document.createElement("div");
      title.innerHTML = product.title;
      el.appendChild(title);

      var price = document.createElement("div");
      price.innerHTML = `R$ ${product.title}`;
      el.appendChild(price);

      var count = document.createElement("div");
      count.innerHTML = `Qtd: ${product.count}`;
      el.appendChild(count);

      var buyBtn = document.createElement("button");
      buyBtn.innerHTML = "Comprar";
      buyBtn.id = product.id;
      buyBtn.onclick = App.events.buy;
      el.appendChild(buyBtn);

      console.log("el é ...", el);

      App.elements.products[product.id] = el;
      App.elements.bodyProducts.appendChild(el);
    }

    console.log("Produtos renderizados");
  },
};