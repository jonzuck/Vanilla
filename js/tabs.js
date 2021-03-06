var blocks, headerBlocks, contentBlocks;

headerBlocks = document.getElementsByClassName("tabsSubItemHeader");
contentBlocks = document.getElementsByClassName("subItem");

toggleAccordion = function(e){
	var targetItemId = e.currentTarget.id.replace("header", "content");
	var targetItemContent = document.getElementById(targetItemId);
	for(var i = 0; i<contentBlocks.length; i++){
        removeClass(headerBlocks[i],'greyBkgrd');
        addClass(headerBlocks[i],'whtBkgrd');
		removeClass(contentBlocks[i], 'show');
		addClass(contentBlocks[i],'hide');
	}

    removeClass(e.currentTarget, 'whtBkgrd');
    addClass(e.currentTarget, 'greyBkgrd');
	removeClass(targetItemContent, 'hide');
	addClass(targetItemContent,'show');
}

addEvent(headerBlocks, 'click', toggleAccordion);