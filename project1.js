console.log(' this is working '
)

    //    Project 1

// function button1(color){
//     document.getElementById('color').style.backgroundColor=color;
// }


// function button4(){
//     document.getElementById('color').style.backgroundColor="#"+ Math.floor(Math.random()*11384);
// }






        //    Project 2



// let img1=document.querySelector('#img3').addEventListener(
//     'click',function(){
//         if(document.getElementById('img1').style.display == "none"){
//         document.getElementById('img1').style.display="block";
//         }else{
//             document.getElementById('img1').style.display="none";
//         }
    
    
    
//     }
    
// )

// let img2=document.querySelector('#img4').addEventListener(
//     'click',function(){
//         if(document.getElementById('img2').style.display == "none"){
//             document.getElementById('img2').style.display="block";
//             }else{
//                 document.getElementById('img2').style.display="none";
//             }
        
//     }
// )













// Project 4


// function button4(){
//     document.getElementById('date').innerHTML=Date ();
// }
// // console.log(button4)
// function button5(){
//     a=new Date();
//     a.setDate(20);
//     document.getElementById('date').innerHTML=a;
// }

// function button6(){
//     a=new Date();
//     a.setDate(4) ;
//     a.setMonth(9);
//     document.getElementById('date').innerHTML=a;
// }


// let l=setInterval(() => {
//  let date = new Date();

// }, 1000);

// console.log(l)










// Project 5

// let a =document.getElementById('text');
// let b=document.getElementById('add').addEventListener('click',function fun(){
    


    
//  aa=a.value;
 
 
//  if(aa != ""){
//  c=document.createElement('div');
//    c.classList.add('div');
//     d=document.createTextNode(aa);
//     c.appendChild(d);

//     let ff=document.createElement('button')
//     ff.id="button4"
//     ff.innerText="Edit";
//     ff.addEventListener('mouseover',function(){
   
// ll=document.createElement('input');
// ll.type='text';
// ll.className="cls";





    // })







// let e=document.createElement('button')
// e.id="button3"
// e.innerText="Remove";
// e.addEventListener('click',function(){

//     e.parentNode.remove()


// })

// c.appendChild(e);
// c.appendChild(ff);

// document.getElementById('output').appendChild(c);
//     r=a.value;
//  }else{
//     alert('Enter some text')
//  }
// })






// let re=document.getElementById('reset').addEventListener('click',function re(){

// document.getElementById('reset').addEventListener('click',function name() {
    
// let tt=document.getElementById('output');
// tt.innerHTML=null;

// })
// })







// console.log('this is working')



let button=document.getElementById('button').addEventListener('click',function addmore(){
    let div=document.createElement('div');
    div.className="div1";
    
    
    
    let input=document.createElement('input');
    input.type='number';
    input.id="input1";
    input.className="input";
    
    
    div.appendChild(input);
    let input2=document.createElement('input');
    input2.type='number';
    input2.id="input2";
    input2.className="input";
    div.appendChild(input2);
    
    
    let input3=document.createElement('input');
    input3.type='number';
    input3.id="input3";
    input3.className="input";
    div.appendChild(input3);
    
    let input4=document.createElement('input');
    input4.type='number';
    input4.id="input3";
    input4.className="input44";
    div.appendChild(input4);
    
    
  setInterval(() => {
    input4.value =Number(input.value) + Number(input2.value) + Number(input3.value);
    let input5=document.getElementById('input5');
    
    let demo =document.getElementById('demo');
    // console.log(div.childNodes[3].value)
    // console.log(demo.children.length)
if(demo.children.length != 1){
    let fake=document.querySelectorAll('.input44');
    for(i=0;i<fake.length;i++){
    //    console.log( input5.value =Number(demo.lastElementChild.childNodes[3].value) + Number(demo.firstElementChild.lastElementChild.value)   );
    //    console.log(Array.from(document.querySelectorAll('.input44')).toLocaleString)
    // console.log(Array.from())
    

    // var btnsArr = Array.prototype.slice.call(fake.value);
// var btnsArr= Array.apply(fake);
// Array.from(fake)
//     console.log(fake);
console.log()   


    // }
}}
    else{
        input5.value = Number(input4.value);
    }

// console.log(demo.children)
    // console.log(input5)
// for(i=0;i<z;i++){
    
// console.log(div.innerHTML)    
// }
  }, 1000);

    
    
    document.getElementById('demo').appendChild(div);
    
})






















