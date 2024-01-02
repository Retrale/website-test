const jobs = [
    {
    title: "Software Engineer",
    image: "https://static-00.iconduck.com/assets.00/cog-icon-2048x2048-404bqowp.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"2",
    link:"#"
},
{
    title: "Data Engineer",
    image: "https://static.thenounproject.com/png/4065150-200.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"1",
    link:"#"
},
{
    title: "Marketing Manager",
    image: "https://cdn-icons-png.flaticon.com/512/89/89865.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"1",
    link:"#"
},
{
    title: "Product Owner",
    image: "https://static.thenounproject.com/png/5085186-200.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"1",
    link:"#"
},
{
    title: "Product Manager",
    image: "https://cdn-icons-png.flaticon.com/512/7656/7656482.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"1",
    link:"#"
},
{
    title: "Senior Product Manager",
    image: "https://cdn-icons-png.flaticon.com/512/7656/7656482.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"1",
    link:"#"
},
  {
    title: "Software Engineer",
    image: "https://static-00.iconduck.com/assets.00/cog-icon-2048x2048-404bqowp.png",
    details:"Responsible for designing, developing and maintaining software systems and applications.",
    openPositions:"2",
    link:"#"
},



];

const jobsHeadng = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";


if (jobs.length == 1){
jobsHeadng.innerHTML = `${jobs.length} Job`;

}else{
    jobsHeadng.innerHTML = `${jobs.length} Jobs`;  
}


const createJobsListingCards = () => {

    jobsContainer.innerHTML = '';
    
    jobs.forEach(job => {
        if (job.title.toLowerCase().includes(searchTerm.toLowerCase())){
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");

        let image = document.createElement("img");
        image.src = job.image;

        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");

        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details")

        let detailsBTN = document.createElement("a")
        detailsBTN.href = job.link;
        detailsBTN.innerHTML = "More Details"
        detailsBTN.classList.add("details-btn");
        
        let openPositions = document.createElement("span")
        openPositions.classList.add("open-positions")

        if (job.openPositions == 1){
            openPositions.innerHTML = `${job.openPositions} open position`
        }else{
            openPositions.innerHTML = `${job.openPositions} open positions`
        }

        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBTN);
        jobCard.appendChild(openPositions);

        jobsContainer.appendChild(jobCard);
    }
    })
}

createJobsListingCards();

jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;

    createJobsListingCards();
})

function submitSearchForm() {
    const searchTerm = document.forms["searchForm"]["searchTerm"].value;

    // Redirect to the find_a_role page with the search term as a query parameter
    window.location.href = `find_a_role.html?search=${encodeURIComponent(searchTerm)}`;
}



