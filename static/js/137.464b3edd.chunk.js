"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[137,833],{8137:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var a=t(9434),r=t(2791),s=function(e){return e.contacts},c=function(e){return e.filter},o=t(8842),i=t(4833),l="contactList_list__dc8nh",u="contactList_item__lRrWE",d="contactList_contact__U7KYN",m="contactList_btn__UaAt8",_=t(184),h=function(){var e=(0,a.v9)(s),n=e.items,t=e.isLoading,h=(0,a.v9)(c),f=(0,a.I0)();(0,r.useEffect)((function(){f((0,o.CL)())}),[f]);var v=function(){if(!h)return n;var e=h.toLowerCase();return n.filter((function(n){var t=n.name,a=n.number;return t.toLowerCase().includes(e)||a.toLowerCase().includes(e)}))}().map((function(e){var n=e.name,t=e.number,a=e.id;return(0,_.jsxs)("li",{className:u,children:[(0,_.jsxs)("p",{className:d,children:[n," .....tel. ",t]}),(0,_.jsx)("button",{className:m,onClick:function(){return function(e){f((0,o.in)(e))}(a)},children:"Delete"})]},a)}));return(0,_.jsxs)("ol",{className:l,children:[t&&(0,_.jsx)(i.default,{}),v]})},f=h;h.defaultProps={items:[]};var v=t(6895),p="contactFilter_formGroup__v2CBO",b="contactFilter_inputStyle__4j52A",x=function(){var e=(0,a.v9)(c),n=(0,a.I0)();return(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("h4",{children:"Find"}),(0,_.jsx)("input",{className:b,name:"filter",value:e,onChange:function(e){var t=e.target;return n((0,v.T)(t.value))},placeholder:"tel"})]})},j="contactForm_form__cVkIe",N="contactForm_formGroup__QxBll",C="contactForm_inputName__3vzOF",k="contactForm_inputNumber__roZ1A",g=function(){var e={name:"",number:""},n=(0,a.I0)();(0,r.useEffect)((function(){n((0,o.CL)())}),[n]);var t=function(n){var t=n.target.name;e[t]=n.target.value,console.log(t)};return(0,_.jsxs)("form",{className:j,onSubmit:function(t){t.preventDefault(),function(e){var t=e.name,a=e.number,r=(0,o.v6)({name:t,number:a});n(r)}(e),function(e){e.target.elements.name.value="",e.target.elements.number.value=""}(t)},children:[(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("label",{children:"Name"}),(0,_.jsx)("input",{className:C,name:"name",onChange:t,placeholder:"Name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("label",{children:"Number"}),(0,_.jsx)("input",{className:k,name:"number",onChange:t,placeholder:"tel.number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{type:"submit",children:"Add contact"})]})},w="my-books_wrapper__4bzIR",L="my-books_block__HddE2",A="my-books_titleContacts__u1whv",y=function(){return(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{children:"Phonebook_kk"}),(0,_.jsxs)("div",{className:w,children:[(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)("h4",{children:"Add new contact"}),(0,_.jsx)(g,{})]}),(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)("h4",{className:A,children:"Contacts:"}),(0,_.jsx)(x,{}),(0,_.jsx)(f,{})]})]})]})}},4833:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var a=t(4691),r="loader_ContainerLoader__wH0MG",s=t(184),c=function(){return(0,s.jsx)("div",{className:r,children:(0,s.jsx)(a.s5,{strokeColor:"#803fb5",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})}}}]);
//# sourceMappingURL=137.464b3edd.chunk.js.map