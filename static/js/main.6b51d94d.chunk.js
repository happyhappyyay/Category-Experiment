(this.webpackJsonpexperiment=this.webpackJsonpexperiment||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/silhouette.b7f928cd.svg"},,,function(e,t,a){e.exports=a.p+"static/media/silhouette-add.a3b286a6.svg"},function(e,t,a){e.exports=a.p+"static/media/silhouette-remove.db519466.svg"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(8),r=a.n(s),l=(a(16),a(2)),c=a(3),o=a(1),u=a(5),d=a(4),m=(a(17),function(e){var t=e.island,a=e.stage,i=e.update,s=0===t?"Island1":"Island2",r=function(){return!(2===a|4===a|6===a)};return n.a.createElement("div",{className:r()?s:"Island-gone",onClick:r()?function(){i(t)}:null},n.a.createElement("div",{className:s+"-text"},s.includes(1)?"Island 1":"Island 2"))}),h=(a(18),a(6)),p=a.n(h),f=function(){function e(){Object(l.a)(this,e),this.dimension=Math.round(Math.random())}return Object(c.a)(e,[{key:"createSilhouetteProperties",value:function(){var t=e.islandRandomization();return 0===this.dimension?[this.randomizedUnimodalSize(50,8,t),this.randomizedBimodalSize(37,20,t),t]:[this.randomizedBimodalSize(50,8,t),this.randomizedUnimodalSize(37,20,t),t]}},{key:"randomizedBimodalSize",value:function(e,t,a){var i=e-t,n=i/2+t,s=Math.floor(i/5.5),r=(i/2-s)/3.5;return 0===a?this.normalDistributionSample()*r+(n-s):this.normalDistributionSample()*r+(n+s)}},{key:"randomizedUnimodalSize",value:function(e,t,a){var i=e-t,n=i/2+t,s=i/2/3.5;return this.normalDistributionSample()*s+n}},{key:"normalDistributionSample",value:function(){for(var e=0,t=0;0===e;)e=Math.random();for(;0===t;)t=Math.random();var a=Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t);return Math.abs(a)<=3.5?a:this.normalDistributionSample()}},{key:"getDimension",value:function(){return this.dimension}}],[{key:"islandRandomization",value:function(){return Math.round(Math.random())}},{key:"checkForImplicitPhase",value:function(e){return 1===e||3===e||5===e}}]),e}(),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).selectRepresentativeQuestion=function(e){switch(e){case 0:return"Please, create the silhouette most representative of Island 1.";case 1:return"Please, create the silhouette most representative of Island 2.";case 2:return"Please, create the silhouette most representative of the boundary between the two islands.";default:return"Please create the most repesentative silhouette."}},i.state={height:8.5,width:21},i.adjustWidth=i.adjustWidth.bind(Object(o.a)(i)),i.adjustHeight=i.adjustHeight.bind(Object(o.a)(i)),i.onButtonClick=i.onButtonClick.bind(Object(o.a)(i)),i}return Object(c.a)(a,[{key:"adjustHeight",value:function(e){this.setState({height:parseInt(e.target.value)})}},{key:"adjustWidth",value:function(e){this.setState({width:parseInt(e.target.value)})}},{key:"onButtonClick",value:function(){this.props.update(this.state.width,this.state.height)}},{key:"render",value:function(){var e=this.props,t=e.stage,a=e.trial,i=e.properties,s=this.selectRepresentativeQuestion(a),r=i,l=function(){return!(2===t|4===t|6===t)},c=l()?{width:r[0]+"vmin",height:r[1]+"vmin"}:{width:this.state.width+"vmin",height:this.state.height+"vmin",margin:"-7vmin 0 0 0"};return n.a.createElement("div",null,l()?n.a.createElement("div",null):n.a.createElement("div",null,n.a.createElement("h2",{className:"DisplayItem-explicit-text"},s)),n.a.createElement("div",{className:"DisplayItem-silhouette-container"},n.a.createElement("img",{className:"DisplayItem-silhouette",style:c,src:p.a,alt:"silhouette"})),l()?n.a.createElement("div",null):n.a.createElement("div",null,n.a.createElement("input",{type:"range",className:"DisplayItem-vert-range",min:15,max:42,id:"heightRange",value:this.state.height,onChange:this.adjustHeight}),n.a.createElement("input",{type:"range",className:"DisplayItem-hor-range",min:3,max:55,id:"widthRange",value:this.state.width,onChange:this.adjustWidth}),n.a.createElement("button",{className:"DisplayItem-button",onClick:this.onButtonClick},"Submit")))}}]),a}(n.a.Component),v=(a(19),function(){function e(t,a){Object(l.a)(this,e),this.feedbackAmount=t,this.feedbackType=2===a?e.createRandomizedFeedbackType():a,this.giveFeedback=!1,this.color="black"}return Object(c.a)(e,[{key:"allowFeedback",value:function(){return this.giveFeedback=100*Math.random()<=this.feedbackAmount,this.giveFeedback}},{key:"setupFeedbackColor",value:function(e){var t=e;1===this.feedbackType&&(t=!e),this.color=t?"green":"red"}},{key:"getFeedbackColor",value:function(){return this.color}},{key:"reverseFeedbackType",value:function(){this.feedbackType=0===this.feedbackType?1:0}}],[{key:"createRandomizedFeedbackType",value:function(){return Math.round(Math.random())}}]),e}()),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).implicitTrialStageIncrement=function(e){var t=i.props.trial,a=0===i.islanderLogic.getDimension()?i.islanderProperties[0]:i.islanderProperties[1];switch(i.props.stage){case 1:t+1===20?i.props.updateStage(2):i.props.updateTrial(t+1);break;case 3:i.implicitClassification1=i.implicitClassification1.map((function(t,i){switch(i){case 0:return 0!==e?t:t>0?(t+a)/2:a;case 1:return 0===e?t:t>0?(t+a)/2:a;default:return t}})),t+1===40?i.props.updateStage(4):i.props.updateTrial(t+1);break;case 5:i.implicitClassification2=i.implicitClassification2.map((function(t,i){switch(i){case 0:return 0!==e?t:t>0?(t+a)/2:a;case 1:return 0===e?t:t>0?(t+a)/2:a;default:return t}})),t+1===40?i.props.updateStage(6):i.props.updateTrial(t+1)}i.setState({giveFeedback:!1})},i.state={giveFeedback:!1},i.implicitClassification1=[0,0],i.implicitClassification2=[0,0],i.explicitClassification1=[0,0,0],i.explicitClassification2=[0,0,0],i.islanderLogic=new f,i.islanderProperties=[],i.feedbackHelper=new v(i.props.feedbackAmount,i.props.typeFeedback),i.updateImplicit=i.updateImplicit.bind(Object(o.a)(i)),i.updateExplicit=i.updateExplicit.bind(Object(o.a)(i)),i.handleKeyDown=i.handleKeyDown.bind(Object(o.a)(i)),i}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){f.checkForImplicitPhase(this.props.stage)&&("1"===e.key?this.updateImplicit(0):"2"===e.key&&this.updateImplicit(1))}},{key:"updateIslander",value:function(){return this.islanderProperties=this.islanderLogic.createSilhouetteProperties(),this.islanderProperties}},{key:"updateImplicit",value:function(e){var t=this;this.state.giveFeedback||(this.feedbackHelper.allowFeedback()|1===this.props.stage?(this.feedbackHelper.setupFeedbackColor(e===this.islanderProperties[2]),this.setState({giveFeedback:!0}),setTimeout((function(){return t.implicitTrialStageIncrement(e)}),1e3)):this.implicitTrialStageIncrement(e))}},{key:"updateExplicit",value:function(e,t){var a=this.props.trial,i=0===this.islanderLogic.getDimension()?e:t;switch(this.props.stage){case 2:a+1===3?this.props.updateStage(3):this.props.updateTrial(a+1);break;case 4:this.explicitClassification1=this.explicitClassification1.map((function(e,t){return t===a?i:e})),a+1===3?(2===this.props.typeFeedback&&this.feedbackHelper.reverseFeedbackType(),this.props.updateStage(5)):this.props.updateTrial(a+1);break;case 6:if(this.explicitClassification2=this.explicitClassification2.map((function(e,t){return t===a?i:e})),a+1===3){var n=this.implicitClassification1.concat(this.implicitClassification2,this.explicitClassification1,this.explicitClassification2);this.props.updateResults(n,this.islanderLogic.getDimension())}else this.props.updateTrial(a+1)}}},{key:"render",value:function(){var e=this.props,t=e.stage,a=e.trial;return n.a.createElement("div",null,n.a.createElement("div",{className:"Display-container"},n.a.createElement(m,{island:0,stage:t,update:this.updateImplicit}),this.state.giveFeedback?n.a.createElement("div",{className:"DisplayItem-silhouette-container"},n.a.createElement("div",{className:"DisplayItem-feedback",style:{color:this.feedbackHelper.getFeedbackColor()}},"green"===this.feedbackHelper.getFeedbackColor()?"correct":"incorrect")):n.a.createElement(b,{stage:t,trial:a,properties:this.updateIslander(),update:this.updateExplicit}),n.a.createElement(m,{island:1,stage:t,update:this.updateImplicit})))}}]),a}(n.a.Component),g=(a(20),a(21),function(e){for(var t=e.overall,a=e.stage,i=e.trial,s=!0===t?function(e,t){var a;switch(e){case 1:a=t;break;case 3:a=23+t;break;case 5:a=66+t;break;case 2:a=20+t;break;case 4:a=63+t;break;case 6:a=106+t;break;default:a=0}return Math.round(a/109*100)}(a,i):function(e,t){var a;switch(e){case 1:a=20;break;case 3:case 5:a=40;break;case 2:case 4:case 6:a=3;break;default:a=1}return t>0?Math.round(t/a*100):t}(a,i),r=!0===t?"green-boxes":"blue-boxes",l=[],c=0;c<s;c++)l[c]=n.a.createElement("div",{className:r,key:c});return n.a.createElement("div",{className:"prog"},n.a.createElement("div",{className:"header-progress-text"},!0===t?"Overall Progess:":"Current Progress:"),l,n.a.createElement("div",{className:"progress-percent"},s,"%"))}),y=function(e){var t=e.stage,a=e.trial;return n.a.createElement("div",{className:"Header-container"},0!==t&7!==t?n.a.createElement("div",{className:"Header-progress"},n.a.createElement(g,{overall:!0,stage:t,trial:a}),n.a.createElement(g,{overall:!1,stage:t,trial:a})):0===t?n.a.createElement("h1",null,"Categorization Game (Experiment)"):n.a.createElement("h1",null,"Results (selection/correct)"))},E=(a(22),function(e){var t=e.stage,a=e.amtFeedback,i=e.typeFeedback,s=e.stageChange,r=0!==t,l=function(){var e=document.querySelector('input[name="amount-feedback"]:checked').value;e&&a(parseInt(e))},c=function(){var e=document.querySelector('input[name="type-feedback"]:checked').value;e&&i(parseInt(e))};return n.a.createElement("div",{className:7===t?"Footer-container Footer-results":"Footer-container"},n.a.createElement("div",{className:"Footer-form"},"Amount of Feedback",n.a.createElement("form",{style:{color:"white"}},n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"amount-feedback",value:"100",onClick:l,defaultChecked:!0,disabled:r}),"100%",n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"amount-feedback",value:"50",onClick:l,disabled:r}),"50%",n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"amount-feedback",value:"25",onClick:l,disabled:r}),"25%",n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"amount-feedback",value:"0",onClick:l,disabled:r}),"0%")),n.a.createElement("div",{className:"feedback-forms"},"Type of Feedback",n.a.createElement("form",{style:{color:"white"}},n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"type-feedback",value:"0",onClick:c,defaultChecked:!0,disabled:r}),"True",n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"type-feedback",value:"1",onClick:c,disabled:r}),"False",n.a.createElement("input",{className:"Footer-feedback",type:"radio",name:"type-feedback",value:"2",onClick:c,disabled:r}),"Random")),0===t?n.a.createElement("div",{className:"Footer-arrow-right",onClick:function(){s(1)}}):null,7===t?n.a.createElement("div",{className:"Footer-results-legend"},n.a.createElement("div",{className:"Footer-results-legend-box",style:{backgroundColor:"green"}}),"Over Estimation",n.a.createElement("div",{className:"Footer-results-legend-box",style:{backgroundColor:"red"}}),"Under Estimation",n.a.createElement("div",{className:"Footer-results-legend-box",style:{backgroundColor:"black"}}),"Correct Estimation"):null)}),F=(a(23),function(){return n.a.createElement("div",{className:"Introduction-container"},n.a.createElement("p",{className:"Introduction-text"},"Seymour Scientist mixed up all the health data for two small populations of island people! He needs your help in discerning the difference between the two, mostly-homogenous, groups. Correctly categorize islanders so that scientists can better develop a more personalized health intervention for people on the islands. Only the silhouettes of the islanders are presented as to hide their true identities (No Peeking!).",n.a.createElement("br",null)," ",n.a.createElement("br",null),'You will see a series of silhouettes denoting islanders. Your task is to categorize each of these islanders as best you can by placing them at either island 1 or island 2 (names have been removed for the sake of anonymity). You can either click the island or press the corresponding numerical key (e.g., "1" or "2"). You will also be asked to give your idea of what a representative member of each island would be.',n.a.createElement("br",null),n.a.createElement("br",null),"Select the ",n.a.createElement("mark",null,"amount of feedback")," (how often you want to know if your answer was correct) and ",n.a.createElement("mark",null,"randomization of feedback "),"(mixing up true and false responses to your answers). Start with a training session where you get feedback. Then, embark on a journey of island categorization with your selected amount and type of feedback! Make it all the way through and you can get your results at the end!",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"No information of any kind is being collected.")))}),I=(a(24),a(9)),S=a.n(I),C=a(10),w=a.n(C),N=29-Math.floor(21/5.5),P=29+Math.floor(21/5.5),j=28.5-Math.floor(8.5/5.5),x=28.5+Math.floor(8.5/5.5),M="".concat(14.25,"vmin"),O="".concat(14.5,"vmin"),T=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"parseResults",value:function(t,a){if(10===t.length){var i=0===a?N:j,s=0===a?P:x,r=0===a?29:28.5,l=Math.round(t[0]),c=Math.round(t[1]),o=e.findImplicitBoundary(l,c),u=Math.round(t[2]),d=Math.round(t[3]),m=e.findImplicitBoundary(u,d),h=Math.round(t[4]),p=Math.round(t[5]),f=Math.round(t[6]),b=Math.round(t[7]),v=Math.round(t[8]),k=Math.round(t[9]);return n.a.createElement("div",{className:"resultsParser-flex-container"},n.a.createElement("div",{className:"resultsParser-phase-row"},n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"First Phase- Island 1"),this.addSilhouetteImage(i,l,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Second Phase- Island 1"),this.addSilhouetteImage(i,u,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"First Choice- Island 1"),this.addSilhouetteImage(i,h,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Second Choice- Island 1"),this.addSilhouetteImage(i,b,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Island 1 Average"),e.addComparisonImage(i,a))),n.a.createElement("div",{className:"resultsParser-phase-row"},n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"First Phase- Island 2"),this.addSilhouetteImage(s,c,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Second Phase- Island 2"),this.addSilhouetteImage(s,d,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"First Choice- Island 2"),this.addSilhouetteImage(s,p,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Second Choice- Island 2"),this.addSilhouetteImage(s,v,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Island 2 Average"),e.addComparisonImage(s,a))),n.a.createElement("div",{className:"resultsParser-phase-row"},n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"First Phase- Boundary"),this.addSilhouetteImage(r,o,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Second Phase- Boundary"),this.addSilhouetteImage(r,m,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"First Choice- Boundary"),this.addSilhouetteImage(r,f,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Second Choice- Boundary"),this.addSilhouetteImage(r,k,a)),n.a.createElement("div",{className:"resultsParser-result-item"},n.a.createElement("h3",null,"Boundary Average"),e.addComparisonImage(r,a))))}}},{key:"addSilhouetteImage",value:function(t,a,i){var s=e.haslargerSilhouette(t,a)?t===a?p.a:w.a:S.a,r=0===i?{width:"".concat(a/3,"vmin"),height:M}:{width:O,height:"".concat(a/3,"vmin")},l=0===i?" wide":" tall";return n.a.createElement("div",{className:"resultsParser-flex-container"},n.a.createElement("img",{className:"resultsParser-silhouette",style:r,src:s,alt:"silhouette"}),n.a.createElement("p",null,a+l," ","/",t+l))}}],[{key:"findImplicitBoundary",value:function(e,t){var a=Math.abs(e-t)/2;return e>t?t+a:e+a}},{key:"addComparisonImage",value:function(e,t){var a=0===t?{width:"".concat(e/3,"vmin"),height:M}:{width:O,height:"".concat(e/3,"vmin")},i=0===t?" wide":" tall";return n.a.createElement("div",{className:"resultsParser-flex-container"},n.a.createElement("img",{className:"resultsParser-silhouette",style:a,src:p.a,alt:"silhouette"}),n.a.createElement("p",null,e+i))}},{key:"haslargerSilhouette",value:function(e,t){return e>t}}]),e}(),D=function(e){var t=e.results,a=e.dimension,i=(new T).parseResults(t,a);return n.a.createElement("div",{className:"Results-container"},i)},z=function(e){var t=e.stage,a=e.dimension,i=e.results;return n.a.createElement(n.a.Fragment,null,0===t?n.a.createElement(F,null):n.a.createElement(D,{dimension:a,results:i}))},R=(a(25),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={stage:0,trial:0,amountFeedback:100,typeFeedback:0,results:[],dimension:0,correct:!1},e.updateAmountFeedback=e.updateAmountFeedback.bind(Object(o.a)(e)),e.updateStage=e.updateStage.bind(Object(o.a)(e)),e.updateTypeFeedback=e.updateTypeFeedback.bind(Object(o.a)(e)),e.updateTrial=e.updateTrial.bind(Object(o.a)(e)),e.updateResults=e.updateResults.bind(Object(o.a)(e)),e}return Object(c.a)(a,[{key:"updateStage",value:function(e){this.setState({trial:0,stage:e})}},{key:"updateTrial",value:function(e){this.setState({trial:e})}},{key:"updateAmountFeedback",value:function(e){this.setState({amountFeedback:parseInt(e)})}},{key:"updateTypeFeedback",value:function(e){this.setState({typeFeedback:e})}},{key:"updateResults",value:function(e,t){this.setState({stage:7,results:e,dimension:t})}},{key:"render",value:function(){var e=this.state,t=e.trial,a=e.stage,i=e.amountFeedback,s=e.typeFeedback,r=e.dimension,l=e.results;return n.a.createElement("div",null,n.a.createElement(y,{trial:t,stage:a}),0!==a&7!==a?n.a.createElement(k,{stage:a,updateResults:this.updateResults,updateTrial:this.updateTrial,updateStage:this.updateStage,trial:t,feedbackAmount:i,typeFeedback:s}):n.a.createElement(z,{stage:a,dimension:r,results:l}),n.a.createElement(E,{stage:a,typeFeedback:this.updateTypeFeedback,amtFeedback:this.updateAmountFeedback,stageChange:this.updateStage}))}}]),a}(n.a.Component));r.a.render(n.a.createElement(R,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6b51d94d.chunk.js.map