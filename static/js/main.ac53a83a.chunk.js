(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(17),c=t.n(o),d=(t(25),t(19)),i=t(3),r=(t(26),t(11)),l=t.p+"static/media/Hot.9b1f5e7a.mp4",m=t.p+"static/media/BW.dbd358a0.mp4",u=t.p+"static/media/Cold.9543c939.mp4",j=function(){var e=Object(n.useState)({loaded:!1}),a=Object(r.a)(e,2),t=a[0],s=a[1],o=Object(n.useState)({loaded1:!1}),c=Object(r.a)(o,2),d=c[0],i=c[1],j=Object(n.useState)({loaded2:!1}),h=Object(r.a)(j,2),b=h[0],p=h[1],O=Object(n.useState)({loaded3:!1}),C=Object(r.a)(O,2),x=C[0],g=C[1],f=function(e){if(e)var a=e.current,t=a.dt,n=a.feels_like,s=a.humidity,o=a.sunrise,c=a.sunset,d=a.temp,r=a.wind_speed,j=new Date(1e3*t),h=j.toLocaleString("default",{month:"short"}),b=j.toLocaleString("default",{weekday:"long"}),O=j.getDate(),C=new Date(1e3*o),x="".concat(C.getHours(),":").concat(C.getMinutes()),g=new Date(1e3*c),f={CurrentDate:{month:h,weekday:b,today:O},SunriseTime:x,SunsetTime:"".concat(g.getHours()>12?g.getHours()-12:g.getHours(),":").concat(g.getMinutes())},v={feels_like:n,temp:d};if(void 0!==f)var _=!0;i({Dateobj:f,Tempobj:v,humidity:s,loaded1:_,wind_speed:r}),function(e){var a={Video:"",Classname:"",MainClassname1:"",HourlyClassname1:""};e.loaded1&&(e.Tempobj.temp>=35?(a.Video=l,a.Classname="Hot",a.MainClassname1="IF__Content add1Class1",a.HourlyClassname1="Inner__Hourly addClassInHourly1"):e.Tempobj.temp>=20&&e.Tempobj.temp<35?(a.Video=m,a.Classname="Bw",a.MainClassname1="IF__Content",a.HourlyClassname1="Inner__Hourly"):e.Tempobj.temp<20&&(a.Video=u,a.Classname="Cold",a.MainClassname1="IF__Content add1Class2",a.HourlyClassname1="Inner__Hourly addClassInHourly2"),p({loaded2:!0,Values:a}))}({Dateobj:f,Tempobj:v,humidity:s,loaded1:_,wind_speed:r})};return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){""===e.coords.latitude&&""===e.coords.longitude?s({loaded:!1}):(s({loaded:!0}),""!==e.coords.latitude&&""!==e.coords.longitude&&fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&units=metric&appid=e9f96ca8486c3c3db229029a16c48211")).then((function(e){if(e.ok)return e.json()})).then((function(e){f(e),function(e){for(var a=e.hourly,t=Number.MAX_VALUE,n=Number.MIN_VALUE,s=0;s<a.length;s++)a[s].temp>n&&(n=a[s].temp),a[s].temp<t&&(t=a[s].temp);g({loaded3:!0,Hourly:a,mine:t,maxe:n})}(e)})).catch((function(e){return console.log("Error")})))}))}),[]),{userProvidedLoc:t,sortedData1:d,sortedData2:b,sortedData3:x}},h=(t(27),t(18)),b=t(9),p=t(1),O=function(e){for(var a=e.ArrayData,t=[],n=0;n<a.length;n++){var s=new Date(1e3*a[n].dt).getHours(),o={hours:s,temp:Math.round(a[n].temp),main:"",desc:a[n].weather[0].description};"R"===a[n].weather[0].main[0]?o.main=s>=17||s<=6?"NC"+a[n].weather[0].main[0]:"MC"+a[n].weather[0].main[0]:"C"===a[n].weather[0].main[0]?o.main=s>=17||s<=6?"N"+a[n].weather[0].main[0]:"M"+a[n].weather[0].main[0]:o.main=a[n].weather[0].main[0],"MCR"===o.main?o.main=b.d:"MC"===o.main?o.main=b.c:"NCR"===o.main?o.main=b.b:"NC"===o.main?o.main=b.a:o.main=b.e,t.push(o)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Hourly__Main",children:t.map((function(a,t){return Object(p.jsxs)("div",{className:e.sendClass,children:[Object(p.jsxs)("div",{className:"Hourly__Hours",children:[a.hours," : 00"]}),Object(p.jsx)(h.a,{icon:a.main,className:"img"}),Object(p.jsx)("div",{className:"Hourly__Temp",children:a.temp})]},t)}))})})},C=function(){var e=j(),a=e.userProvidedLoc,t=e.sortedData1,n=e.sortedData2,s=e.sortedData3;return a.loaded&&t.loaded1&&n.loaded2&&s.loaded3,Object(p.jsx)("div",{className:"Main",children:a.loaded&&t.loaded1&&n.loaded2&&s.loaded3?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"travel1"}),Object(p.jsx)("div",{className:"Fetched__Main",children:Object(p.jsx)("video",{className:n.Values.Classname,loop:!0,autoPlay:!0,muted:!0,children:Object(p.jsx)("source",{src:n.Values.Video,type:"video/mp4"})})}),Object(p.jsx)("div",{className:"Fetched__Content",children:Object(p.jsxs)("div",{className:n.Values.MainClassname1,children:[Object(p.jsxs)("div",{className:"Current__Temp",children:[Math.round(t.Tempobj.temp),Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]})]}),Object(p.jsxs)("div",{className:"High__Low",children:[Math.round(s.maxe),Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]}),Object(p.jsx)("span",{children:"/"})," ",Math.round(s.mine),Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]})]}),Object(p.jsx)(O,{ArrayData:s.Hourly,sendClass:n.Values.HourlyClassname1})]})})]}):Object(p.jsx)(p.Fragment,{children:a.loaded?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Loading",children:Object(p.jsxs)("div",{className:"Waiting",children:["Fetching Data ",Object(p.jsx)("span",{children:"....."})]})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Default",children:"Provide location"})})})})};var x=function(){return Object(p.jsx)(d.a,{children:Object(p.jsx)(i.c,{children:Object(p.jsx)(i.a,{exact:!0,path:"/weatherapp",children:Object(p.jsx)(C,{})})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),o(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.ac53a83a.chunk.js.map