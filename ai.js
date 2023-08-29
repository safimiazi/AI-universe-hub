const loadTools = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools =data.data.tools;
    displayTools(tools)
}

const displayTools =(tools) =>{
    const cardContainer = document.getElementById('card-container');
    
    tools.forEach(tool => {
        console.log(tool)
        const toolsCard = document.createElement('div');
        toolsCard.classList= ` card  bg-base-100 border`;
        toolsCard.innerHTML = `
        <figure class="p-5 my-2">
        <img src="${tool.image}" alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold">Features</h2>
          <ul>
          <li>${tool.features[0]}</li>
          <li>${tool.features[1]}</li>
          <li>${tool.features[2]}</li>
          </ul>
          <hr>
          <div class="flex items-center justify-between my-3">
          <div>
            <h5 class="text-[18px] font-bold">${tool.name}</h5>
          <h6><i class="fa-solid fa-calendar-days" style="color: #000000;"></i> <span>11/01/2022</span></h6>
          </div>
            <button class=" rounded-full border py-3 bg-[#FEF7F7] hover:bg-[#efdddd] px-4"><i class="fa-solid fa-arrow-right" style="color: #e66b28;"></i></button>
          </div>
        </div>
        
        `
        cardContainer.appendChild(toolsCard)
    });

}

loadTools()

