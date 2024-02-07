fetch("data/trellies.json").then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        for(let i = 0; i < data.trellies.length; i++){
            addSection(data.trellies[i]);
        }
    }
)

function addSection(data){
        const main = document.querySelector("main");
        let toBeAddedSection = document.createElement("section");
        toBeAddedSection.classList.add("tasks");
        main.appendChild(toBeAddedSection);
        
        let toBeAddedHeader = document.createElement("header");
        toBeAddedHeader.classList.add("tasks__header");
        toBeAddedSection.appendChild(toBeAddedHeader);

        let toBeAddedH2 = document.createElement("h2");
        toBeAddedH2.classList.add("tasks__header--h2");
        toBeAddedHeader.appendChild(toBeAddedH2);
        toBeAddedH2.innerText = data.title;

        let toBeAddedWrapper = document.createElement("div");
        toBeAddedWrapper.classList.add("tasks__headerWrapper");
        toBeAddedHeader.appendChild(toBeAddedWrapper);

        let toBeAddedNumber = document.createElement("div");
        toBeAddedNumber.classList.add("tasks__headerWrapper--number");
        toBeAddedWrapper.appendChild(toBeAddedNumber);
        toBeAddedNumber.innerText = data.activities.length;
        
        let toBeAddedEdit = document.createElement("button");
        toBeAddedEdit.classList.add("tasks__headerWrapper--edit");
        toBeAddedWrapper.appendChild(toBeAddedEdit);
        toBeAddedEdit.innerText = data.edit;

        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedSection.appendChild(toBeAddedUl);
        for(let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);
            let toBeAddedLabel = document.createElement("div");
            toBeAddedLabel.classList.add("tasks__listItem--label");
            toBeAddedLi.appendChild(toBeAddedLabel);
            toBeAddedLabel.innerText = data.activities[i].label;
            let toBeAddedP = document.createElement("p");
            toBeAddedLi.appendChild(toBeAddedP);
            toBeAddedP.innerText = data.activities[i].description;
    }
}
