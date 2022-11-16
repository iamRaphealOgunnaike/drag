// get all elements from the menu

const allnavitems = document.querySelectorAll('.navmenu ul li a');

allnavitems.forEach((item, i) => {
    item.addEventListener("mouseover",function(e) {
        // add animation class to all above list items first
        for(var j=0; j<i; j++) {
            allnavitems[j].firstChild.classList.add("slide-out-top");
        }

        //add class tp the item on which mouse is hovering

         this.firstChild.classList.add("slide-out");

         // add animation class to bottom items
         for(var k=i+j; k<allnavitems.length; k++) {
            allnavitems[k].firstChild.classList.add("slide-out-bottom");
         }         
    });

    item.addEventListener("mouseout",function(e) {
        // add animation class to all above list items first
        for(var j=0; j<i; j++) {
            allnavitems[j].firstChild.classList.remove("slide-out-top");
        }
        //add class to the item on which mouse is hovering
        this.firstChild.classList.remove("slide-out");

        // add  animation class to bottom items
        for(var k=i+1; k<allnavitems.length; k++) {
            allnavitems[k].firstChild.classList.remove("slide-out-bottom");
        }
        
    });
});