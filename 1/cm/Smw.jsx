import React,{useState}from"react";import{ABSOLUTED_CLASS_NAME,FLEX_CENTERED_CLASS_NAME,FULL_DIMENSION_CLASS_NAME,TRANSFORM_TRANSITION_CLASS_NAME}from"../cn/classes-names";import Saw from"./Saw.jsx";export default function({o,i}){var{props:{slideDistance},smw,smwm,st}=o,t=0;smwm[i]={};var wm=smwm[i];wm.s=function(){w().style.display="flex"};wm.h=function(){w().style.display="none"};wm.a=function(){w().classList.add(TRANSFORM_TRANSITION_CLASS_NAME)};wm.d=function(){w().classList.remove(TRANSFORM_TRANSITION_CLASS_NAME)};wm.n=function(){w().style.removeProperty("transform")};wm.v=function(v){t=v;return wm;};wm.ne=function(){s(-dt())};wm.z=function(){s(0)};wm.p=function(){s(dt())};function w(){return smw[i].current}function s(v){w().style.transform=`translateX(${v+t}px)`;t=0}function dt(){return(1+slideDistance)*innerWidth}return <div ref={smw[i]}className={`${ABSOLUTED_CLASS_NAME} ${FULL_DIMENSION_CLASS_NAME} ${FLEX_CENTERED_CLASS_NAME}`}style={st.i(i)?{}:{display:"none"}}><Saw o={o}i={i}/></div>};