const loadTools = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools =data.data.tools;
    displayTools(tools)
}

const displayTools =(tools) =>{
    const cardContainer = document.getElementById('card-container');
    
    tools.forEach(tool => {
        // console.log(tool)
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
            <button onclick="handleShowDetails('${tool.id}')" class=" rounded-full border py-3 bg-[#FEF7F7] hover:bg-[#efdddd] px-4"><i class="fa-solid fa-arrow-right" style="color: #e66b28;"></i></button>
          </div>
        </div>
        
        `
        cardContainer.appendChild(toolsCard)
    });

}


const handleShowDetails = async (id) => {
    console.log(id)
    const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const tool = data.data;
    openModel(tool)
}

const openModel = (data) => {
console.log(data.input_output_examples[0].input)
  
    my_modal_3.showModal()
    const xyz = document.getElementById('openModel');
    xyz.innerHTML = `
    <div class="bg-[#f4ecec] p-5 border rounded-xl flex-1" >
                <h4 class="md:text-2xl font-bold mb-6">${data.description}</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <div class="bg-white p-3 rounded">
                        <p class=" text-center">${data.pricing[0].price} ${data.pricing[0].plan}</p>
                    </div>
                    <div class="bg-white p-3 rounded">
                        <p class=" text-center" >${data.pricing[1].price} ${data.pricing[1].plan}</p>
                    </div>
                    <div class="bg-white p-3 rounded">
                        <p class=" text-center">${data.pricing[2].price} ${data.pricing[2].plan}</p>
                    </div>
                    
                </div>
                <div class="md:flex gap-10">
                    <div>
                        <h4 class="text-xl font-bold">Features</h4>
                        <ul>
                            <li>${data.features[1].feature_name}</li>
                            <li>${data.features[2].feature_name}</li>
                            <li>${data.features[3].feature_name}</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold">Features</h4>
                        <ul>
                            <li>${data.integrations[0]}</li>
                            <li>${data.integrations[1]}</li>
                            <li>${data.integrations[2]}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 border flex-1">
  <figure><img src="${data.image_link[0]}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-xl font-bold">${data.input_output_examples[0].input}</h2>
    <p>${data.input_output_examples[0].output}</p>
  </div>
</div>
    
    `
}

loadTools()

