let iframe =document.querySelector(".myfame");
let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
let allInputs =document.querySelectorAll(".left textarea");
let htmlCode ,cssCode ,jsCode='';

allInputs.forEach((el,index)=>{
    el.addEventListener("keyup",()=>{
        if(index==0){
            //html code
            htmlCode=el.value;
        }

        if(index==1){
            //css code
            cssCode=el.value;
        }

        if(index==2){
            //js code
            jsCode=el.value;
        }
        iframe.contentDocument.body.innerHTML =htmlCode;
        iframe.contentDocument.head.innerHTML =`<style>${cssCode}</style>`;
        iframe.contentWindow.eval(jsCode);
    });
})

let curMode="light";
let btn =document.querySelector(".circle-btn");
btn.addEventListener("click",()=>{
    if(curMode==="light"){
        curMode="dark";
        document.querySelector(".left").style.backgroundColor="black";
        document.querySelector(".right").style.backgroundColor="black";
      
        let labels = document.querySelectorAll("label");
        labels.forEach((mylabel) => {
            mylabel.style.color = "white";
            mylabel.style.backgroundColor = "black";
        });
        
        let texts = document.querySelectorAll("textarea");
            texts.forEach((text) => {
            text.style.color = "white"; // Setting text color
            text.style.backgroundColor = "#354848"; // Setting background color
        });

       

      
       
    }else{
        curMode="light";
        document.querySelector(".left").style.backgroundColor="#dda15e";
        document.querySelector(".right").style.backgroundColor="#dda15e";

        let labels = document.querySelectorAll("label");
        labels.forEach((mylabel) => {
            mylabel.style.color = "black";
            mylabel.style.backgroundColor = "#dda15e";
        });
        let texts =document.querySelectorAll("textarea");
            texts.forEach((text) => {
            text.style.color = "black"; // Setting text color
            text.style.backgroundColor = "white"; // Setting background color
        });
    }
})


