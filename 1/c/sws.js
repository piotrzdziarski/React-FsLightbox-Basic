import{FADE_IN_CLASS_NAME,FADE_IN_STRONG_CLASS_NAME,FADE_OUT_CLASS_NAME}from"../cn/classes-names";import{removeFromElementClassIfContains}from"../h/elements/removeFromElementClassIfContains";export function sws({isl,stageIndexes,saw,smwm,st,sws:self}){self.a=function(){for(var k in stageIndexes){smwm[stageIndexes[k]].s()}};self.b=function(i){if(i!==undefined&&!st.i(i)){smwm[i].h();smwm[i].n();}};self.c=function(){for(var k in stageIndexes){self.d(stageIndexes[k]);}};self.d=function(i){if(!isl[i]){return;}var w=saw[i];removeFromElementClassIfContains(w,FADE_IN_STRONG_CLASS_NAME);removeFromElementClassIfContains(w,FADE_IN_CLASS_NAME);removeFromElementClassIfContains(w,FADE_OUT_CLASS_NAME)}}
// In the "b" method, it's checked whether the index is not undefined because it may be when there are only two sources.
