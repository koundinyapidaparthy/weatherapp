(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(18),o=a.n(c),d=(a(25),a(19)),r=a(3),i=(a(26),a(10)),l=a.p+"static/media/Hot.9b1f5e7a.mp4",m=a.p+"static/media/BW.dbd358a0.mp4",j=a.p+"static/media/Cold.9543c939.mp4",u=function(){var e=Object(n.useState)({loaded:!1}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({loaded1:!1}),o=Object(i.a)(c,2),d=o[0],r=o[1],u=Object(n.useState)({loaded2:!1}),h=Object(i.a)(u,2),b=h[0],p=h[1],O=Object(n.useState)({loaded3:!1}),x=Object(i.a)(O,2),g=x[0],C=x[1],f=Object(n.useState)({loaded4:!1}),v=Object(i.a)(f,2),_=v[0],y=v[1],D=function(e){if(e)var t=e.current,a=t.dt,n=t.feels_like,s=t.humidity,c=t.sunrise,o=t.sunset,d=t.temp,i=t.wind_speed,u=new Date(1e3*a),h=u.toLocaleString("default",{month:"short"}),b=u.toLocaleString("default",{weekday:"long"}),O=u.getDate(),x=new Date(1e3*c),g="".concat(x.getHours(),":").concat(x.getMinutes()),C=new Date(1e3*o),f={CurrentDate:{month:h,weekday:b,today:O},SunriseTime:g,SunsetTime:"".concat(C.getHours()>12?C.getHours()-12:C.getHours(),":").concat(C.getMinutes())},v={feels_like:n,temp:d};if(void 0!==f)var _=!0;r({Dateobj:f,Tempobj:v,humidity:s,loaded1:_,wind_speed:i}),function(e){var t={Video:"",Classname:"",MainClassname1:"",HourlyClassname1:""};e.loaded1&&(e.Tempobj.temp>=35?(t.Video=l,t.Classname="Hot",t.MainClassname1="IF__Content add1Class1",t.HourlyClassname1="Inner__Hourly addClassInHourly1"):e.Tempobj.temp>=20&&e.Tempobj.temp<35?(t.Video=m,t.Classname="Bw",t.MainClassname1="IF__Content",t.HourlyClassname1="Inner__Hourly"):e.Tempobj.temp<20&&(t.Video=j,t.Classname="Cold",t.MainClassname1="IF__Content add1Class2",t.HourlyClassname1="Inner__Hourly addClassInHourly2"),p({loaded2:!0,Values:t}))}({Dateobj:f,Tempobj:v,humidity:s,loaded1:_,wind_speed:i})};return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){""===e.coords.latitude&&""===e.coords.longitude?s({loaded:!1}):(s({loaded:!0}),""!==e.coords.latitude&&""!==e.coords.longitude&&fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&units=metric&appid=e9f96ca8486c3c3db229029a16c48211")).then((function(e){if(e.ok)return e.json()})).then((function(e){D(e),function(e){for(var t=e.hourly,a=Number.MAX_VALUE,n=Number.MIN_VALUE,s=0;s<t.length;s++)t[s].temp>n&&(n=t[s].temp),t[s].temp<a&&(a=t[s].temp);C({loaded3:!0,Hourly:t,mine:a,maxe:n})}(e),function(e){var t=e.daily;y({loaded4:!0,Daily:t})}(e)})).catch((function(e){return console.log("Error")})))}))}),[]),{userProvidedLoc:a,sortedData1:d,sortedData2:b,sortedData3:g,sortedData4:_}},h=(a(27),a(13)),b=a(8),p=a(0),O=function(e){for(var t=e.ArrayData,a=[],n=0;n<t.length-24;n++){var s=new Date(1e3*t[n].dt).getHours(),c={hours:s,temp:Math.round(t[n].temp),main:"",desc:t[n].weather[0].description};"R"===t[n].weather[0].main[0]?c.main=s>=19||s<=6?"NC"+t[n].weather[0].main[0]:"MC"+t[n].weather[0].main[0]:"C"===t[n].weather[0].main[0]?c.main=s>=19||s<=6?"N"+t[n].weather[0].main[0]:"M"+t[n].weather[0].main[0]:c.main=t[n].weather[0].main[0],"MCR"===c.main?c.main=b.f:"MC"===c.main?c.main=b.e:"NCR"===c.main?c.main=b.c:"NC"===c.main?c.main=b.b:c.main=b.g,a.push(c)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Hourly__Main",children:a.map((function(t,a){return Object(p.jsxs)("div",{className:e.sendClass,children:[Object(p.jsxs)("div",{className:"Hourly__Hours",children:[t.hours," : 00"]}),Object(p.jsx)(h.a,{icon:t.main,className:"img"}),Object(p.jsx)("div",{className:"Hourly__Temp",children:t.temp})]},a)}))})})},x=(a(34),function(e){console.log(e);for(var t=e.ArrayData,a=[],n=0;n<t.length;n++){var s=new Date(1e3*t[n].dt);if("R"===t[n].weather[0].main[0]){var c={Month:s.toLocaleString("default",{month:"short"}),Date:s.getDate(),Image:b.a,Desc:t[n].weather[0].description,Tmax:Math.round(t[n].temp.max),Tmin:Math.round(t[n].temp.min)};a.push(c)}else{var o={Month:s.toLocaleString("default",{month:"short"}),Date:s.getDate(),Image:b.d,Desc:t[n].weather[0].description,Tmax:Math.round(t[n].temp.max),Tmin:Math.round(t[n].temp.min)};a.push(o)}}return console.log(a),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{}),Object(p.jsx)("tbody",{children:a.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.Month}),Object(p.jsx)("td",{children:e.Date}),Object(p.jsx)("td",{children:Object(p.jsx)(h.a,{icon:e.Image,className:"img"})}),Object(p.jsx)("td",{children:e.Desc}),Object(p.jsxs)("td",{children:[e.Tmax,"/",e.Tmin,Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]})]})]},t)}))})]})})}),g=function(){var e=u(),t=e.userProvidedLoc,a=e.sortedData1,n=e.sortedData2,s=e.sortedData3,c=e.sortedData4;return t.loaded&&a.loaded1&&n.loaded2&&s.loaded3&&c.loaded4,Object(p.jsx)("div",{className:"Main",children:t.loaded&&a.loaded1&&n.loaded2&&s.loaded3&&c.loaded4?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"travel1"}),Object(p.jsx)("div",{className:"Fetched__Main",children:Object(p.jsx)("video",{className:n.Values.Classname,loop:!0,autoPlay:!0,muted:!0,children:Object(p.jsx)("source",{src:n.Values.Video,type:"video/mp4"})})}),Object(p.jsx)("div",{className:"Fetched__Content",children:Object(p.jsxs)("div",{className:n.Values.MainClassname1,children:[Object(p.jsxs)("div",{className:"Current__Temp",children:[Math.round(a.Tempobj.temp),Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]})]}),Object(p.jsxs)("div",{className:"High__Low",children:[Math.round(s.maxe),Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]}),Object(p.jsx)("span",{children:"/"})," ",Math.round(s.mine)," ",Object(p.jsxs)("sup",{children:["o",Object(p.jsx)("sub",{children:"C"})]})]}),Object(p.jsx)("div",{className:"Content__HourlyLabel",children:"24-hour weather report"}),Object(p.jsx)(O,{ArrayData:s.Hourly,sendClass:n.Values.HourlyClassname1}),Object(p.jsx)("div",{className:"Content__HourlyLabel",children:"7-day weather report"}),Object(p.jsx)(x,{ArrayData:c.Daily})]})})]}):Object(p.jsx)(p.Fragment,{children:t.loaded?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Loading",children:Object(p.jsxs)("div",{className:"Waiting",children:["Fetching Data ",Object(p.jsx)("span",{children:"....."})]})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Default",children:"Provide location"})})})})};var C=function(){return Object(p.jsx)(d.a,{children:Object(p.jsx)(r.c,{children:Object(p.jsx)(r.a,{exact:!0,path:"/weatherapp",children:Object(p.jsx)(g,{})})})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),f()}},[[40,1,2]]]);
//# sourceMappingURL=main.95c6375a.chunk.js.map