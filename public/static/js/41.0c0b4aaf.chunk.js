/*! For license information please see 41.0c0b4aaf.chunk.js.LICENSE.txt */
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[41],{1089:function(t,e){!function(){"use strict";if("undefined"!==typeof Chart){"function"!=typeof Object.assign&&(Object.assign=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),a=1;a<arguments.length;a++){var r=arguments[a];if(null!=r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])}return o});var t={};["pie","doughnut","polarArea","bar"].forEach((function(e){t[e]=!0})),e.prototype.setup=function(t,e){this.chart=t,this.ctx=t.ctx,this.args={},this.barTotal={};var o=t.config.options;this.options=Object.assign({position:"default",precision:0,fontSize:o.defaultFontSize,fontColor:o.defaultFontColor,fontStyle:o.defaultFontStyle,fontFamily:o.defaultFontFamily,shadowOffsetX:3,shadowOffsetY:3,shadowColor:"rgba(0,0,0,0.3)",shadowBlur:6,images:[],outsidePadding:2,textMargin:2,overlap:!0},e),"bar"===t.config.type&&(this.options.position="default",this.options.arc=!1,this.options.overlap=!0)},e.prototype.render=function(){this.labelBounds=[],this.chart.data.datasets.forEach(this.renderToDataset)},e.prototype.renderToDataset=function(t,e){this.totalPercentage=0,this.total=null;var o=this.args[e];o.meta.data.forEach(function(e,a){this.renderToElement(t,o,e,a)}.bind(this))},e.prototype.renderToElement=function(t,e,o,a){if(this.shouldRenderToElement(e.meta,o)){this.percentage=null;var r=this.getLabel(t,o,a);if(r){var n=this.ctx;n.save(),n.font=Chart.helpers.fontString(this.options.fontSize,this.options.fontStyle,this.options.fontFamily);var i=this.getRenderInfo(o,r);this.drawable(o,r,i)?(n.beginPath(),n.fillStyle=this.getFontColor(t,o,a),this.renderLabel(r,i),n.restore()):n.restore()}}},e.prototype.renderLabel=function(t,e){return this.options.arc?this.renderArcLabel(t,e):this.renderBaseLabel(t,e)},e.prototype.renderBaseLabel=function(t,e){var o=this.ctx;if("object"===typeof t)o.drawImage(t,e.x-t.width/2,e.y-t.height/2,t.width,t.height);else{o.save(),o.textBaseline="top",o.textAlign="center",this.options.textShadow&&(o.shadowOffsetX=this.options.shadowOffsetX,o.shadowOffsetY=this.options.shadowOffsetY,o.shadowColor=this.options.shadowColor,o.shadowBlur=this.options.shadowBlur);for(var a=t.split("\n"),r=0;r<a.length;r++){var n=e.y-this.options.fontSize/2*a.length+this.options.fontSize*r;o.fillText(a[r],e.x,n)}o.restore()}},e.prototype.renderArcLabel=function(t,e){var o=this.ctx,a=e.radius,r=e.view;if(o.save(),o.translate(r.x,r.y),"string"===typeof t){o.rotate(e.startAngle),o.textBaseline="middle",o.textAlign="left";var n=t.split("\n"),i=0,s=[],l=0;"border"===this.options.position&&(l=(n.length-1)*this.options.fontSize/2);for(var c=0;c<n.length;++c){var h=o.measureText(n[c]);h.width>i&&(i=h.width),s.push(h.width)}for(c=0;c<n.length;++c){var d=n[c],p=(n.length-1-c)*-this.options.fontSize+l;o.save();var f=(i-s[c])/2;o.rotate(f/a);for(var u=0;u<d.length;u++){var g=d.charAt(u);h=o.measureText(g),o.save(),o.translate(0,-1*a),o.fillText(g,0,p),o.restore(),o.rotate(h.width/a)}o.restore()}}else o.rotate((r.startAngle+Math.PI/2+e.endAngle)/2),o.translate(0,-1*a),this.renderLabel(t,{x:0,y:0});o.restore()},e.prototype.shouldRenderToElement=function(t,e){return!t.hidden&&!e.hidden&&(this.options.showZero||"polarArea"===this.chart.config.type?0!==e._view.outerRadius:0!==e._view.circumference)},e.prototype.getLabel=function(t,e,o){var a;if("function"===typeof this.options.render)a=this.options.render({label:this.chart.config.data.labels[o],value:t.data[o],percentage:this.getPercentage(t,e,o),dataset:t,index:o});else switch(this.options.render){case"value":a=t.data[o];break;case"label":a=this.chart.config.data.labels[o];break;case"image":a=this.options.images[o]?this.loadImage(this.options.images[o]):"";break;case"percentage":default:a=this.getPercentage(t,e,o)+"%"}return"object"===typeof a?a=this.loadImage(a):null!==a&&void 0!==a&&(a=a.toString()),a},e.prototype.getFontColor=function(t,e,o){var a=this.options.fontColor;return"function"===typeof a?a=a({label:this.chart.config.data.labels[o],value:t.data[o],percentage:this.getPercentage(t,e,o),backgroundColor:t.backgroundColor[o],dataset:t,index:o}):"string"!==typeof a&&(a=a[o]||this.chart.config.options.defaultFontColor),a},e.prototype.getPercentage=function(t,e,o){if(null!==this.percentage)return this.percentage;var a;if("polarArea"===this.chart.config.type){if(null===this.total){this.total=0;for(var r=0;r<t.data.length;++r)this.total+=t.data[r]}a=t.data[o]/this.total*100}else if("bar"===this.chart.config.type){if(void 0===this.barTotal[o]){this.barTotal[o]=0;for(r=0;r<this.chart.data.datasets.length;++r)this.barTotal[o]+=this.chart.data.datasets[r].data[o]}a=t.data[o]/this.barTotal[o]*100}else a=e._view.circumference/this.chart.config.options.circumference*100;return a=parseFloat(a.toFixed(this.options.precision)),this.options.showActualPercentages||("bar"===this.chart.config.type&&(this.totalPercentage=this.barTotalPercentage[o]||0),this.totalPercentage+=a,this.totalPercentage>100&&(a-=this.totalPercentage-100,a=parseFloat(a.toFixed(this.options.precision))),"bar"===this.chart.config.type&&(this.barTotalPercentage[o]=this.totalPercentage)),this.percentage=a,a},e.prototype.getRenderInfo=function(t,e){return"bar"===this.chart.config.type?this.getBarRenderInfo(t,e):this.options.arc?this.getArcRenderInfo(t,e):this.getBaseRenderInfo(t,e)},e.prototype.getBaseRenderInfo=function(t,e){if("outside"===this.options.position||"border"===this.options.position){var o,a,r=t._view,n=r.startAngle+(r.endAngle-r.startAngle)/2,i=r.outerRadius/2;if("border"===this.options.position?a=(r.outerRadius-i)/2+i:"outside"===this.options.position&&(a=r.outerRadius-i+i+this.options.textMargin),o={x:r.x+Math.cos(n)*a,y:r.y+Math.sin(n)*a},"outside"===this.options.position){var s=this.options.textMargin+this.measureLabel(e).width/2;o.x+=o.x<r.x?-s:s}return o}return t.tooltipPosition()},e.prototype.getArcRenderInfo=function(t,e){var o,a=t._view;o="outside"===this.options.position?a.outerRadius+this.options.fontSize+this.options.textMargin:"border"===this.options.position?(a.outerRadius/2+a.outerRadius)/2:(a.innerRadius+a.outerRadius)/2;var r=a.startAngle,n=a.endAngle,i=n-r;return r+=Math.PI/2,{radius:o,startAngle:r+=((n+=Math.PI/2)-(this.measureLabel(e).width/o+r))/2,endAngle:n,totalAngle:i,view:a}},e.prototype.getBarRenderInfo=function(t,e){var o=t.tooltipPosition();return o.y-=this.measureLabel(e).height/2+this.options.textMargin,o},e.prototype.drawable=function(t,e,o){if(this.options.overlap)return!0;if(this.options.arc)return o.endAngle-o.startAngle<=o.totalAngle;var a=this.measureLabel(e),r=o.x-a.width/2,n=o.x+a.width/2,i=o.y-a.height/2,s=o.y+a.height/2;return"outside"===this.options.renderInfo?this.outsideInRange(r,n,i,s):t.inRange(r,i)&&t.inRange(r,s)&&t.inRange(n,i)&&t.inRange(n,s)},e.prototype.outsideInRange=function(t,e,o,a){for(var r=this.labelBounds,n=0;n<r.length;++n){for(var i=r[n],s=[[t,o],[t,a],[e,o],[e,a]],l=0;l<s.length;++l){var c=s[l][0],h=s[l][1];if(c>=i.left&&c<=i.right&&h>=i.top&&h<=i.bottom)return!1}s=[[i.left,i.top],[i.left,i.bottom],[i.right,i.top],[i.right,i.bottom]];for(l=0;l<s.length;++l){c=s[l][0],h=s[l][1];if(c>=t&&c<=e&&h>=o&&h<=a)return!1}}return r.push({left:t,right:e,top:o,bottom:a}),!0},e.prototype.measureLabel=function(t){if("object"===typeof t)return{width:t.width,height:t.height};for(var e=0,o=t.split("\n"),a=0;a<o.length;++a){var r=this.ctx.measureText(o[a]);r.width>e&&(e=r.width)}return{width:e,height:this.options.fontSize*o.length}},e.prototype.loadImage=function(t){var e=new Image;return e.src=t.src,e.width=t.width,e.height=t.height,e},Chart.plugins.register({id:"labels",beforeDatasetsUpdate:function(o,a){if(t[o.config.type]){Array.isArray(a)||(a=[a]);var r=a.length;o._labels&&r===o._labels.length||(o._labels=a.map((function(){return new e})));for(var n=!1,i=0,s=0;s<r;++s){var l=o._labels[s];if(l.setup(o,a[s]),"outside"===l.options.position){n=!0;var c=1.5*l.options.fontSize+l.options.outsidePadding;c>i&&(i=c)}}n&&(o.chartArea.top+=i,o.chartArea.bottom-=i)}},afterDatasetUpdate:function(e,o,a){t[e.config.type]&&e._labels.forEach((function(t){t.args[o.index]=o}))},beforeDraw:function(e){t[e.config.type]&&e._labels.forEach((function(t){t.barTotalPercentage={}}))},afterDatasetsDraw:function(e){t[e.config.type]&&e._labels.forEach((function(t){t.render()}))}})}else console.error("Can not find Chart object.");function e(){this.renderToDataset=this.renderToDataset.bind(this)}}()},1091:function(t,e,o){"use strict";var a=o(1),r=o(3),n=o(0),i=(o(2),o(4)),s=o(291),l=o(162),c=Object(l.a)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),h=Object(l.a)(n.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),d=o(6);var p=Object(d.a)((function(t){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(t){var e=t.checked,o=t.classes,a=t.fontSize;return n.createElement("div",{className:Object(i.a)(o.root,e&&o.checked)},n.createElement(c,{fontSize:a}),n.createElement(h,{fontSize:a,className:o.layer}))})),f=o(12),u=o(7),g=o(70);var b=n.createContext();var m=n.createElement(p,{checked:!0}),v=n.createElement(p,null),y=n.forwardRef((function(t,e){var o=t.checked,l=t.classes,c=t.color,h=void 0===c?"secondary":c,d=t.name,p=t.onChange,f=t.size,y=void 0===f?"medium":f,w=Object(r.a)(t,["checked","classes","color","name","onChange","size"]),x=n.useContext(b),C=o,O=Object(g.a)(p,x&&x.onChange),k=d;return x&&("undefined"===typeof C&&(C=x.value===t.value),"undefined"===typeof k&&(k=x.name)),n.createElement(s.a,Object(a.a)({color:h,type:"radio",icon:n.cloneElement(v,{fontSize:"small"===y?"small":"default"}),checkedIcon:n.cloneElement(m,{fontSize:"small"===y?"small":"default"}),classes:{root:Object(i.a)(l.root,l["color".concat(Object(u.a)(h))]),checked:l.checked,disabled:l.disabled},name:k,checked:C,onChange:O,ref:e},w))}));e.a=Object(d.a)((function(t){return{root:{color:t.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:t.palette.primary.main,"&:hover":{backgroundColor:Object(f.d)(t.palette.primary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:t.palette.action.disabled}},colorSecondary:{"&$checked":{color:t.palette.secondary.main,"&:hover":{backgroundColor:Object(f.d)(t.palette.secondary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:t.palette.action.disabled}}}}),{name:"MuiRadio"})(y)},916:function(t,e,o){"use strict";var a=o(213);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(o(0)),n=(0,a(o(281)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");e.default=n},918:function(t,e,o){"use strict";var a=o(1),r=o(47),n=o(3),i=o(0),s=(o(86),o(2),o(4)),l=o(6),c=o(79),h=o(12),d=o(162),p=Object(d.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=o(279);var u=Object(l.a)((function(t){return{root:{display:"flex",marginLeft:t.spacing(.5),marginRight:t.spacing(.5),backgroundColor:t.palette.grey[100],color:t.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:t.palette.grey[200]},"&:active":{boxShadow:t.shadows[0],backgroundColor:Object(h.c)(t.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(t){var e=t.classes,o=Object(n.a)(t,["classes"]);return i.createElement(f.a,Object(a.a)({component:"li",className:e.root,focusRipple:!0},o),i.createElement(p,{className:e.icon}))}));var g=i.forwardRef((function(t,e){var o=t.children,l=t.classes,h=t.className,d=t.component,p=void 0===d?"nav":d,f=t.expandText,g=void 0===f?"Show path":f,b=t.itemsAfterCollapse,m=void 0===b?1:b,v=t.itemsBeforeCollapse,y=void 0===v?1:v,w=t.maxItems,x=void 0===w?8:w,C=t.separator,O=void 0===C?"/":C,k=Object(n.a)(t,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),R=i.useState(!1),j=R[0],A=R[1],E=i.Children.toArray(o).filter((function(t){return i.isValidElement(t)})).map((function(t,e){return i.createElement("li",{className:l.li,key:"child-".concat(e)},t)}));return i.createElement(c.a,Object(a.a)({ref:e,component:p,color:"textSecondary",className:Object(s.a)(l.root,h)},k),i.createElement("ol",{className:l.ol},function(t,e,o){return t.reduce((function(a,r,n){return n<t.length-1?a=a.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:e},o)):a.push(r),a}),[])}(j||x&&E.length<=x?E:function(t){return y+m>=t.length?t:[].concat(Object(r.a)(t.slice(0,y)),[i.createElement(u,{"aria-label":g,key:"ellipsis",onClick:function(){A(!0)}})],Object(r.a)(t.slice(t.length-m,t.length)))}(E),l.separator,O)))}));e.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)}}]);
//# sourceMappingURL=41.0c0b4aaf.chunk.js.map