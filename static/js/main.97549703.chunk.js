(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(19),i=a.n(c),r=(a(31),a(14)),d=a(5),o=a(10),l=(a(32),a(13)),j=a.n(l),m=a(20),h=a.p+"static/media/Hot.9b1f5e7a.mp4",u=a.p+"static/media/BW.dbd358a0.mp4",b=a.p+"static/media/Cold.9543c939.mp4",O=a(4),p=function(){var e=Object(s.useState)({loaded:!1}),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)({loaded1:!1}),i=Object(o.a)(c,2),r=i[0],d=i[1],l=Object(s.useState)({loaded2:!1}),p=Object(o.a)(l,2),x=p[0],f=p[1],C=Object(s.useState)({loaded3:!1}),g=Object(o.a)(C,2),v=g[0],y=g[1],_=Object(s.useState)({loaded4:!1}),N=Object(o.a)(_,2),w=N[0],k=N[1],D=Object(s.useState)({loaded5:!1}),M=Object(o.a)(D,2),I=M[0],F=M[1];return Object(s.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){""===t.coords.latitude&&""===t.coords.longitude?n({loaded:!1}):(n({loaded:!0}),""!==t.coords.latitude&&""!==t.coords.longitude&&(fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(t.coords.latitude,"&longitude=").concat(t.coords.longitude,"&localityLanguage=en")).then(function(){var e=Object(m.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw new Error(e)})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&units=metric&appid=e9f96ca8486c3c3db229029a16c48211")).then((function(e){if(e.ok)return e.json()})).then((function(t){e(t),a(t),s(t)})).catch((function(e){throw new Error(e)}))))}));var e=function(e){if(e){var a=e.current,s=a.dt,n=a.feels_like,c=a.humidity,i=a.sunrise,r=a.sunset,o=a.temp,l=a.wind_speed,j=a.visibility,m=a.pressure,h=a.uvi,u=new Date(1e3*s),b=u.toLocaleString("default",{month:"short"}),O=u.toLocaleString("default",{weekday:"long"}),p=u.getDate(),x=new Date(1e3*i),f="".concat(x.getHours(),":").concat(x.getMinutes()),C=new Date(1e3*r),g="".concat(C.getHours()>12?C.getHours()-12:C.getHours(),":").concat(C.getMinutes());l=Math.round(3.6*l),j=Math.round(j/1e3),h<3?h="low":h>=3&&h<6?h="Moderate":h>=6&&h<8?h="High":h>=8&&h<11?h="Very high":h>=11&&(h="Extreme");var v={CurrentDate:{month:b,weekday:O,today:p},SunriseTime:f,SunsetTime:g},y={feels_like:n,temp:o}}if(void 0!==v)var _=!0;d({Dateobj:v,Tempobj:y,humidity:c,loaded1:_,wind_speed:l,visibility:j,pressure:m,uvi:h}),t({Dateobj:v,Tempobj:y,humidity:c,loaded1:_,wind_speed:l,visibility:j,pressure:m,uvi:h})},t=function(e){var t={Video:"",Classname:"",MainClassname1:"",HourlyClassname1:"",videoOpacity:"",icon:"",headerClassname1:"",headerClassname2:"",DispatchColor:{forImg:"",forClass:""}};e.loaded1&&(e.Tempobj.temp>=30?(t.Video=h,t.Classname="Hot",t.MainClassname1="IF__Content add1Class1",t.HourlyClassname1="Inner__Hourly addClassInHourly1",t.videoOpacity="backgroundCOLOR opacityChange1",t.icon=O.j,t.headerClassname1="header add1header1",t.headerClassname2="header add1header1 headeradded1",t.DispatchColor.forClass="City__Name hotColor",t.DispatchColor.forImg="iconColor iconColor1"):e.Tempobj.temp>=25&&e.Tempobj.temp<30?(t.Video=u,t.Classname="Bw",t.MainClassname1="IF__Content",t.HourlyClassname1="Inner__Hourly",t.videoOpacity="backgroundCOLOR opacityChange2",t.icon=O.i,t.headerClassname1="header",t.headerClassname2="header headeradded1",t.DispatchColor.forClass="City__Name",t.DispatchColor.forImg="iconColor"):e.Tempobj.temp<25&&(t.Video=b,t.Classname="Cold",t.MainClassname1="IF__Content add1Class2",t.HourlyClassname1="Inner__Hourly addClassInHourly2",t.videoOpacity="backgroundCOLOR opacityChange3",t.icon=O.k,t.headerClassname="header",t.headerClassname1="header add2header2",t.headerClassname2="header add2header2 headeradded2",t.DispatchColor.forClass="City__Name coldColor",t.DispatchColor.forImg="iconColor iconColor2"),f({loaded2:!0,Values:t}))},a=function(e){for(var t=e.hourly,a=Number.MAX_VALUE,s=Number.MIN_VALUE,n=0;n<t.length;n++)t[n].temp>s&&(s=t[n].temp),t[n].temp<a&&(a=t[n].temp);y({loaded3:!0,Hourly:t,mine:a,maxe:s})},s=function(e){var t=e.daily;k({loaded4:!0,Daily:t})},c=function(e){F({loaded5:!0,locality:e.locality})}}),[]),{userProvidedLoc:a,sortedData1:r,sortedData2:x,sortedData3:v,sortedData4:w,sortedData5:I}},x=(a(34),a(6)),f=a(0),C=function(e){for(var t=e.ArrayData,a=[],s=0;s<t.length-24;s++){var n=new Date(1e3*t[s].dt).getHours(),c={hours:n,temp:Math.round(t[s].temp),main:"",desc:t[s].weather[0].description};"R"===t[s].weather[0].main[0]?c.main=n>=19||n<=6?"NC"+t[s].weather[0].main[0]:"MC"+t[s].weather[0].main[0]:"C"===t[s].weather[0].main[0]?c.main=n>=19||n<=6?"N"+t[s].weather[0].main[0]:"M"+t[s].weather[0].main[0]:c.main=t[s].weather[0].main[0],"MCR"===c.main?c.main=O.h:"MC"===c.main?c.main=O.g:"NCR"===c.main?c.main=O.e:"NC"===c.main?c.main=O.d:c.main=O.n,a.push(c)}return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"Hourly__Main",children:a.map((function(t,a){return Object(f.jsxs)("div",{className:e.sendClass,children:[Object(f.jsxs)("div",{className:"Hourly__Hours",children:[t.hours," : 00"]}),Object(f.jsx)(x.a,{icon:t.main,className:"img"}),Object(f.jsx)("div",{className:"Hourly__Temp",children:t.temp})]},a)}))})})},g=(a(41),function(e){for(var t=e.ArrayData,a=[],s=0;s<t.length;s++){var n=new Date(1e3*t[s].dt);if("R"===t[s].weather[0].main[0]){var c={Month:n.toLocaleString("default",{month:"short"}),Date:n.getDate(),Image:O.c,Desc:t[s].weather[0].description,Tmax:Math.round(t[s].temp.max),Tmin:Math.round(t[s].temp.min)};a.push(c)}else{var i={Month:n.toLocaleString("default",{month:"short"}),Date:n.getDate(),Image:O.f,Desc:t[s].weather[0].description,Tmax:Math.round(t[s].temp.max),Tmin:Math.round(t[s].temp.min)};a.push(i)}}return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{}),Object(f.jsx)("tbody",{children:a.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.Month}),Object(f.jsx)("td",{children:e.Date}),Object(f.jsx)("td",{children:Object(f.jsx)(x.a,{icon:e.Image,className:"img"})}),Object(f.jsx)("td",{children:e.Desc}),Object(f.jsxs)("td",{children:[e.Tmax,"/",e.Tmin,Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]})]},t)}))})]})})}),v=(a(42),function(e){var t=e.ArrayData;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"Girdding__Content",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Math.round(t.Tempobj.feels_like),Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]}),Object(f.jsx)("span",{children:"Feels Like"})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[t.visibility," km"]}),Object(f.jsx)("span",{children:"Visibility"})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[t.pressure," hPa"]}),Object(f.jsx)("span",{children:"Air Pressure"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:t.uvi}),Object(f.jsx)("span",{children:"UV"})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[t.humidity," %"]}),Object(f.jsx)("span",{children:"Humidity"})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[t.wind_speed,"km/h"]}),Object(f.jsx)("span",{children:"Wind Speed"})]})]})})}),y=a(12),_=a(16),N=Object(_.b)({name:"user",initialState:{name:"",color:""},reducers:{setUserLoginDetails:function(e,t){e.name=t.payload.name,e.color=t.payload.color}}}),w=N.actions.setUserLoginDetails,k=function(e){return e.user.name},D=function(e){return e.user.color},M=N.reducer,I=function(){var e=Object(y.b)(),t=Object(d.f)(),a=Object(s.useRef)(null),n=Object(s.useState)(!1),c=Object(o.a)(n,2),i=c[0],r=c[1],l=Object(s.useState)(!1),j=Object(o.a)(l,2),m=j[0],h=j[1],u=p(),b=u.userProvidedLoc,_=u.sortedData1,N=u.sortedData2,k=u.sortedData3,D=u.sortedData4,M=u.sortedData5;if(b.loaded&&_.loaded1&&N.loaded2&&k.loaded3&&D.loaded4&&M.loaded5){window.addEventListener("scroll",(function(){window.scrollY>=200?r(!0):r(!1)}))}var I=function(a){var s=document.getElementById("InputName").value.trim();""===s||(s.match(/^[A-Za-z]+$/)?(e(w({name:s,color:N.Values.DispatchColor})),localStorage.setItem("cityName",s),localStorage.setItem("Img",N.Values.DispatchColor.forImg),localStorage.setItem("Class",N.Values.DispatchColor.forClass),t.push("/city")):alert("enter valid city name"))};return Object(f.jsx)("div",{className:"Main",children:b.loaded&&_.loaded1&&N.loaded2&&k.loaded3&&D.loaded4&&M.loaded5?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"travel1"}),m?Object(f.jsx)("div",{className:"menu",children:Object(f.jsxs)("div",{className:"menu__box",children:[Object(f.jsx)(x.a,{icon:O.o,className:"img2",onClick:function(){h(!1)}}),Object(f.jsx)("div",{className:"menu__center",children:Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"feedback",onClick:function(){t.push("/feedback")},children:"@feedback"})})})]})}):Object(f.jsx)(f.Fragment,{}),Object(f.jsxs)("div",{className:i?N.Values.headerClassname2:N.Values.headerClassname1,children:[Object(f.jsx)(x.a,{icon:N.Values.icon,className:"img",onClick:function(){window.location.reload()}}),Object(f.jsxs)("div",{className:"input__icon",children:[Object(f.jsx)("input",{type:"text",placeholder:"\uf002  City",ref:a,onKeyUp:function(e){13===e.keyCode&&I()},id:"InputName"}),Object(f.jsx)(x.a,{icon:O.m,className:"img",onClick:I})]}),Object(f.jsx)(x.a,{icon:O.a,className:"img1",onClick:function(){h(!0)}})]}),Object(f.jsx)("div",{className:i?N.Values.videoOpacity:"backgroundCOLOR"}),Object(f.jsx)("div",{className:"Fetched__Main",children:Object(f.jsx)("video",{className:N.Values.Classname,autoPlay:!0,muted:!0,loop:!0,id:"VideoChange",children:Object(f.jsx)("source",{src:N.Values.Video,type:"video/mp4"})})}),Object(f.jsx)("div",{className:"Fetched__Content",children:Object(f.jsxs)("div",{className:N.Values.MainClassname1,children:[Object(f.jsxs)("div",{className:"Current__Temp",children:[Math.round(_.Tempobj.temp),Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]}),Object(f.jsxs)("div",{className:"High__Low",children:[Math.round(k.maxe),Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]}),Object(f.jsx)("span",{children:"/"})," ",Math.round(k.mine),Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]}),Object(f.jsxs)("div",{className:"Cureent__locality",children:[M.locality,Object(f.jsx)(x.a,{icon:O.l,className:"img"})]}),Object(f.jsx)("div",{className:"Content__HourlyLabel",children:"24-hour weather report"}),Object(f.jsx)(C,{ArrayData:k.Hourly,sendClass:N.Values.HourlyClassname1}),Object(f.jsx)("div",{className:"Content__HourlyLabel",children:"7-day weather report"}),Object(f.jsx)(g,{ArrayData:D.Daily}),Object(f.jsx)("div",{className:"Content__HourlyLabel",children:"weather details"}),Object(f.jsx)(v,{ArrayData:_})]})})]}):Object(f.jsx)(f.Fragment,{children:b.loaded?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"Loading",children:Object(f.jsxs)("div",{className:"Waiting",children:["Fetching Data ",Object(f.jsx)("span",{children:"....."})]})})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"Default",children:"Provide location"})})})})},F=(a(49),function(){var e={forImg:localStorage.getItem("Img"),forClass:localStorage.getItem("Class")},t=Object(y.c)(k)||localStorage.getItem("cityName"),a=Object(y.c)(D)||e,n=Object(d.f)(),c=Object(s.useState)({loaded:!1}),i=Object(o.a)(c,2),r=i[0],l=i[1],h=function(e){var t=new Date(1e3*e.dt),a={loaded:!0,month:t.toLocaleString("default",{month:"short"}),today:t.getDate(),City:e.name,Country:e.sys.country,temp:Math.round(e.main.temp),feels_like:Math.round(e.main.feels_like),temp_min:Math.round(e.main.temp_min),temp_max:Math.round(e.main.temp_max),pressure:e.main.pressure,humidity:e.main.humidity,wind_speed:e.wind.speed};l(a)};Object(s.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=e9f96ca8486c3c3db229029a16c48211")).then(function(){var e=Object(m.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=7;break}return e.next=3,t.json();case 3:a=e.sent,h(a),e.next=7;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw new Error(e)}))}),[t]);var u=function(){n.goBack()};return Object(f.jsx)(f.Fragment,{children:r.loaded?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"CITYCONTENT",children:[Object(f.jsxs)("div",{className:a.forImg,children:[Object(f.jsx)(x.a,{icon:O.b,onClick:u,className:"imgColor"}),Object(f.jsx)("div",{className:"heading__Date",children:Object(f.jsxs)("span",{children:[r.today,Object(f.jsx)("sup",{children:"th"})," "," "+r.month]})}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[r.City," "]}),Object(f.jsx)("span",{children:r.Country})]})]}),Object(f.jsxs)("div",{className:a.forClass,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Temperature:"}),Object(f.jsxs)("span",{children:[r.temp,Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Feels-Like:"}),Object(f.jsxs)("span",{children:[r.feels_like,Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Max and Min:"}),Object(f.jsxs)("span",{children:[r.temp_max,"/",r.temp_min,Object(f.jsxs)("sup",{children:["o",Object(f.jsx)("sub",{children:"C"})]})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Pressure:"}),Object(f.jsxs)("span",{children:[r.pressure," hPa"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Humidity:"}),Object(f.jsxs)("span",{children:[r.humidity," %"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Wind_Speed:"}),Object(f.jsxs)("span",{children:[Math.round(3.6*r.wind_speed)," km/h"]})]})]})]})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"Loading",children:Object(f.jsx)(x.a,{icon:O.b,onClick:u,className:"img"})})})})}),H=a(26),S=(a(50),function(){var e=Object(d.f)();return Object(f.jsxs)("div",{className:"Feedback",children:[Object(f.jsx)(x.a,{icon:O.b,onClick:function(){e.goBack()},className:"Back"}),Object(f.jsxs)("div",{className:"Inside__Feedback",children:[Object(f.jsx)("div",{className:"Feedback__header",children:"Provide Feedback\ud83e\udd29"}),Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=document.getElementById("Name").value.trim(),s=document.getElementById("Email").value.trim(),n=document.getElementById("Textare").value.trim();""===a||""===s||""===n?alert("Enter some data"):(H.a.sendForm("service_koundi","template_ywimchr",t.target,"user_NoAYEf5NbxWcXTsa6fT5x").then((function(t){200===t.status&&(alert("Thank You \ud83d\ude0e"),e.goBack())}),(function(e){throw alert("Oops! Something Wrong \ud83e\udd7a"),new Error(e.text)})),t.target.reset())},children:[Object(f.jsxs)("div",{className:"Feedback__form1",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{children:"Enter Your Name :"}),Object(f.jsx)("input",{type:"text",name:"name",id:"Name"})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"lefting",children:"Any Bugs :"}),Object(f.jsx)("input",{type:"text",name:"subject",id:"Email"})]})]}),Object(f.jsxs)("div",{className:"Feedback__form2",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{children:"Provide Feedback Here \ud83d\udc47"}),Object(f.jsx)("textarea",{rows:"4",cols:"50",name:"about",id:"Textare"})]}),Object(f.jsx)("input",{type:"submit",name:"email",id:"sendFeedback",value:"send feedback"})]})]})]})]})});var T=function(){return Object(f.jsx)(r.a,{children:Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/weatherapp",children:Object(f.jsx)(I,{})}),Object(f.jsx)(d.a,{path:"/city",children:Object(f.jsx)(F,{})}),Object(f.jsx)(d.a,{path:"/feedback",children:Object(f.jsx)(S,{})})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},V=Object(_.a)({reducer:{user:M},middleware:Object(_.c)({serializableCheck:!1})});i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(y.a,{store:V,children:Object(f.jsx)(T,{})})}),document.getElementById("root")),L()}},[[51,1,2]]]);
//# sourceMappingURL=main.97549703.chunk.js.map