import{Uab}from"./Uab";import{CURSOR_GRABBING_CLASS_NAME}from"../cn/classes-names";export function Ua({componentsServices,core:{lightboxCloser},elements:{container},p,r}){var b=r(Uab);this.n=function(){componentsServices.hideSlideSwipingHovererIfShown();if(!p.isSourceDownEventTarget){lightboxCloser.closeLightbox()}p.isSwiping=false};this.s=function(){if(p.swipedX>0){b.p()}else{b.n()}componentsServices.hideSlideSwipingHovererIfShown();container.current.classList.remove(CURSOR_GRABBING_CLASS_NAME);p.isSwiping=false}}