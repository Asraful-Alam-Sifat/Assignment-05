const loadingSpinner = document.getElementById("loading-spinner");

const showSpinner = () => {
    loadingSpinner.classList.remove("hidden");
    allIssueContainer.innerHTML = "";
}

const hideSpinner = () => {
    loadingSpinner.classList.add("hidden");
}