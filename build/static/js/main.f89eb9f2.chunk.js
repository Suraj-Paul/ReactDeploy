(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{31:function(e,t,a){e.exports=a(67)},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),s=a(13),o=a(1),i=a(3),m=a(4),u=a(6),d=a(5),p=a(12),h=a.n(p),E=(a(53),a(54),function(e){return l.a.createElement("div",null,function(e){var t=e.restdata;if(t)return t.map((function(e){return l.a.createElement("div",{className:"restaurantlist__container"},l.a.createElement("div",{className:"restaurantlist__details"},l.a.createElement("img",{className:"restaurantlist__image",src:e.thumb}),l.a.createElement("div",{className:"restaurantlist__name"},l.a.createElement(s.b,{to:"/rest/".concat(e._id)},l.a.createElement("h2",null,e.name)),l.a.createElement("h4",null,e.locality))),l.a.createElement("hr",null),l.a.createElement("div",{className:"restaurantlist__price"},l.a.createElement("p",null,"Mealtype : ",e.type[0].name,",",e.type[1].name),l.a.createElement("p",null,"CUISINES : ",e.Cuisine[0].name,",",e.Cuisine[1].name),l.a.createElement("p",null,"COST FOR TWO:\u20b9",e.cost)))}))}(e))}),v=(a(60),"http://localhost:8900/restaurantlist"),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).costFilter=function(t){var a,n=parseInt(e.props.mealIdNumber),l=t.target.value.split(","),r=parseInt(e.props.citiIdNo),c=Number(l[0]),s=Number(l[1]);a=""==t.target.value?"".concat(v,"/").concat(r,"/").concat(n):"".concat(v,"/").concat(r,"/").concat(n,"?hcost=").concat(s,"&lcost=").concat(c),h.a.get(a).then((function(t){e.props.restpercost(t.data)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"option__cost",onChange:this.costFilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"range"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"0,500",name:"range"}),"0-500"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"501,1000",name:"range"}),"500-1000")))}}]),a}(n.Component),b=(a(61),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).cuisineFilter=function(t){var a,n=parseInt(e.props.mealIdNumber),l=parseInt(e.props.citiIdNo),r=Number(t.target.value);a=""==r?"".concat("http://localhost:8900/restaurantlist","/").concat(l,"/").concat(n):"".concat("http://localhost:8900/restaurantlist","/").concat(l,"/").concat(n,"?cuisine=").concat(r),h.a.get(a).then((function(t){e.props.restpercuisine(t.data)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"options__cuisines",onChange:this.cuisineFilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cuisine"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"cuisine"}),"North"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"2",name:"cuisine"}),"South"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3",name:"cuisine"}),"Chinese"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"4",name:"cuisine"}),"Fast Food"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"5",name:"cuisine"}),"Street Food"),l.a.createElement("br",null)))}}]),a}(n.Component)),g=(a(62),function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(s.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:"https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1604/sergeypykhonin160400034/55349020-restaurant-diner-vector-logo-dish-meal-food-or-chef-icon.jpg",alt:"Logo"})),l.a.createElement("h1",null,"Edumato")),l.a.createElement("div",{className:"header__right"},l.a.createElement("button",{className:"login"},"login"),l.a.createElement("button",{className:"Create__account"},"Create Account")))}),N=(a(63),function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"footer"},l.a.createElement("div",{class:"footComponent1"},l.a.createElement("div",{className:"footer__aboutus"},l.a.createElement("h5",null,"About us")),l.a.createElement("div",{className:"footer__contact"},l.a.createElement("h5",null,"Contact")),l.a.createElement("div",{className:"footer__feedback"},l.a.createElement("h5",null,"feedback"),l.a.createElement("p",null,"Hey please give some feed back redgarding the product"))),l.a.createElement("div",{class:"footComponent2"},l.a.createElement("div",{className:"footer2"},l.a.createElement("p",null,"Privacy"),l.a.createElement("p",null,"Terms & conditions"),l.a.createElement("p",null,"Security")),l.a.createElement("h4",{style:{color:"antiquewhite",fontSize:"18px"}}," \xa9 2020 Copyright :",l.a.createElement("span",{class:"developer"},"Eduamto")))))}),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={citiId:parseInt(sessionStorage.getItem("citiId"))?parseInt(sessionStorage.getItem("citiId")):1,restlist:[]},n}return Object(m.a)(a,[{key:"setDataPerCuisine",value:function(e){this.setState({restlist:e})}},{key:"setDataPerCost",value:function(e){this.setState({restlist:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("body",null,l.a.createElement(g,null),l.a.createElement("h1",{className:"heading"},"Mealtype places in City"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"mealtype col-lg-2"},l.a.createElement("center",{class:"titles"},l.a.createElement("h3",null,"Cuisines"),l.a.createElement("hr",null)),l.a.createElement(b,{mealIdNumber:this.props.match.params.id,citiIdNo:this.state.citiId,restpercuisine:function(t){e.setDataPerCuisine(t)}}),l.a.createElement("center",{className:"titles"},l.a.createElement("h3",null,"Cost for two"),l.a.createElement("hr",null)),l.a.createElement(f,{restpercost:function(t){e.setDataPerCost(t)},mealIdNumber:this.props.match.params.id,citiIdNo:this.state.citiId}),l.a.createElement("center",{className:"titles"},l.a.createElement("h3",null,"Sort"),l.a.createElement("hr",null)),l.a.createElement("input",{type:"radio",name:"sort",value:""}),l.a.createElement("span",{class:"text"},"Price High to Low "),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"sort",value:""}),l.a.createElement("span",{class:"text"},"Price Low to High"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-lg-8"},l.a.createElement(E,{restdata:this.state.restlist})))),l.a.createElement(N,null))}},{key:"componentDidMount",value:function(){var e=this;sessionStorage.setItem("mealid",this.props.match.params.id);var t=parseInt(this.props.match.params.id);h.a.get("".concat("http://localhost:8900/restaurantlist","/").concat(this.state.citiId,"/").concat(t)).then((function(t){e.setState({restlist:t.data})}))}}]),a}(n.Component),C=(a(64),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCity=function(e){n.setState({restaurents:""}),n.setState({city:e.target.value});var t=parseInt(e.target.value);sessionStorage.setItem("citiId",e.target.value),fetch("".concat("http://localhost:8900/restauranthome?city=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restaurents:e})}))},n.renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e.city},e.name)}))},n.renderRest=function(e){if(e)return e.map((function(e){return l.a.createElement("option",null,e.name," | ",e.locality)}))},n.state={locaton:"",city:"",restaurants:""},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"imgcontainer"},l.a.createElement("div",{class:"logo"}),l.a.createElement("div",{class:"HeadComp"},l.a.createElement("h2",null,"Find the best Restaurants,Caf\xe9s & Bars")),l.a.createElement("div",{class:"locationselector"},l.a.createElement("select",{class:"dropdown",onChange:this.handleCity},l.a.createElement("option",{value:""},"Select Location"),this.renderCity(this.state.location)),l.a.createElement("input",{class:"restaurantsinput",type:"text",list:"city",placeholder:"Search for Restaurants...",onChange:this.handleRestaurent}),l.a.createElement("i",{class:" fa fa-search"}),l.a.createElement("datalist",{id:"city"},this.renderRest(this.state.restaurents)))))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8900/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),a}(n.Component)),_=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"quickSearchContainer"},l.a.createElement("p",{className:"quickSearchHeading"},"Quick Searches"),l.a.createElement("p",{className:"quickSearchSubHeding"},"Discover restaurants by type of meal"),function(e){var t=e.mealData;if(t)return t.map((function(e){return l.a.createElement(s.b,{to:"/filter/".concat(e.mealtype)},l.a.createElement("div",{class:"titleContainer"},l.a.createElement("div",{class:"titleComponent1"},l.a.createElement("img",{src:e.image})),l.a.createElement("div",{class:"titleComponent2"},l.a.createElement("div",{class:"componentHeading"},e.name),l.a.createElement("div",{class:"componentSubHeading"},l.a.createElement(l.a.Fragment,null,"Start your day with exclusive ",e.name," options")))))}))}(e)))},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={mealtype:"",name:""},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_,{mealData:this.state.mealtype}))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8900/mealtype",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({mealtype:t})}))}}]),a}(n.Component),S=function(e){return l.a.createElement("div",null,l.a.createElement("body",null,l.a.createElement(C,{restid:function(t){!function(t){e.history.push("/rest/".concat(t))}(t)}}),l.a.createElement(O,null),l.a.createElement(N,null)))},j=(a(65),a(15)),k=(a(66),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).backbutton=function(e){var t=parseInt(sessionStorage.getItem("mealid"));n.props.history.push("/filter/".concat(t))},n.state={rest:""},n}return Object(m.a)(a,[{key:"render",value:function(){console.log(">>>>",this.state.rest);var e=this.state.rest;return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h2",null,e.name)),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("img",{className:"details__image",src:e.thumb,alt:e.name}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(j.d,null,l.a.createElement(j.b,null,l.a.createElement(j.a,null,l.a.createElement("span",{className:"overview"},"Overview")),l.a.createElement(j.a,null,l.a.createElement("span",{className:"overview"},"Contact"))),l.a.createElement(j.c,null,l.a.createElement("div",null,l.a.createElement("div",{className:"about"},"About this Place"),l.a.createElement("div",{className:"cuisine"},"Cuisine"),l.a.createElement("div",{className:"bakery"},"FastFood"),l.a.createElement("br",null),l.a.createElement("div",{className:"cost"},"Average Cost"),l.a.createElement("div",{className:"bakery"},"\u20b9",e.cost," for two people(approx)."))),l.a.createElement(j.c,null,l.a.createElement("div",null,l.a.createElement("div",{className:"phone-number"},"Phone Number"),l.a.createElement("div",{className:"pdigit"},"45456556"),l.a.createElement("br",null),l.a.createElement("div",{className:"address__header"},"Address"),e.address)))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{class:"btn btn-danger btn-lg",onClick:this.backbutton},"Back"),"\xa0",l.a.createElement(s.b,{to:"/placeOrder/".concat(this.props.match.params.id),class:"btn btn-success btn-lg"},"Place Order"))))),l.a.createElement(N,null))}},{key:"componentDidMount",value:function(){var e=this,t=parseInt(this.props.match.params.id);h.a.get("".concat("http://localhost:8900/restaurantdetails","/").concat(t)).then((function(t){e.setState({rest:t.data[0]})}))}}]),a}(n.Component)),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChangeName=function(e){n.setState({name:e.target.value})},n.handleChangePhone=function(e){n.setState({phone:e.target.value})},n.handleChangeEmail=function(e){n.setState({email:e.target.value})},n.handleChangeAddress=function(e){n.setState({address:e.target.value})},n.handleChangePerson=function(e){n.setState({person:e.target.value})},n.handleSubmit=function(){var e={order_id:n.state.order_id,name:n.state.name,phone:n.state.phone,email:n.state.email,address:n.state.address,rest_id:n.state.rest_id,person:n.state.person};fetch("http://localhost:8900/placeOrder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(n.props.history.push("/orderlist"))},n.handleCancel=function(){n.props.history.push("/")},n.state={order_id:Math.floor(1e4*Math.random()),name:"",phone:"",email:"",address:"",rest_id:n.props.match.params.id,person:1},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-success"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,"Place Order")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"Order_Id:"),l.a.createElement("input",{type:"text",name:"order_id",value:this.state.order_id,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"Rest_Id:"),l.a.createElement("input",{type:"text",name:"rest_id",value:this.state.rest_id,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,className:"form-control",required:!0,onChange:this.handleChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"Phone:"),l.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChangePhone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"Email:"),l.a.createElement("input",{type:"text",name:"email",value:this.state.email,className:"form-control",onChange:this.handleChangeEmail})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"address:"),l.a.createElement("input",{type:"text",name:"address",value:this.state.address,className:"form-control",onChange:this.handleChangeAddress})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label"},"How many Person:"),l.a.createElement("select",{name:"person",value:this.state.person,className:"form-control",onChange:this.handleChangePerson},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-success",onClick:this.handleSubmit},"Place Order"),"\xa0\xa0\xa0",l.a.createElement("button",{className:"btn btn-danger",onClick:this.handleCancel},"Cancel")))))}}]),a}(n.Component),w=function(e){console.log(e);return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h3",null,"Order List")),l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"order_id"),l.a.createElement("th",null,"rest_id"),l.a.createElement("th",null,"name"),l.a.createElement("th",null,"phone"),l.a.createElement("th",null,"email"),l.a.createElement("th",null,"address"),l.a.createElement("th",null,"person"))),l.a.createElement("tbody",null,function(e){var t=e.orderdata;if(t)return t.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.rest_id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.address),l.a.createElement("td",null,e.person))}))}(e))))},P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={orders:""},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement(w,{orderdata:this.state.orders}))))}},{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat("http://localhost:8900/orderlist")).then((function(t){e.setState({orders:t.data})}))}}]),a}(n.Component),x=function(){return l.a.createElement(s.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:S}),l.a.createElement(o.a,{path:"/filter/:id",component:y}),l.a.createElement(o.a,{path:"/rest/:id",component:k}),l.a.createElement(o.a,{path:"/placeOrder/:id",component:I}),l.a.createElement(o.a,{path:"/orderlist",component:P})))};c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f89eb9f2.chunk.js.map