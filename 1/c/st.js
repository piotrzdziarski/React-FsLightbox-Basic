export function st({props:{sources},st,stageIndexes}){const lastSourceIndex=sources.length-1;st.p=function(){return(stageIndexes.current===0)?lastSourceIndex:stageIndexes.current-1;}st.n=function(){return(stageIndexes.current===lastSourceIndex)?0:stageIndexes.current+1;};if(lastSourceIndex===0){st.u=function(){}}else if(lastSourceIndex===1){st.u=function(){if(stageIndexes.current===0){stageIndexes.next=1;delete stageIndexes.previous;}else{stageIndexes.previous=0;delete stageIndexes.next;}};}else{st.u=function(){stageIndexes.previous=st.p();stageIndexes.next=st.n();};}(lastSourceIndex<=2)?st.i=function(){return true}:st.i=function(i){var ci=stageIndexes.current;if((ci===0&&i===lastSourceIndex)||(ci===lastSourceIndex&&i===0))return true;var d=ci-i;return d===-1||d===0||d===1}}
