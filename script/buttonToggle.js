
const showContent = (id) => {
     const btns = ["menu-btn-all", "menu-btn-open", "menu-btn-closed"]
loadAllIssues();
     for(let btn of btns){
        const button = document.getElementById(btn);
        
        button.classList.remove("menu-active");
        button.classList.add("bg-white", "text-black","border-gray-200","border-2");
     }

     const clickedBtn = document.getElementById(id);
     clickedBtn.classList.remove("bg-white", "text-black","border-gray-200","border-2")
     clickedBtn.classList.add("menu-active","bg-primary");


     if(id === "menu-btn-all"){
        allIssueContainer.classList.remove("hidden");
        openContainer.classList.add("hidden");
        closedContainer.classList.add("hidden");
         
     }else if(id === "menu-btn-open"){
        allIssueContainer.classList.add("hidden");
        openContainer.classList.remove("hidden");
        closedContainer.classList.add("hidden");

     }else if(id === "menu-btn-closed"){
        allIssueContainer.classList.add("hidden");
        openContainer.classList.add("hidden");
        closedContainer.classList.remove("hidden");
     }

}