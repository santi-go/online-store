webpackJsonp([1],{DiEy:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),a=r("vQJi"),o=r.n(a),n={name:"app",data:function(){return{cartItems:this.$store.state.cart}},created:function(){this.$store.subscribe(function(t){if(t.payload)switch(t.type){case"ERROR_MSG":o.a.error(t.payload.content,t.payload.title);break;case"ADD_PRODUCT_SUCCESS":o.a.success("Product created.","Success!");break;case"UPDATE_PRODUCT_SUCCESS":o.a.success("Product updated.","Success!");break;case"REMOVE_PRODUCT_SUCCESS":o.a.warning("Product deleted.","Deleted!")}})},computed:{cartItemsCount:function(){return this.cartItems.length},showLoader:function(){return this.$store.state.showLoader}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",[r("div",{staticClass:"container"},[r("ul",{staticClass:"nav__left"},[r("li",[r("router-link",{attrs:{to:"/"}},[r("i",{staticClass:"fa fa-home"}),t._v(" Home")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/admin"}},[r("i",{staticClass:"fa fa-user"}),t._v(" Admin")])],1)]),t._v(" "),r("ul",{staticClass:"nav__right"},[r("li",[r("router-link",{attrs:{to:"/cart"}},[r("i",{staticClass:"fa fa-shopping-cart"}),t._v(" Cart ("+t._s(t.cartItemsCount)+")")])],1)])])]),t._v(" "),r("router-view"),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoader,expression:"showLoader"}],staticClass:"overlay"},[t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-spinner"},[e("div",{staticClass:"dot dotOne"}),this._v(" "),e("div",{staticClass:"dot dotTwo"}),this._v(" "),e("div",{staticClass:"dot dotThree"})])}]};var c=r("VU/8")(n,i,!1,function(t){r("o6HO")},null,null).exports,u=r("/ocq"),d={props:["product"],data:function(){return{cart:this.$store.state.cart}},computed:{isAdding:function(){return this.cart.indexOf(this.product)<0}},methods:{addToCart:function(){this.$store.commit("ADD_TO_CART",this.product)},removeFromCart:function(t){this.$store.commit("REMOVE_FROM_CART",t)}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isAdding?r("button",{staticClass:"button",on:{click:t.addToCart}},[r("i",{staticClass:"fa fa-cart-plus"}),t._v(" Add to Cart")]):r("button",{staticClass:"button button-danger",on:{click:function(e){t.removeFromCart(t.product._id)}}},[r("i",{staticClass:"fa fa-trash"}),t._v(" Remove from Cart")])])},staticRenderFns:[]},m=r("VU/8")(d,l,!1,null,null,null).exports,p={name:"product-item",props:["product"],components:{"product-button":m}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},[r("div",{staticClass:"product"},[r("router-link",{staticClass:"product-link",attrs:{to:"/details/"+t.product._id}},[r("div",{staticClass:"product__image"},[r("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"product__description"},[r("div",{staticClass:"product__info"},[r("small",[t._v(t._s(t.product.manufacturer.name))]),t._v(" "),r("h4",[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"product__price-cart"},[t._v("\n          $"+t._s(t.product.price)+"\n        ")])])]),t._v(" "),r("div",{staticClass:"product__action"},[r("product-button",{attrs:{product:t.product}})],1)],1)])},staticRenderFns:[]};var _={name:"product-list",created:function(){0===this.products.length&&this.$store.dispatch("allProducts")},computed:{products:function(){return this.$store.getters.allProducts}},data:function(){return{}},components:{"product-item":r("VU/8")(p,v,!1,function(t){r("ssIe")},null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"products"},[e("div",{staticClass:"container"},[this._l(this.products,function(t){return[e("product-item",{attrs:{product:t}})]})],2)])])},staticRenderFns:[]};var h={name:"home",components:{"product-list":r("VU/8")(_,f,!1,function(t){r("DiEy")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("product-list")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[e("i",{staticClass:"fa fa-braille"}),this._v(" In Stock")])])}]},g=r("VU/8")(h,C,!1,null,null,null).exports,P={props:["product"],components:{"product-button":m}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image"},[r("img",{staticClass:"img-responsive",attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info"},[r("div",{staticClass:"product-details__description"},[r("small",[t._v(t._s(t.product.manufacturer&&t.product.manufacturer.name))]),t._v(" "),r("h3",[t._v(t._s(t.product.name))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.product.description)+"\n          ")])]),t._v(" "),r("div",{staticClass:"product-details__price-cart"},[r("p",[t._v("$"+t._s(t.product.price))]),t._v(" "),r("product-button",{attrs:{product:t.product}})],1)])])])])},staticRenderFns:[]};var R=r("VU/8")(P,w,!1,function(t){r("ckyD")},null,null).exports,U={data:function(){return{cart:this.$store.state.cart}},components:{productDetails:R}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return this.cart.length>0?e("div",[this._m(0),this._v(" "),this._l(this.cart,function(t){return[e("product-details",{key:t.id,attrs:{product:t}})]})],2):e("div",{staticClass:"title"},[this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[e("i",{staticClass:"fa fa-superpowers"}),this._v(" Your Cart")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("i",{staticClass:"fa fa-superpowers"}),this._v(" Your Cart is Empty")])}]},D=r("VU/8")(U,E,!1,null,null,null).exports,S={created:function(){this.product.name||this.$store.dispatch("productById",this.$route.params.id)},computed:{product:function(){return this.$store.getters.productById(this.$route.params.id)}},data:function(){return{}},components:{"product-details":R}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("product-details",{attrs:{product:this.product,isAdding:!0}})],1)},staticRenderFns:[]},x=r("VU/8")(S,$,!1,null,null,null).exports,O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"admin-new"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 col-xs-12"},[e("ul",{staticClass:"admin-menu"},[e("li",[e("router-link",{attrs:{to:"/admin"}},[this._v("View Products")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/admin/new"}},[this._v("New Product")])],1)])]),this._v(" "),e("router-view")],1)])])},staticRenderFns:[]};var A=r("VU/8")(null,O,!1,function(t){r("tgkS")},null,null).exports,T={props:["model","manufacturers","isEditing"],created:function(){},methods:{saveProduct:function(){var t=this;console.log(this.fields.valid()),this.$validator.validateAll().then(function(){t.$emit("save-product",t.model)}).catch(function(){t.$store.commit("ERROR_MSG",{type:"error",title:"Validation!",content:"Please ensure the form is valid."})})}}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.saveProduct(e)}}},[r("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 col-xs-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,error:t.errors.has("name")},attrs:{type:"text",placeholder:"Name",name:"name"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"small text-danger"},[t._v("Name is required")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Price")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.price,expression:"model.price"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"form-control":!0,error:t.errors.has("price")},attrs:{type:"number",placeholder:"Price",name:"price"},domProps:{value:t.model.price},on:{input:function(e){e.target.composing||t.$set(t.model,"price",e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("price"),expression:"errors.has('price')"}],staticClass:"small text-danger"},[t._v("Price is required")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Manufacturer")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.model.manufacturer,expression:"model.manufacturer"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"form-control":!0,error:t.errors.has("manufacturer")},attrs:{type:"text",name:"manufacturer"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"manufacturer",e.target.multiple?r:r[0])}}},[t._l(t.manufacturers,function(e){return[r("option",{domProps:{value:e._id,selected:e._id==(t.model.manufacturer&&t.model.manufacturer._id)}},[t._v(t._s(e.name))])]})],2),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("manufacturer"),expression:"errors.has('manufacturer')"}],staticClass:"small text-danger"},[t._v("Manufacturer is required")])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Image")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.image,expression:"model.image"},{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],class:{"form-control":!0,error:t.errors.has("image")},attrs:{type:"text",lass:"form-control",placeholder:"Image",name:"image"},domProps:{value:t.model.image},on:{input:function(e){e.target.composing||t.$set(t.model,"image",e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("image"),expression:"errors.has('image')"}],staticClass:"small text-danger"},[t._v("Image is required and must be a valid URL")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Description")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.description,expression:"model.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"form-control":!0,error:t.errors.has("description")},attrs:{type:"number",placeholder:"Description",rows:"5",name:"description"},domProps:{value:t.model.description},on:{input:function(e){e.target.composing||t.$set(t.model,"description",e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("description"),expression:"errors.has('description')"}],staticClass:"small text-danger"},[t._v("Description is required")])]),t._v(" "),r("div",{staticClass:"form-group new-button"},[r("button",{staticClass:"button"},[r("i",{staticClass:"fa fa-pencil"}),t._v(" "),t.isEditing?r("span",[t._v("Update Product")]):r("span",[t._v("Add Product")])])])])])},staticRenderFns:[]},L=r("VU/8")(T,b,!1,null,null,null).exports,M={data:function(){return{model:{}}},created:function(){this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers}},methods:{addProduct:function(t){console.log("model",t),this.$store.dispatch("addProduct",t)}},components:{"product-form":L}},N={render:function(){var t=this.$createElement;return(this._self._c||t)("product-form",{attrs:{model:this.model,manufacturers:this.manufacturers},on:{"save-product":this.addProduct}})},staticRenderFns:[]},y=r("VU/8")(M,N,!1,null,null,null).exports,I={data:function(){return{}},computed:{products:function(){return this.$store.getters.allProducts}},created:function(){0===this.products.length&&this.$store.dispatch("allProducts")},methods:{deleteProduct:function(t){console.log(t),this.$store.dispatch("removeProduct",t)}}},V={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-9 col-md-9 col-sm-12 col-xs-12"},[r("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),r("tbody",t._l(t.products,function(e){return r("tr",[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v("$"+t._s(e.price))]),t._v(" "),r("td",[t._v(t._s(e.manufacturer.name))]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/admin/edit/"+e._id}},[r("i",{staticClass:"fa fa-pencil-square-o"})])],1),t._v(" "),r("td",[r("a",{on:{click:function(r){t.deleteProduct(e._id)}}},[r("i",{staticClass:"fa fa-trash"})])])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Price")]),this._v(" "),e("th",[this._v("Manufacturer")]),this._v(" "),e("th"),this._v(" "),e("th")])])}]},k=r("VU/8")(I,V,!1,null,null,null).exports,F=r("woOf"),q=r.n(F),B={created:function(){this.model.name||(console.log("dispatched"),this.$store.dispatch("productById",this.$route.params.id)),0===this.manufacturers.length&&this.$store.dispatch("allManufacturers")},data:function(){return console.log(this.$store.getters.allManufacturers),{}},computed:{manufacturers:function(){return this.$store.getters.allManufacturers},model:function(){var t=this.$store.getters.productById(this.$route.params.id);return q()({},t)}},methods:{updateProduct:function(t){console.log("model",t),this.$store.dispatch("updateProduct",t)}},components:{"product-form":L}},Y={render:function(){var t=this.$createElement;return(this._self._c||t)("product-form",{attrs:{model:this.model,manufacturers:this.manufacturers,isEditing:!0},on:{"save-product":this.updateProduct}})},staticRenderFns:[]},H=r("VU/8")(B,Y,!1,null,null,null).exports;s.a.use(u.a);var j,G,J,W=new u.a({routes:[{path:"/",name:"Home",component:g},{path:"/cart",name:"Cart",component:D},{path:"/details/:id",name:"Details",component:x},{path:"/admin",name:"Admin",component:A,children:[{path:"new",name:"New",component:y},{path:"",name:"Products",component:k},{path:"edit/:id",name:"Edit",component:H}]}]}),Q=r("NYxO"),z=r("bOdI"),K=r.n(z),X=r("Dd8w"),Z=r.n(X),tt=(j={},K()(j,"ALL_PRODUCTS",function(t){t.showLoader=!0}),K()(j,"ALL_PRODUCTS_SUCCESS",function(t,e){t.showLoader=!1,t.products=e}),K()(j,"PRODUCT_BY_ID",function(t){t.showLoader=!0}),K()(j,"PRODUCT_BY_ID_SUCCESS",function(t,e){t.showLoader=!1,t.product=e}),K()(j,"ADD_PRODUCT",function(t,e){t.showLoader=!0}),K()(j,"ADD_PRODUCT_SUCCESS",function(t,e){t.showLoader=!1,t.products.push(e)}),K()(j,"UPDATE_PRODUCT",function(t,e){t.showLoader=!0}),K()(j,"UPDATE_PRODUCT_SUCCESS",function(t,e){t.showLoader=!1,t.products=t.products.map(function(r){return r._id===e._id?e=Z()({},e,{manufacturer:t.manufacturers.filter(function(t){return t._id===e.manufacturer})[0]}):r})}),K()(j,"REMOVE_PRODUCT",function(t,e){t.showLoader=!0}),K()(j,"REMOVE_PRODUCT_SUCCESS",function(t,e){t.showLoader=!1;var r=t.products.findIndex(function(t){return t._id===e});console.debug("index",r),t.products.splice(r,1)}),K()(j,"ERROR_MSG",function(t,e){}),j),et=(G={},K()(G,"ADD_TO_CART",function(t,e){return t.cart.push(e)}),K()(G,"REMOVE_FROM_CART",function(t,e){var r=t.cart.findIndex(function(t){return t._id===e});t.cart.splice(r,1),console.log(t.cart,t.cart.length,r)}),G),rt=(J={},K()(J,"ALL_MANUFACTURER",function(t){t.showLoader=!0}),K()(J,"ALL_MANUFACTURER_SUCCESS",function(t,e){t.showLoader=!1,t.manufacturers=e}),J),st=r("mtWM"),at=r.n(st),ot="https://api.myjson.com/bins/mu4jw",nt={allProducts:function(t){var e=t.commit;e("ALL_PRODUCTS"),at.a.get(""+ot).then(function(t){e("ALL_PRODUCTS_SUCCESS",t.data)})},productById:function(t,e){var r=t.commit;r("PRODUCT_BY_ID"),at.a.get(ot+"/products/"+e).then(function(t){console.log(e,t.data),r("PRODUCT_BY_ID_SUCCESS",t.data)})},addProduct:function(t,e){var r=t.commit;r("ADD_PRODUCT"),at.a.post(ot+"/products",e).then(function(t){r("ADD_PRODUCT_SUCCESS",t.data)})},updateProduct:function(t,e){var r=t.commit;r("UPDATE_PRODUCT"),at.a.put(ot+"/products/"+e._id,e).then(function(t){r("UPDATE_PRODUCT_SUCCESS",t.data)})},removeProduct:function(t,e){var r=t.commit;r("REMOVE_PRODUCT"),at.a.delete(ot+"/products/"+e,e).then(function(t){console.debug("response",t.data),r("REMOVE_PRODUCT_SUCCESS",t.data)})}},it={allManufacturers:function(t){var e=t.commit;e("ALL_MANUFACTURER"),at.a.get(ot+"/manufacturers").then(function(t){e("ALL_MANUFACTURER_SUCCESS",t.data)})}};s.a.use(Q.a);var ct=new Q.a.Store({strict:!0,state:{cart:[],showLoader:!1,product:{},products:[],manufacturers:[]},mutations:q()({},tt,et,rt),getters:q()({},{allProducts:function(t,e){return t.products},productById:function(t,e){return function(r){return e.allProducts.length>0?e.allProducts.filter(function(t){return t._id===r})[0]:t.product}},allManufacturers:function(t){return t.manufacturers}},{allManufacturers:function(t){return t.manufacturers}}),actions:q()({},nt,it)}),ut=r("sUu7");s.a.use(ut.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:W,store:ct,components:{App:c},template:"<App/>"})},ckyD:function(t,e){},o6HO:function(t,e){},ssIe:function(t,e){},tgkS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e1ebb9c630c73de67828.js.map