const loadAllIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
    .then(res => res.json())
    .then(data => displayIssues(data.data))
    // console.log(data.data)
}

const displayIssues= (issues) => {
    const allIssuesContainer = document.getElementById("all-issue-container");
    allIssuesContainer.innerHTML = "";

    issues.forEach(issue => {
        const date = new Date(issue.createdAt)
        const formatedDate = date.toLocaleDateString("en-US")
        // console.log(date)
        // console.log(issue)
        const newCard = document.createElement("div");
        newCard.classList.add("bg-base-100","w-full","rounded-lg","p-5","mx-auto" );
        newCard.innerHTML = `
          <div class="flex justify-between items-center mb-4">
                    <img src="assets/Open-Status.png" alt="">
                    <span class="priority-badge bg-red-100 text-red-600 px-5  rounded-xl font-semibold text-xs ">${issue.priority}</span>
                </div>

             <div class="card-main space-y-1 mb-5">
                 <h3 class="card-title font-semibold text-lg text-(--primary-text-color) ">${issue.title}</h3>
                <p class="card-desc font-normal text-sm text-(--sub-text-color) ">${issue.description}</p>

                <div class="labels-box mt-5">
                    
                    ${issue.labels[0] ? `
                        <span class="bg-red-100 text-red-700 px-5 py-1 rounded-2xl font-medium text-xs border border-red-300 "><i class="fa-solid fa-bug w-1 h-1"></i>${issue.labels[0]}</span>` : ""}
                        
                    ${issue.labels[1] ? `
                       <span class="bg-yellow-100 text-yellow-700 px-5 py-1 rounded-2xl font-medium text-xs border border-yellow-300"><i class="fa-solid fa-life-ring"></i>${issue.labels[1]}</span> ` : ""}
                    
                   
                </div>   
             </div>
                

                <div class="card-footer border-t-2 border-gray-200 pt-5 space-y-2">
                    <p class="text-(--sub-text-color)">#${issue.id } By ${issue.author}</p>
                    <p class="text-(--sub-text-color)">${formatedDate}</p>
                </div>
        `;
        allIssuesContainer.appendChild(newCard);
    });


}

loadAllIssues();