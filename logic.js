let pink_button=document.querySelector(".create-ticket-color.color-pink");
let blue_button=document.querySelector(".create-ticket-color.color-blue");;
let parrot_button=document.querySelector(".create-ticket-color.color-parrot");;
let green_button=document.querySelector(".create-ticket-color.color-green");

let textAreaInput=document.querySelector("textarea");
let ticket_generator=document.querySelector(".create-ticket-box");

let deleteFlag=false;

pink_button.addEventListener("click",function(){
    createTicketFunc("lightpink",textAreaInput.value)
    textAreaInput.value="";
    ticket_generator.style.display="none";
    document.querySelector(".plus-sign").style.opacity="1";
});

blue_button.addEventListener("click",function(){
    createTicketFunc("skyblue",textAreaInput.value)
    textAreaInput.value="";
    ticket_generator.style.display="none";
});

parrot_button.addEventListener("click",function(){
    createTicketFunc("palegreen",textAreaInput.value)
    textAreaInput.value="";
    ticket_generator.style.display="none";
});

green_button.addEventListener("click",function(){
    createTicketFunc("green",textAreaInput.value)
    textAreaInput.value="";
    ticket_generator.style.display="none";
});

let plus_sign=document.querySelector(".plus-sign");

plus_sign.addEventListener("click",function(){
    this.style.opacity="0.4";
    ticket_generator.style.display="flex";
})

function createTicketFunc(color,text){
    let id=Math.random().toString(16).slice(4);
    let newDiv=document.createElement("div");
    
    newDiv.setAttribute("id",id);
    newDiv.setAttribute("data-color",color);
    newDiv.classList.add("ticket-element-styling");

    newDiv.innerHTML=`
        <div style="width:200px;height:20px;background-color:${color}">
        </div>
        <p>
            ${id}    
        </p>
        <p>
            ${text}
        </p>
    `;
    newDiv.addEventListener("click",function(){
        if(deleteFlag==true){
            newDiv.remove();
        }
    })
    document.querySelector(".ticket-element").appendChild(newDiv);
    localStorage.setItem("Jira_ticket",JSON.stringify(ticketArr));
}   

document.querySelectorAll(".color-filter").forEach(function(x){
    x.addEventListener("click",function(){
        let ticketArr=document.querySelectorAll(".ticket-element-styling");
        let color="";

        if(x.classList.contains("color-filter-pink")){
            color="lightpink";
        }
        else if(x.classList.contains("color-filter-blue")){
            color="skyblue";
        }
        else if(x.classList.contains("color-filter-parrot")){
            color="palegreen";
        }
        else{
            color="green";
        }
        
        helpFilter(ticketArr,color);
    })
});

document.querySelectorAll(".color-filter").forEach(function(x){
    x.addEventListener("dblclick",function(){
        let ticketArr=document.querySelectorAll(".ticket-element-styling");
        ticketArr.forEach(function(param){
            param.style.display="block";
        })

    })
})

function helpFilter(ticketArr,color){

    for(let i=0;i<ticketArr.length;i++){
        if(ticketArr[i].getAttribute("data-color")!=color){
            ticketArr[i].style.display="none";
        }
        else{
            ticketArr[i].style.display="block";
        } 
    }
}

document.querySelector(".cross-sign").addEventListener("click",function(x){
    if(deleteFlag==false){
        deleteFlag=true;
        this.style.opacity="0.4";
    }
    else{
        deleteFlag=false;
        this.style.opacity="1";
    }
})