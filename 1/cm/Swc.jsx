import React from"react";import{ABSOLUTED_CLASS_NAME,FULL_DIMENSION_CLASS_NAME}from"../cn/classes-names";import Smw from"./Smw.jsx";import{d}from"./d";export default({o})=>{var{core:{slideSwipingDown:{listener:slideSwipingDownListener}},props:{sources},}=o,smwjsxa=[];for(let i=0;i<sources.length;i++){smwjsxa.push(<Smw o={o}i={i}key={i}/>);}return<div className={`${ABSOLUTED_CLASS_NAME} ${FULL_DIMENSION_CLASS_NAME}`}onPointerDown={function(e){d(o,e)}>{smwjsxa}</div>};
