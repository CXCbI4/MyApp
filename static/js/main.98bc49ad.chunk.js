(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a(428)},416:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);a(224),a(226);var n=a(0),o=a.n(n),c=a(48),r=a.n(c),i=a(40),l=a(167),s=a(27),u=a(18),p=a(8),d=a(74),m=a(53),h=a.n(m),v=a(66),b=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},O=function(e,t){return t.access_token=ve.getState().vkui.accessToken,t.v=void 0===t.v?"5.52":t.v,v.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.data.response}).catch(function(e){return e})},y={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},E={forms:[]},j=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],c=e.viewsHistory[e.activeStory]||[],r=c.indexOf(a);return-1!==r&&c.splice(r,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&v.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(c),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],h=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var b=m.shift();h=(m=[b])[m.length-1]}else if(i.length>1){var O=i.shift();s=(i=[O])[i.length-1],h=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var f=e.activeView,E=e.activePanel,j=e.activeStory,g=e.popouts;if(g[f])return g[f]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:g})});var w=e.modalHistory[f];if(void 0!==w&&0!==w.length){var k=w[w.length-2]||null;return null===k?w=[]:-1!==w.indexOf(k)?w=w.splice(0,w.indexOf(k)+1):w.push(k),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},f,k)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},f,w))})}var S=e.panelsHistory[f]||[],T=e.viewsHistory[e.activeStory]||[],_=e.storiesHistory;if(S.length>1)S.pop(),E=S[S.length-1];else if(T.length>1){T.pop(),f=T[T.length-1];var A=e.panelsHistory[f];E=A[A.length-1]}else if(_.length>1&&"Android"===t.payload.from){_.pop(),j=_[_.length-1],f=e.viewsHistory[j][e.viewsHistory[j].length-1];var C=e.panelsHistory[f];E=C.length>1?C[C.length-1]:C[0]}else v.a.send("VKWebAppClose",{status:"success"});return 1===S.length&&"iOS"===t.payload.from&&v.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:f,activePanel:E,activeStory:j,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,T)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===P?H=[]:-1!==H.indexOf(P)?H=H.splice(0,H.indexOf(P)+1):H.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var V=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,D=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===V?D=[]:-1!==D.indexOf(V)?D=D.splice(0,D.indexOf(V)+1):D.push(V),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,V)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,D))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),g=a(169),w=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},k=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},S=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},T=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},A=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},C=function(){return{type:"CLOSE_MODAL"}},P=(a(415),a(416),a(24)),H=a(25),V=a(28),D=a(26),M=a(29),B=a(4),L=a(180),x=a.n(L),I=a(181),G=a.n(I),F=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.setPage;e.withoutEpic;return o.a.createElement(B.v,{id:t},o.a.createElement(B.w,null,"\u0414\u0430\u0440\u0438 \u043f\u043e\u0434\u0430\u0440\u043a\u0438 \u0434\u0440\u0443\u0437\u044c\u044f\u043c!"),o.a.createElement(B.l,null,o.a.createElement(B.g,null,o.a.createElement(B.b,{size:"l",stretched:!0,onClick:function(){return a("home","groups")}},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"))))}}]),t}(o.a.Component),N={setPage:k,goBack:S,openPopout:T,closePopout:_,openModal:A},z=Object(s.b)(null,N)(F),K=a(130),W=a.n(K),U=a(182),R=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.photo,a=e.nameF,n=e.nameL;return o.a.createElement(B.c,{before:o.a.createElement(B.a,{size:50,src:t})},o.a.createElement(B.b,{href:"#",onClick:function(){return function(){return k("home","groups")}}},a," ",n))}}]),t}(n.PureComponent),Y=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).state={friends:{other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?console.log(this.getAuthToken()):this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["friends"],function(t){v.a.send("VKWebAppGetAuthToken",{app_id:7236336,scope:e.join(",")}).then(function(e){t(b(e.data.access_token))}).catch(function(){t(b(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(U.a)(W.a.mark(function e(){var t,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("friends.search",{fields:"first_name,last_name,photo_100",count:"1000"});case 2:t=e.sent,a=t.items,console.log(a),localStorage.setItem("userFriends",JSON.stringify(a)),this.setState({friends:{other:a},loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,c=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(R,{photo:e.photo_100,nameF:e.first_name,nameL:e.last_name})})),console.log(t),t}(this.state.friends.other);return console.log(this.state.friends.other),o.a.createElement(B.v,{id:a},o.a.createElement(B.w,{left:o.a.createElement(B.x,{onClick:function(){return n()}})},"\u0414\u0440\u0443\u0437\u044c\u044f"),this.state.loading&&o.a.createElement(B.y,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(B.l,null,o.a.createElement(B.g,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),o.a.createElement(B.g,null,o.a.createElement(B.b,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(B.l,{title:"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f"},o.a.createElement(B.r,null,c)))}}]),t}(o.a.Component);var q=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:S,openPopout:T,closePopout:_,openModal:A},e))})(Y),X=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(D.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=ve.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return o.a.createElement(B.v,{id:a},o.a.createElement(B.w,{noShadow:!0},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),o.a.createElement(B.i,{vertical:"top"},o.a.createElement(B.C,{theme:"header",type:"buttons"},o.a.createElement(B.n,{id:"EXAMPLE_TABS_LIST"},o.a.createElement(B.D,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(B.D,{onClick:function(){return e.setTab("\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432")},selected:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432"===this.state.activeTab},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432"),o.a.createElement(B.D,{onClick:function(){return e.setTab("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0430\u0440\u043a\u0438")},selected:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0430\u0440\u043a\u0438"===this.state.activeTab},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0430\u0440\u043a\u0438"),o.a.createElement(B.b,{size:"l",stretched:!0,onClick:function(){return n("home","groups")}},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"),o.a.createElement(B.b,{size:"l",stretched:!0,onClick:function(){return n("base","example")}},"\u041a\u0443\u0434\u0430-\u043d\u0438\u0431\u0443\u0434\u044c")))),o.a.createElement(B.l,{style:{marginTop:56}},"modal"===this.state.activeTab&&o.a.createElement(B.d,{onClick:function(){return n("modal","filters")}},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f"),"modal"!==this.state.activeTab&&o.a.createElement(B.g,null,this.state.activeTab)))}}]),t}(o.a.Component),J={setPage:k,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},Z=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},J)(X),Q=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(V.a)(this,Object(D.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(B.v,{id:t},o.a.createElement(B.w,{left:o.a.createElement(B.x,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(B.l,null,o.a.createElement(B.j,null,o.a.createElement(B.k,{top:"\u041f\u043e\u0434\u0430\u0440\u043e\u043a"},o.a.createElement(B.q,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0430\u0440\u043a\u0430",autoComplete:"off"}),o.a.createElement(B.q,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c",autoComplete:"off"})),o.a.createElement(B.k,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(B.e,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"))),o.a.createElement(B.g,{className:"buttons-group"},o.a.createElement(B.b,{size:"l",stretched:!0,onClick:function(){return a()}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),o.a.createElement(B.b,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),$={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:S},ee=Object(s.b)(function(e){return{inputData:e.formData.forms}},$)(Q),te=a(93),ae=a.n(te),ne=a(73),oe=a.n(ne),ce=a(92),re=a.n(ce),ie=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],le=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return o.a.createElement(B.s,{id:t,header:o.a.createElement(B.t,{left:!B.o&&o.a.createElement(B.m,{onClick:a},o.a.createElement(oe.a,null)),right:B.o&&o.a.createElement(B.m,{onClick:a},o.a.createElement(ae.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(B.r,null,ie.map(function(e,t){return o.a.createElement(B.c,{key:t,description:e.desc,before:o.a.createElement(B.a,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(re.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),se={openModal:A},ue=Object(s.b)(null,se)(le),pe=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return o.a.createElement(B.s,{id:t,header:o.a.createElement(B.t,{left:!B.o&&o.a.createElement(B.m,{onClick:a},o.a.createElement(oe.a,null)),right:B.o&&o.a.createElement(B.m,{onClick:a},o.a.createElement(ae.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(B.c,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(B.a,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(B.r,null,o.a.createElement(B.c,null,o.a.createElement(B.p,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(B.c,null,o.a.createElement(B.p,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(B.c,null,o.a.createElement(B.p,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),de=Object(s.b)()(pe),me=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(D.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(M.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),v.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,c=n.activeStory,r=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==r||e.activeStory!==c){var l=i[c+"_"+o+"_"+r]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,c=e.popouts,r=e.activeView,i=e.activeStory,l=e.activePanel,s=e.activeModals,u=e.panelsHistory,p=e.colorScheme,d=void 0===u[r]?[r]:u[r],m=void 0===c[r]?null:c[r],h=void 0===s[r]?null:s[r],v=o.a.createElement(B.u,{activeModal:h},o.a.createElement(ue,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(de,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(B.f,{isWebView:!0,scheme:p},o.a.createElement(B.h,{activeStory:i,tabbar:o.a.createElement(B.A,null,o.a.createElement(B.B,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(x.a,null)),o.a.createElement(B.B,{onClick:function(){return a("more","callmodal")},selected:"more"===i},o.a.createElement(G.a,null)))},o.a.createElement(B.z,{id:"home",activeView:r,popout:m},o.a.createElement(B.E,{id:"home",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(z,{id:"base",withoutEpic:!1}),o.a.createElement(q,{id:"groups"}))),o.a.createElement(B.z,{id:"more",activeView:r,popout:m},o.a.createElement(B.E,{id:"more",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(Z,{id:"callmodal"})),o.a.createElement(B.E,{id:"modal",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(ee,{id:"filters"})))))}}]),t}(o.a.Component);var he=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:w,goBack:S,closeModal:C},e))})(me);a.d(t,"store",function(){return ve});var ve=Object(i.createStore)(j,Object(g.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));ve.dispatch(w("home","base")),r.a.render(o.a.createElement(s.a,{store:ve},o.a.createElement(he,null)),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.98bc49ad.chunk.js.map