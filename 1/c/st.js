export function st({props:{sources},st:o,stageIndexes}){const lastSourceIndex=sources.length-1;o.getPreviousSlideIndex=()=>{return(stageIndexes.current===0)?lastSourceIndex:stageIndexes.current-1;};o.getNextSlideIndex=()=>{return(stageIndexes.current===lastSourceIndex)?0:stageIndexes.current+1;};if(lastSourceIndex===0){o.u=()=>{};}else if(lastSourceIndex===1){o.u=()=>{if(stageIndexes.current===0){stageIndexes.next=1;delete stageIndexes.previous;}else{stageIndexes.previous=0;delete stageIndexes.next;}};}else{o.u=()=>{stageIndexes.previous=o.getPreviousSlideIndex();stageIndexes.next=o.getNextSlideIndex();};}(lastSourceIndex<=2)?o.i=()=>true:o.i=(index)=>{const currentIndex=stageIndexes.current;if((currentIndex===0&&index===lastSourceIndex)||(currentIndex===lastSourceIndex&&index===0))return true;const difference=currentIndex-index;return difference===-1||difference===0||difference===1;};}