let  links = document.getElementsByClassName("tablinks");
let  contents = document.querySelectorAll(".tabcontents");


// // function opentab(tabName){
// //     for(link of links){
// //         link.classlist.remove("active");
// //     }
// //     for(tabcontent of tabcontents){
// //         content.Classlist.remove("active-tab");
// //     }
// // }
// // console.log("hey!")

// let skill = document.querySelectorAll("Skill")

// skill.addEventListner("click",()=>{
//     console.log("button was pressed ");
// })
function openTab(name){
   for(link of links){
    link.classList.remove("active");
   }
   for(content of contents){
    content.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active");
   // document.getElementById(name).classList.add("active-tab");           not working issue 
   let arg = document.getElementById(name);
   arg.classList.add("active-tab");

    
}


