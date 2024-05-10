let url = "https://restcountries.com/v3.1/all";

async function display() {
        let res = await fetch(url)
        let data = await res.json()

try{
        if (data){
        let root = document.getElementById("root")

        data.forEach((e, i)=> {  

        let div = document.createElement("div");
        div.innerHTML =`
        <div class="card" style="width: 18rem; padding: 15px; margin: 10px;">
                        <div class="card-body" style="text-align: center;">
                        <img src="${e.flags.png} "alt="flag"></img>
                            <h5 class="card-title">${e.name.common}</h5>
                            <div class="card-text">${e.capital}</div>
                            <div>${e.region}</div>
                           </div>
                    </div>`
        
        root.appendChild(div);
        }
)
        }

else{

}

}
catch (error) {
        console.error(error);
}
        

}

display()