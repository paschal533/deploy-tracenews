(this.webpackJsonpmp3hits=this.webpackJsonpmp3hits||[]).push([[0],{130:function(e,a,t){e.exports=t(213)},135:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},193:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){},213:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=t(9),i=t(18),m=t(7),o=t(226),u=t(224),E=(t(135),function(){var e=Object(n.useState)("open"),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("close"),i=Object(m.a)(c,2),E=i[0],p=i[1],d=Object(n.useState)("nav-list"),v=Object(m.a)(d,2),b=v[0],f=v[1],h=Object(n.useState)("nav"),g=Object(m.a)(h,2),N=g[0],y=g[1],w=function(){"open"===t&&"close"===E?(r("close"),p("open"),f("drop"),y("black"),console.log(t)):(r("open"),p("close"),f("nav-list"),y("nav"))};return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:N},l.a.createElement("div",{className:"menu-toggle"},l.a.createElement("i",{onClick:w,className:t},l.a.createElement(o.a,null)),l.a.createElement("i",{onClick:w,className:E},l.a.createElement(u.a,null))),l.a.createElement(s.b,{className:"logo",to:"/"},l.a.createElement("span",{className:"trace"},"TRACE"),"NEWS"),l.a.createElement("ul",{className:b},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-link active"},"home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/sports",className:"nav-link"},"Sport")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/news",className:"nav-link"},"News")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/arts",className:"nav-link"},"Entertaiment")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/sciences",className:"nav-link"},"Science")))))))}),p=t(58),d=t(22),v=t.n(d),b=t(37),f=t(218),h=t(67),g=t(46),N=t(214),y=t(215),w=t(89),O=t(223),j=t(225),k=t(27),x=t.n(k),S=t(28),P=t.n(S),C=l.a.createElement(O.a,{style:{fontSize:24},spin:!0}),_=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),o=i[0],u=i[1],E=Object(n.useState)([]),d=Object(m.a)(E,2),O=d[0],k=d[1],S=Object(n.useState)([]),_=Object(m.a)(S,2),R=_[0],z=_[1],A=Object(n.useState)(!0),T=Object(m.a)(A,2),D=T[0],M=T[1],W=Object(n.useState)([]),L=Object(m.a)(W,2),B=(L[0],L[1],Object(n.useState)([])),I=Object(m.a)(B,2),F=(I[0],I[1],"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=".concat(P.a.newsApi)),H="https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=".concat(P.a.newsApi),J="https://api.nytimes.com/svc/topstories/v2/science.json?api-key=".concat(P.a.newsApi),U="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=".concat(P.a.newsApi),V=function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()(F).then((function(e){var a=e.data.results.slice(0,5);r(a)}));case 2:return e.next=4,x()(H).then((function(e){var a=e.data.results.slice(0,5);u(a)}));case 4:return e.next=6,x()(J).then((function(e){var a=e.data.results.slice(0,5);k(a)}));case 6:return e.next=8,x()(U).then((function(e){var a=e.data.results.slice(0,5);z(a)}));case 8:M(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){V()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"News"},l.a.createElement(f.a,{title:"Top Stories",style:{width:"100%"}},!1===D?t.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imag",src:e.multimedia[0].url,alt:e.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement("a",{rel:"external",target:"_blank",href:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,null)))})):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:C}))),l.a.createElement("div",{className:"button"},l.a.createElement("div",{className:"spinner"},l.a.createElement(s.b,{to:"/News"},l.a.createElement(w.a,Object(p.a)({type:"primary",shape:"round",size:"large",icon:l.a.createElement(j.a,null)},"size","large"),"SEE MORE ON TOP STORIES"))))),l.a.createElement("br",null)),l.a.createElement("div",{className:"Sports"},l.a.createElement(f.a,{title:"Top Sports",style:{width:"100%"}},!1===D?o.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imag",src:e.multimedia[0].url,alt:e.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement("a",{rel:"external",target:"_blank",href:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,null)))})):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:C}))),l.a.createElement("div",{className:"button"},l.a.createElement("div",{className:"spinner"},l.a.createElement(s.b,{to:"/Sports"},l.a.createElement(w.a,Object(p.a)({type:"primary",shape:"round",size:"large",icon:l.a.createElement(j.a,null)},"size","large"),"SEE MORE ON TOP SPORTS"))))),l.a.createElement("br",null)),l.a.createElement("div",{className:"Science"},l.a.createElement(f.a,{title:"Sciences",style:{width:"100%"}},!1===D?O.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imag",src:e.multimedia[0].url,alt:e.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement("a",{rel:"external",target:"_blank",href:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,null)))})):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:C}))),l.a.createElement("div",{className:"button"},l.a.createElement("div",{className:"spinner"},l.a.createElement(s.b,{to:"/Sciences"},l.a.createElement(w.a,Object(p.a)({type:"primary",shape:"round",size:"large",icon:l.a.createElement(j.a,null)},"size","large"),"SEE MORE ON SCIENCE"))))),l.a.createElement("br",null)),l.a.createElement("div",{className:"Sports"},l.a.createElement(f.a,{title:"Entertaiment",style:{width:"100%"}},!1===D?R.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imag",src:e.multimedia[0].url,alt:e.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement("a",{rel:"external",target:"_blank",href:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,null)))})):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:C}))),l.a.createElement("div",{className:"button"},l.a.createElement("div",{className:"spinner"},l.a.createElement(s.b,{to:"/arts"},l.a.createElement(w.a,Object(p.a)({type:"primary",shape:"round",size:"large",icon:l.a.createElement(j.a,null)},"size","large"),"SEE MORE ON ENTERTAIMENT"))))),l.a.createElement("br",null)))},R=(t(186),function(){return l.a.createElement("div",{className:"main"},l.a.createElement(_,null))}),z=t(222),A=t(230),T=t(229),D=t(228),M=t(231),W=t(227),L=t(216),B=t(119),I=(t(187),function(){return l.a.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},l.a.createElement("path",{d:"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"}))}),F=function(e){return l.a.createElement(B.a,Object.assign({component:I},e))},H=function(){var e=Object(L.a)({scriptUrl:"//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"});return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"back-to-top"},l.a.createElement("i",{className:"fas fa-chevron-up"},l.a.createElement(z.a,null))),l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-content-about animate-top"},l.a.createElement("h4",null,"About traceNews"),l.a.createElement("div",{className:"asterisk"},l.a.createElement("i",{className:"fas fa-asterisk"})),l.a.createElement("p",null,"TraceNews.com is a news/article update blog, we bring you the latest and breaking news all over the world here. you can also use our searchbar to find any specific news/article you are looking for, And do not forget to invite/share with your friends..thank you")),l.a.createElement("div",{className:"footer-content-divider animate-bottom"},l.a.createElement("div",{className:"social-media"},l.a.createElement("h4",null,"follow along"),l.a.createElement("ul",{className:"social-icons"},l.a.createElement("li",null,l.a.createElement("a",{rel:"external",target:"_blank",href:"https://www.twitter.com"},l.a.createElement("i",{className:"fab fa-twitter"},l.a.createElement(A.a,null)))),l.a.createElement("li",null,l.a.createElement("a",{rel:"external",target:"_blank",href:"https://www.facebook.com"},l.a.createElement("i",{className:"fab fa-facebook-square"},l.a.createElement(e,{type:"icon-facebook"})))),l.a.createElement("li",null,l.a.createElement("a",{rel:"external",target:"_blank",href:"https://www.whatsapp.com"},l.a.createElement("i",{className:"fab fa-pinterest"},l.a.createElement(T.a,null)))),l.a.createElement("li",null,l.a.createElement("a",{rel:"external",target:"_blank",href:"https://www.instagram.com"},l.a.createElement("i",{className:"fab fa-LinkeclassNamein-in"},l.a.createElement(D.a,null)))),l.a.createElement("li",null,l.a.createElement("a",{rel:"external",target:"_blank",href:"https://www.linkedin.com"},l.a.createElement("i",{className:"fab fa-tripadvisor"}," ",l.a.createElement(M.a,null)))))),l.a.createElement("div",{className:"newsletter-container"},l.a.createElement("h4",null,"Newsletter"),l.a.createElement("form",{action:"",className:"newsletter-form"},l.a.createElement("input",{type:"text",className:"newsletter-input",placeholder:"your Email Address"}),l.a.createElement("a",{href:"mailto:okwuosahpaschal@gmail.com"},l.a.createElement("button",{className:"newsletter-btn",type:"submit"},l.a.createElement("i",{className:"fas fa-envelope"},l.a.createElement(W.a,null)))))),l.a.createElement("br",null)),l.a.createElement("div",{className:"footer-content-about"},l.a.createElement("p",null,"Made with ",l.a.createElement(F,{style:{color:"red"}})," by Paschal"))))))},J=t(220),U={height:60,width:60,opacity:.3,lineHeight:"40px",borderRadius:30,backgroundColor:"#1088e9",color:"#fff",textAlign:"center",fontSize:14},V=function(){return l.a.createElement(J.a,null,l.a.createElement("div",{style:U,className:"fas fa-chevron-up"},"UP"))},q=t(86),K=t(217),Q=l.a.createElement(O.a,{style:{fontSize:24},spin:!0}),G=function(e){var a=e.Result,t=e.open;return l.a.createElement("div",null,!1===t?a.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:6},l.a.createElement(K.a,{size:"medium",direction:"vertical"},l.a.createElement(f.a,{key:e._id},l.a.createElement("h1",null,e.headline.main),l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement("a",{rel:"external",target:"_blank",href:e.web_url},l.a.createElement(w.a,{type:"primary"},"Read more"))),l.a.createElement("p",null,"Written ",e.byline.original),l.a.createElement("p",null,"Published date ",e.pub_date))))),l.a.createElement("br",null))})):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:Q}))),";")},$=t(219),X=(t(109),t(193),$.a.Search),Y=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),s=Object(m.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(!1),E=Object(m.a)(u,2),p=E[0],d=E[1],h=Object(n.useState)({results:[],selected:{},suggs:[]}),g=Object(m.a)(h,2),N=g[0],y=g[1],w="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(t,"&api-key=").concat(P.a.newsApi),O=function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),d(!0),e.next=4,x()(w).then((function(e){var a=e.data.response.docs;y((function(e){return Object(q.a)(Object(q.a)({},e),{},{results:a})}))}));case 4:console.log(N.results),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement(X,{style:{width:"100%"},placeholder:"Search for any news or article here",enterButton:"Search",size:"large",onSearch:function(e){return O(e.preventDefault)},onChange:function(e){var a=e.target.value;r(a)}})),l.a.createElement("br",null),i?l.a.createElement("div",null,l.a.createElement(f.a,{title:"Search Results",style:{width:"100%"}},l.a.createElement(G,{Result:N.results,searchName:t,open:p}))):null,l.a.createElement("br",null))};var Z=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"container searchbar"},l.a.createElement(Y,null)),l.a.createElement(R,null),l.a.createElement(V,null),l.a.createElement(H,null))},ee=t(221),ae=function(){return l.a.createElement(ee.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:l.a.createElement(s.b,{to:"/"},l.a.createElement(w.a,{type:"primary"},"Back Home"))})},te=t(56),ne=t.n(te),le=l.a.createElement(O.a,{style:{fontSize:24},spin:!0}),re=function(){var e=Object(n.useState)({results:[],offset:0,perPage:40,currentPage:0}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),o=i[0],u=i[1],p=function(){var e=Object(b.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.nytimes.com/svc/topstories/v2/world.json?api-key=".concat(P.a.newsApi),e.next=3,x()(a).then((function(e){var a=e.data.results,n=a.slice(t.offset,t.offset+t.perPage);u(!0);var c=n.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.title},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imgk",src:e.multimedia[0].url,alt:a.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement(s.b,{to:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,{dashed:!0})))}));r({pageCount:Math.ceil(a.length/t.perPage),postData:c})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{title:"TOP STORIES",style:{width:"100%"}},!0===o?l.a.createElement("div",null," ",t.postData," "):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:le}))))),l.a.createElement(V,null),l.a.createElement(H,null))},ce=l.a.createElement(O.a,{style:{fontSize:24},spin:!0}),se=function(){var e=Object(n.useState)({results:[],offset:0,perPage:20,currentPage:0}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),o=i[0],u=i[1],p=function(){var e=Object(b.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=".concat(P.a.newsApi),e.next=3,x()(a).then((function(e){var a=e.data.results,n=a.slice(t.offset,t.offset+t.perPage);u(!0);var c=n.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.title},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imgk",src:e.multimedia[0].url,alt:a.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement(s.b,{to:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,{dashed:!0})))}));r({pageCount:Math.ceil(a.length/t.perPage),postData:c})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("br",null),!0===o?l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{title:"ENTERTAIMENT",style:{width:"100%"}},t.postData),l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(ne.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected,n=a*t.perPage;r({currentPage:a,offset:n},(function(){p()}))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:ce}))),l.a.createElement(V,null),l.a.createElement(H,null))},ie=l.a.createElement(O.a,{style:{fontSize:24},spin:!0}),me=function(){var e=Object(n.useState)({results:[],offset:0,perPage:40,currentPage:0}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),o=i[0],u=i[1],p=function(){var e=Object(b.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.nytimes.com/svc/topstories/v2/science.json?api-key=".concat(P.a.newsApi),e.next=3,x()(a).then((function(e){var a=e.data.results,n=a.slice(t.offset,t.offset+t.perPage);u(!0);var c=n.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.title},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imgk",src:e.multimedia[0].url,alt:a.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement(s.b,{to:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,{dashed:!0})))}));r({pageCount:Math.ceil(a.length/t.perPage),postData:c})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("br",null),!0===o?l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{title:"DISCOVERIES",style:{width:"100%"}},t.postData),l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(ne.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected,n=a*t.perPage;r({currentPage:a,offset:n},(function(){p()}))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:ie}))),l.a.createElement(V,null),l.a.createElement(H,null))},oe=(t(211),l.a.createElement(O.a,{style:{fontSize:24},spin:!0})),ue=function(){var e=Object(n.useState)({results:[],offset:0,perPage:40,currentPage:0}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),o=i[0],u=i[1],p=function(){var e=Object(b.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=".concat(P.a.newsApi),e.next=3,x()(a).then((function(e){var a=e.data.results,n=a.slice(t.offset,t.offset+t.perPage);u(!0);var c=n.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.title},l.a.createElement(h.a,null,l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("h1",null,e.title)),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("div",{className:"img"},l.a.createElement("img",{className:"imgk",src:e.multimedia[0].url,alt:a.title}))),l.a.createElement(g.a,{xs:24,sm:12},l.a.createElement("p",{className:"para"},e.abstract,"...",l.a.createElement(s.b,{to:e.short_url},"Read more")),l.a.createElement("p",null,"Written ",e.byline),l.a.createElement("p",null,"Published date ",e.published_date)),l.a.createElement(N.a,{dashed:!0})))}));r({pageCount:Math.ceil(a.length/t.perPage),postData:c})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("br",null),!0===o?l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{title:"TOP SPORTS",style:{width:"100%"}},t.postData),l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(ne.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected,n=a*t.perPage;r({currentPage:a,offset:n},(function(){p()}))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))),l.a.createElement(V,null),l.a.createElement(H,null)):l.a.createElement("div",{className:"spinnerdiv"},l.a.createElement("div",{className:"spinner"},l.a.createElement(y.a,{indicator:oe}))))};t(212);var Ee=function(){return l.a.createElement(s.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:Z}),l.a.createElement(i.a,{exact:!0,path:"/News",component:re}),l.a.createElement(i.a,{exact:!0,path:"/Sciences",component:me}),l.a.createElement(i.a,{exact:!0,path:"/Sports",component:ue}),l.a.createElement(i.a,{exact:!0,path:"/Arts",component:se}),l.a.createElement(i.a,{path:"",component:ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,a){e.exports={apiKey:"AIzaSyBpkiC-tPug8jy8_Bg7vjFxCn2zSvGRJyQ",newsApi:"flP4aUsiB5RVLK1uHuQijlVW7dRpn0B2",topNew:"5872d296e5314ad489456fe0a5842227"}}},[[130,1,2]]]);
//# sourceMappingURL=main.ebe34d92.chunk.js.map