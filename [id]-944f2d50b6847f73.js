(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{3362:(t,c,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return r(1657)}])},1657:(t,c,r)=>{"use strict";r.r(c),r.d(c,{default:()=>m});var d=r(4848),o=r(6715),e=r(6540),a=r(2404),s=r(9546),i=r(2031),n=r(8870),u=r.n(n);let l=t=>{let{isOpen:c,onClose:r,product:o}=t;return c?(0,d.jsx)("div",{className:u().modalOverlay,children:(0,d.jsxs)("div",{className:u().modalContent,children:[(0,d.jsx)("button",{className:u().closeButton,onClick:r,children:"\xd7"}),(0,d.jsx)("div",{className:u().productImage,children:(0,d.jsx)("img",{src:o.image,alt:o.name})}),(0,d.jsx)("h2",{className:u().productName,children:o.name}),(0,d.jsx)("p",{className:u().productDescription,children:o.description}),(0,d.jsxs)("p",{className:u().productPrice,children:["$",o.price.toFixed(2)]}),(0,d.jsx)("button",{className:u().addToCartButton,onClick:()=>{},children:"Add to Cart"})]})}):null};var _=r(7983),p=r.n(_);let m=()=>{let{id:t}=(0,o.useRouter)().query,[c,r]=(0,e.useState)(null),[n,u]=(0,e.useState)(!0),[_,m]=(0,e.useState)(!1);return((0,e.useEffect)(()=>{t&&fetch("/api/products/".concat(t)).then(t=>t.json()).then(t=>{r(t),u(!1)}).catch(t=>{console.error("Error fetching product:",t),u(!1)})},[t]),n)?(0,d.jsx)("div",{children:"Loading..."}):c?(0,d.jsxs)("div",{className:p().container,children:[(0,d.jsx)(a.A,{}),(0,d.jsx)(i.A,{}),(0,d.jsxs)("div",{className:p().productDetail,children:[(0,d.jsx)("div",{className:p().imageContainer,onClick:()=>{m(!0)},children:(0,d.jsx)("img",{src:c.image,alt:c.name,className:p().productImage})}),(0,d.jsx)("h1",{children:c.name}),(0,d.jsx)("p",{children:c.description}),(0,d.jsxs)("p",{children:["Price: $",c.price]}),(0,d.jsx)("button",{onClick:()=>{},children:"Add to Cart"})]}),(0,d.jsx)(s.A,{}),_&&(0,d.jsx)(l,{product:c,onClose:()=>{m(!1)}})]}):(0,d.jsx)("div",{children:"Product not found"})}},7983:t=>{t.exports={container:"Product_container__B4IDl",productImage:"Product_productImage__8kvUI",productDetails:"Product_productDetails__7mQlR",productTitle:"Product_productTitle__CQ5NY",productDescription:"Product_productDescription__lGMJv",productPrice:"Product_productPrice__eq9xE",addToCartButton:"Product_addToCartButton__6JUMK",productGrid:"Product_productGrid__Tsijt",productCard:"Product_productCard___eYh0",cartLink:"Product_cartLink___uJjE"}},8870:t=>{t.exports={modal:"ProductModal_modal__mNp1k","modal-content":"ProductModal_modal-content__xBqDx",close:"ProductModal_close__TTpP2","product-image":"ProductModal_product-image__nhI4Q","product-details":"ProductModal_product-details__Atk8n","product-title":"ProductModal_product-title__e_ex1","product-description":"ProductModal_product-description__sPMEn","product-price":"ProductModal_product-price__QG6Ik"}},6715:(t,c,r)=>{t.exports=r(8440)}},t=>{var c=c=>t(t.s=c);t.O(0,[636,593,792],()=>c(3362)),_N_E=t.O()}]);