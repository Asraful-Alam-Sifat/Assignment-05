let allIssuesData = [];

const searchResult = document.getElementById("search-container");
const searchBtn = document.getElementById("new-issue");


const searchIssue = (data) => allIssuesData = data;

const inputSearch = document.getElementById("search");

inputSearch.addEventListener("input", (e) => {
    const searchInputValue = e.target.value.toLowerCase();
    
    
    searchResult.innerHTML = '';
    
    
    if (!searchInputValue) {
        searchResult.classList.add("hidden");        
    }

  
    const filteredIssues = allIssuesData.filter(issue => 
        issue.title.toLowerCase().includes(searchInputValue)
    );

    
    showSearchItems();

    
    if (filteredIssues.length === 0) {
        searchResult.classList.remove("grid");
        searchResult.innerHTML = `
            <div class="text-center w-full mx-auto text-gray-500 bg-base-100 h-20 flex justify-center items-center rounded-lg  p-10 m-20">
                <p >No issues found matching "${e.target.value}"</p>
            </div>
        `;
        return;
    }

    
 filteredIssues.forEach(issue => {
      const date = new Date(issue.createdAt);
     const formattedDate = date.toLocaleDateString("en-US");

        const statusIcon = issue.status.toLowerCase() === "open"
            ? "assets/Open-Status.png"
            : "assets/Closed- Status .png";

        const newCard = document.createElement("div");
        
        newCard.className = issue.status.toLowerCase() === "open"
            ? `border-t-6 border-(--issue-open-color) rounded-lg`
            : `border-t-6 border-(--issue-closed-color) rounded-lg`;

          newCard.innerHTML = `
            <div class="issue-card bg-base-100 w-full h-[350px] rounded-lg p-5 mx-auto">
                <div class="flex justify-between items-center mb-4">          
                    <img src="${statusIcon}" alt="">
                    ${issue.priority.toLowerCase() === "high" 
                        ? `<span class="priority-badge bg-red-100 text-red-600 px-6 py-0.5 rounded-xl font-semibold text-xm">${issue.priority}</span>`
                        : issue.priority.toLowerCase() === "medium"
                            ? `<span class="priority-badge bg-yellow-100 text-yellow-600 px-6 py-0.5 rounded-xl font-semibold text-xm">${issue.priority}</span>` 
                            : issue.priority.toLowerCase() === "low"
                                ? `<span class="priority-badge bg-gray-200 text-gray-600 px-6 py-0.5 rounded-xl font-semibold text-xm">${issue.priority}</span>` 
                                : ""}   
            </div>

            <div class="card-main space-y-1 mb-5">
                <h3 class="card-title font-semibold text-lg text-(--primary-text-color)">${issue.title}</h3>
                <p class="card-desc font-normal text-sm text-(--sub-text-color)">${issue.description}</p>
                <div class="labels-box mt-5">
                    ${issue.labels[0] ? `
                        <span class="bg-red-100 text-red-700 px-5 py-1 rounded-2xl font-medium text-xs border-2 border-red-300">
                            <i class="fa-solid fa-bug w-1 h-1"></i> ${issue.labels[0]}
                        </span>` : ""}
                    ${issue.labels[1] ? `
                        <span class="bg-yellow-100 text-yellow-700 px-5 py-1 rounded-2xl font-medium text-xs border-2 border-yellow-300">
                            <i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}
                        </span>` : ""}
                </div>   
            </div>
            <div class="card-footer border-t-2 border-gray-200 pt-5 space-y-2">
                <p class="text-(--sub-text-color)">#${issue.id} By ${issue.author}</p>
                <p class="text-(--sub-text-color)">${formattedDate}</p>
            </div>
          </div>
        `;

        searchResult.appendChild(newCard);
    });
});

const showSearchItems = () => {
    searchResult.classList.remove("hidden");
    allIssueContainer.classList.add("hidden");
    openContainer.classList.add("hidden");
    closedContainer.classList.add("hidden");
};