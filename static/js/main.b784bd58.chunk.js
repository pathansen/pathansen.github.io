(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports={modalBackground:"ProjectModal_modalBackground__1zuvk",modalForeground:"ProjectModal_modalForeground__1z452",close:"ProjectModal_close__Ua3x-",closeText:"ProjectModal_closeText__1UF16"}},function(e,t,a){e.exports={projectItem:"Project_projectItem__kM0s8",titleCard:"Project_titleCard__3dnF3",repositoryLink:"Project_repositoryLink__2b7Sx"}},function(e,t,a){e.exports={projectHeader:"Projects_projectHeader__1xxew",projectRow:"Projects_projectRow__3LLLQ",projectColumn:"Projects_projectColumn__3Vwc9"}},,,function(e,t,a){e.exports={aboutHeader:"About_aboutHeader__2EeZG"}},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),l=(a(18),a(19),a(20),a(11)),i=a.n(l),s=function(e){return o.a.createElement("div",{className:i.a.aboutHeader},o.a.createElement("h1",{style:{margin:"0"}},"PATRICK HANSEN"),o.a.createElement("h6",{style:{margin:"0",marginBottom:"10%"}},"Web Development | Machine Learning | Data Science"))},p=a(1),d=a(2),m=a(4),u=a(3),j=a(5),h=a(6),g=a.n(h),f=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleKeyUp=function(e){var t=a.props.toggleModal;27===e.keyCode&&t()},a.handleClosePress=function(e){(0,a.props.toggleModal)()},a.componentDidMount=function(){document.addEventListener("keyup",a.handleKeyUp,!1)},a.componentWillUnmount=function(){document.removeEventListener("keyup",a.handleKeyUp,!1)},a}return Object(j.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.projectName;return o.a.createElement("div",{className:g.a.modalBackground,onKeyPress:this.handleKeyUp,onClick:this.handleOutsideModal},o.a.createElement("div",{className:g.a.modalForeground},o.a.createElement("div",{onClick:this.handleClosePress,className:g.a.close},o.a.createElement("p",{className:g.a.closeText},"\xd7")),o.a.createElement("p",null,e)))}}]),t}(o.a.Component),v=a(7),y=a.n(v),E=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={displayModal:!1},a.toggleModalHandler=function(){var e=!a.state.displayModal;a.setState({displayModal:e})},a}return Object(j.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projectName,a=e.projectLanguage,n=e.projectRepoLink,r=this.state.displayModal;return o.a.createElement("div",null,r&&o.a.createElement(f,{toggleModal:this.toggleModalHandler,projectName:t,projectLanguage:a,projectRepoLink:n}),o.a.createElement("div",{className:y.a.projectItem,onClick:this.toggleModalHandler},o.a.createElement("div",{className:y.a.titleCard},o.a.createElement("h4",{style:{margin:"0"}},t),o.a.createElement("h6",{style:{margin:"0",fontWeight:"normal"}},"(",a,")")),o.a.createElement("a",{className:y.a.repositoryLink,href:n},o.a.createElement("div",{href:n},o.a.createElement("h6",{style:{margin:"0",fontWeight:"normal"}},"GitHub Repository")))))}}]),t}(o.a.Component),_=a(8),b=a.n(_),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a.componentWillMount=function(){a.setState({data:[{projectName:"Portfolio Website",projectLanguage:"ReactJS",projectRepoLink:"https://github.com/pathansen/portfolio-source",thumbnail:""},{projectName:"Project 2",projectLanguage:"ReactJS",projectRepoLink:"https://github.com/pathansen/portfolio-source",thumbnail:""}]})},a.componentDidMount=function(){document.title="Patrick Hansen"},a}return Object(j.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.data;return o.a.createElement("div",{className:b.a.projectHeader},o.a.createElement("h1",null,"Projects"),o.a.createElement("div",{className:"responsive-grid",style:{width:"95%",paddingLeft:"1%"}},o.a.createElement("div",{className:"row",id:b.a.projectRow},e.map(function(e){return o.a.createElement("div",{className:"column",id:b.a.projectColumn},o.a.createElement(E,{projectName:e.projectName,projectLanguage:e.projectLanguage,projectRepoLink:e.projectRepoLink}))}))))}}]),t}(o.a.Component);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(s,null),o.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.b784bd58.chunk.js.map