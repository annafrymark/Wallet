"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[626],{805:function(e,s,a){a.r(s),a.d(s,{default:function(){return J}});var r=a(2791),o=a(5607),n=a.p+"static/media/frame-woman.671535cdac54767bd803.png",l="RegistrationPage_Container__knK9T",t="RegistrationPage_LogoContainer__PUQv9",i="RegistrationPage_Image__JHe+G",c="RegistrationPage_Title__NwLYm",m="RegistrationPage_FormContainer__TVC7T",d=a(9439),u=a(5705),g=a(6727),p=a(9434),f=a(7689),h=a(1087),A=a(4281),w=a(7749),x=a(9332),_=a(3746),j=a(165),N="registrationForm_Container__ane9H",C="registrationForm_LogoContainer__x+R1l",y="registrationForm_Logo__MpsqS",v="registrationForm_Title__EXLDh",P="registrationForm_Form__AEfmO",F="registrationForm_Field__Qg2Cd",b="registrationForm_InputIcon__I2mjA",B="registrationForm_Input__ThI2I",Z="registrationForm_PasswordVisibilityToggle__uHnbZ",I="registrationForm_ButtonContainer__2wjgu",S="registrationForm_ButtonPrimary__KcGMA",R="registrationForm_ButtonSecondary__WcKHg",E=a(5709),T=a(761),U=a.n(T),k="PasswordStrengthBar_ProgressBar__+6ZoF",L="PasswordStrengthBar_Progress__0XDgv",Q=a(184),q=function(e){var s=e.password,a=U()(s),r=100*a.score/4,o=function(){switch(a.score){case 0:default:return"none";case 1:return"#FF6596";case 2:return"#FED057";case 3:return"#80d564";case 4:return"#24CCA7"}};return(0,Q.jsx)("div",{className:k,children:(0,Q.jsx)("div",{className:L,style:{width:"".concat(r,"%"),background:o(),height:"7px"}})})},X=g.Ry({email:g.Z_().email("Invalid e-mail.").required("E-mail is required.").matches(/^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,"Invalid email."),password:g.Z_().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,"Password must contain 6 - 12 characters: one uppercase, one lowercase, one number and one special character.").required("Password is required."),confirmPassword:g.Z_().oneOf([g.iH("password")],"Password must match.").required("Password confirmation is required."),name:g.Z_().min(1,"Your name must contain at leastr 1 character")}),Y=function(){var e=(0,p.I0)(),s=(0,f.s0)(),a=(0,r.useState)(""),o=(0,d.Z)(a,2),n=o[0],l=(o[1],(0,r.useState)(!1)),t=(0,d.Z)(l,2),i=t[0],c=t[1],m=(0,r.useState)(!1),g=(0,d.Z)(m,2),T=g[0],U=g[1],k=function(){c(!i),console.log("setshow")},L=function(){U(!T),console.log("setconfirm")};return(0,Q.jsx)(u.J9,{initialValues:{email:"",password:"",confirmPassword:"",name:""},validationSchema:X,validateOnBlur:!0,children:function(a){var r=a.values,o=a.handleBlur,l=(a.isValid,a.touched),t=(a.dirty,a.errors);return(0,Q.jsx)("div",{className:N,children:(0,Q.jsxs)(u.l0,{className:P,onSubmit:function(a){return function(a){a.preventDefault();var r=a.currentTarget,o=r.elements.email.value,n=r.elements.password.value,l=r.elements.confirmPassword.value,t=r.elements.name.value;e((0,E.z2)({email:o,password:n,confirmPassword:l,name:t})),console.log("cos cos cos"),console.log(o,n,l,t),s("/login"),r.reset()}(a)},children:[(0,Q.jsxs)("div",{className:C,children:[(0,Q.jsx)("img",{className:y,alt:"Logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK3SURBVHgB7ZbNjhJBEMerZoZN3BPezTLEfQBJXK8LN+Nl8aCR7GV5AuAJgCdwfYLdjTFr2MvsCRIvw1k34lkMo74AXgyRmSmrhw+BDDCfBBN+CdPTTXfPv7uqugshQg7vrqsEcIYEKld1U4aikSkYEAIFIuDhp3dngFIVWBj+a84qFlxwmYMQIIRgImy8Y+4Q5LpHBR0CEmgH54TR2u5l/umLjernCzUx3Et+fXLagagEehdGHf67jYSaqQymAg4/vs0SynlAPEELVJJ4zrvrS0saVIxMse82kycTi4kBlSq/Zpd06ROCxqLbljzQJh/jXUrK1h4Lko55UXluSrqOJrvePTqtgV+Ba4TpQpAoZ33MMZ1174SA8rB8QYt0uo8LGfAqcIkw112a9J+ablXArMCUB/fdzIwrhInOHQTUwLbas87s2XQ+IFnJf8u8uF1sV+bEgZRlf2CzSXXh3IsrEsIUU3kEJvdzZrW/8/MNRACa5i/XdvF4+qqniu/DNjAAo6WljUkVn738ySalGmwPxpCs5x9u0o5LSQhUhu1CTYBcmlQkisDBo4Zm3E2CLWcnMCw7gWGJJKN2h+r2H/ty9tANAh/UP9annD7hTKbSbKTO+YbKghXshkKEfrOR1iIXSAR68+YgF80NhbUYfJC+jAonywk7VzlygcI0oxdavKH6bCoDAPrgneTGopgTgFyzcZC2JSvjZ9zmBA6d3YPWe39RHeMxM8/+nlLiqL6S7cQxge153MYEioiWbLnmR5wgehMTppyCRiYNNRUHVfQCEfLZfC9JslVklZ2g04ixyJl1HCZO7ifk178HVkXXUr4i1o1YrroxBhHdTs9FH9gg91qNB1fiPc4gURGxBAFAsnUuHIG7fDAsO4Fh+Q8EEgY/TGNjnFOCs4NmcZynbQUiI6ehfT6p/wX16yUKCsdDQwAAAABJRU5ErkJggg=="}),(0,Q.jsx)("h1",{className:v,children:"Wallet"})]}),(0,Q.jsxs)("label",{className:F,children:[l.email&&t.email?(0,Q.jsx)("p",{style:{color:"#ff6596",position:"absolute",bottom:"-30px",left:"0",fontFamily:"Poppins",fontSize:"13px"},children:t.email}):null,(0,Q.jsx)(A.Z,{className:b,style:{color:"#e0e0e0"}}),(0,Q.jsx)(u.gN,{className:B,type:"text",name:"email",id:"email",placeholder:"E-mail",value:r.email,onBlur:o,autoComplete:"off"})]}),(0,Q.jsxs)("label",{className:F,children:[l.password&&t.password?(0,Q.jsx)("p",{style:{color:"#ff6596",position:"absolute",bottom:"-30px",left:"0",fontFamily:"Poppins",fontSize:"13px"},children:t.password}):null,(0,Q.jsx)(w.Z,{className:b,style:{color:"#e0e0e0"}}),(0,Q.jsx)(u.gN,{className:B,type:i?"text":"password",name:"password",placeholder:"Password",id:"password",value:r.password,onBlur:o,autoComplete:"new-password"}),(0,Q.jsx)("span",{onClick:k,className:Z,children:i?(0,Q.jsx)(j.Z,{style:{color:"#e0e0e0"}}):(0,Q.jsx)(_.Z,{style:{color:"#e0e0e0"}})})]}),(0,Q.jsxs)("label",{className:F,children:[l.confirmPassword&&t.confirmPassword?(0,Q.jsx)("p",{style:{color:"#ff6596",position:"absolute",bottom:"-30px",left:"0",fontFamily:"Poppins",fontSize:"13px"},children:t.confirmPassword}):null,(0,Q.jsx)(w.Z,{className:b,style:{color:"#e0e0e0"}}),(0,Q.jsx)(u.gN,{className:B,type:T?"text":"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm password",value:r.confirmPassword,onBlur:o,autoComplete:"new-password"}),(0,Q.jsx)("span",{onClick:L,className:Z,children:T?(0,Q.jsx)(j.Z,{style:{color:"#e0e0e0"}}):(0,Q.jsx)(_.Z,{style:{color:"#e0e0e0"}})}),(0,Q.jsx)(q,{password:n})]}),(0,Q.jsxs)("label",{className:F,children:[l.name&&t.name?(0,Q.jsx)("p",{style:{color:"#ff6596",position:"absolute",bottom:"-30px",left:"0",fontFamily:"Poppins",fontSize:"13px"},children:t.name}):null,(0,Q.jsx)(x.Z,{className:b,style:{color:"#e0e0e0"}}),(0,Q.jsx)(u.gN,{className:B,type:"text",name:"name",id:"name",placeholder:"First name",value:r.name,onBlur:o,autoComplete:"off"})]}),(0,Q.jsxs)("div",{className:I,children:[(0,Q.jsx)("button",{type:"submit",className:S,children:"Register"}),(0,Q.jsx)(h.rU,{to:"/login",children:(0,Q.jsx)("button",{type:"button",className:R,children:"Log in"})})]})]})})}})},J=function(){return(0,Q.jsxs)("div",{className:l,children:[(0,Q.jsx)(o.Z,{query:"(min-width: 767px)",render:function(){return(0,Q.jsxs)("div",{className:t,children:[(0,Q.jsx)("img",{className:i,src:n,alt:""}),(0,Q.jsx)("h1",{className:c,children:"Finance App"})]})}}),(0,Q.jsx)("div",{className:m,children:(0,Q.jsx)(Y,{})})]})}}}]);
//# sourceMappingURL=626.060a7780.chunk.js.map