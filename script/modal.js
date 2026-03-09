
const loadIssueModal = async (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    
    const res = await fetch(url);
    const data = await res.json();
   displayModal(data.data)
   
}

const displayModal = (obj) => {

 const date = new Date(obj.createdAt);
        const formatedDate = date.toLocaleDateString("en-US");

    const modalContainer = document.getElementById("modal-container");
    

    obj.status.toLowerCase() === "open"
        ?modalContainer.className = `border-t-6 border-(--issue-open-color) rounded-lg`
        :modalContainer.className = `border-t-6 border-(--issue-closed-color) rounded-lg`

        modalContainer.innerHTML = `
        <div class="modal-card p-5 ">
        <h1 class="font-bold text-2xl text-(--primary-text-color) capitalize">${obj.title}</h1>
       
        <div class="flex items-center gap-5 ">
            <div>
            
                ${obj.status.toLowerCase() === "open" 
                    ? ` <span class="priority-badge bg-green-600 text-white px-6 py-0.5 rounded-xl font-semibold text-xm ">${obj.status}</span>`
                    : obj.status.toLowerCase() === "closed" 
                        ? ` <span class="priority-badge bg-purple-600 text-white px-6 py-0.5  rounded-xl font-semibold text-xm ">${obj.status}</span>` 
                        : "" }
            </div>
            <ul class="flex gap-5 my-5">
                <li class="text-(--sub-text-color)">Opened by ${obj.author}</li>
                <li class="text-(--sub-text-color)">${formatedDate}</li>
            </ul>
        </div>
        
        <div class="modal-body mt-5 mb-5">
             <div class="label mb-5">
            ${obj.labels[0] 
                    ? `<span class="bg-red-100 text-red-700 px-5 py-1 rounded-2xl font-medium text-xs border-2 border-red-300 "><i class="fa-solid fa-bug w-1 h-1"></i> ${obj.labels[0]}</span>` 
                    : ""} ${obj.labels[1] 
                        ? `<span class="bg-yellow-100 text-yellow-700 px-5 py-1 rounded-2xl font-medium text-xs border-2 border-yellow-300"><i class="fa-solid fa-life-ring"></i> ${obj.labels[1]}</span>` 
                        : ""}
        </div>

        <p class="font-normal text-base text-(--sub-text-color) ">${obj.description}</p>
        </div>
       

        <div class="modal-footer bg-gray-200 p-5 rounded-md flex justify-around">
            <div>
                <p class="text-base text-(--sub-text-color) font-normal">Assignee :</p>
                <p class="font-bold text-(--primary-text-color) text-lg">${obj.assignee ? obj.assignee : obj.author}</p>
            </div>
            <div>
                <p class="text-base text-(--sub-text-color) font-normal mb-1.5">Priotirity</p>
                <div>
                    ${obj.priority.toLowerCase() === "high" 
                    ? ` <span class="priority-badge bg-red-600 text-white px-3 py-0.5 rounded-xl font-semibold text-xm ">${obj.priority}</span>`
                    : obj.priority.toLowerCase() === "medium" 
                        ? ` <span class="priority-badge bg-yellow-600 text-white px-3 py-0.5  rounded-xl font-semibold text-xm ">${obj.priority}</span>` 
                        : obj.priority.toLowerCase() === "low" ? 
                            ` <span class="priority-badge bg-gray-600 text-white px-3 py-0.5  rounded-xl font-semibold text-xm ">${obj.priority}</span>` 
                            : "" }
                </div>
            </div>
        </div>

    </div>
        `;

        document.getElementById("issue_modal").showModal();

  
} 