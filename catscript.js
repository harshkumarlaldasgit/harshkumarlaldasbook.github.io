let iArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  function amt(){
    let pid=document.getElementById('pid');
    let hid=document.getElementById('hid');
    let u= new Object();
            u.Name=pid.innerHTML;
            u.amount=hid.innerHTML;
            iArray.push(u);
            localStorage.setItem('cart', JSON.stringify(iArray));
   
  }
  
 function amt1(){
    let pid1=document.getElementById('pid1');
    let hid1=document.getElementById('hid1');
    
    let u= new Object();
            u.Name=pid1.innerHTML;
            u.amount=hid1.innerHTML;
            iArray.push(u);
            localStorage.setItem('cart', JSON.stringify(iArray));
  }
 

  function amt2(){
    let pid2=document.getElementById('pid2');
    let hid2=document.getElementById('hid2');
    
    let u= new Object();
            u.Name=pid2.innerHTML;
            u.amount=hid2.innerHTML;
            iArray.push(u);
            localStorage.setItem('cart', JSON.stringify(iArray));
  }
  function amt3(){
    let pid3=document.getElementById('pid3');
    let hid3=document.getElementById('hid3');
    
    let u= new Object();
            u.Name=pid3.innerHTML;
            u.amount=hid3.innerHTML;
            iArray.push(u);
            localStorage.setItem('cart', JSON.stringify(iArray));
  }
  function amt4(){
    let pid4=document.getElementById('pid4');
    let hid4=document.getElementById('hid4');
    
    let u= new Object();
            u.Name=pid4.innerHTML;
            u.amount=hid4.innerHTML;
            iArray.push(u);
            localStorage.setItem('cart', JSON.stringify(iArray));
  }
  
 
  let total=0;
  for(let i=0;i<iArray.length;i++){
    $("#cost").append(iArray[i].Name + "<br>");
    $("#writescr").append(iArray[i].amount + "<br>");
    
    total=total+Number(iArray[i].Name);
       console.log(total);
  }
  
  document.write(total);
  document.getElementById('tot').innerHTML=total;
  console.log(total);
  localStorage.setItem('total',JSON.stringify(total));

  
  
  
  