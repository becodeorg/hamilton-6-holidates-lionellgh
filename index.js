#!/usr/bin/env node


const axios = require('axios').default;


// const run = document.getElementById("run");
// const target = document.getElementById("target");

const year = "2022";

const code = "BE";

async function myNodeCLITool(){
    

    try{

        const resp = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${code}`);
        const datas = resp.data;
        console.log(datas);


    }catch(err){
        console.error(err);
    }
}

myNodeCLITool(); 

















//    run.addEventListener("click", ()=>{

//           datas.forEach((data) =>{
//            const frag = document.createDocumentFragment();
//            const li1 = document.createElement("li");
//            const li2 = document.createElement("li");
//            const li3 = document.createElement("li");
//            const li4 = document.createElement("li");
//            const li5 = document.createElement("li");
//            const li6 = document.createElement("li");
//            const li7 = document.createElement("li");
//            const li8 = document.createElement("li");
//            const li9 = document.createElement("li");
//            const br = document.createElement("br");

//            li1.textContent =`date:${data.date}`;
//            li2.textContent = `localName:${data.localName}`;
//            li3.textContent = `name:${data.name}`;
//            li4.textContent = `countryCode:${data.coutryCode}`;
//            li5.textContent = `fixed:${data.fixed}`;
//            li6.textContent = `global:${data.global}`;
//            li7.textContent = `counties:${data.counties}`;
//            li8.textContent = `launchYear: ${data.launchYear}`;
//            li9.textContent = `types: ${data.types}`;
           


//            target.append(li9);
//            target.append(li8);
//            target.append(li7);
//            target.append(li6);
//            target.append(li5);
//            target.append(li4);
//            target.append(li3);
//            target.append(li2);
//            target.append(br);
//            target.append(li1);
//            target.append(frag);
//           })
           
//        })







    