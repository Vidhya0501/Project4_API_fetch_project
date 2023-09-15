const head=document.createElement("header");
head.innerText="Users List";
document.body.append(head);
const sec=document.createElement("section");

/*Using asyn-await and try-catch*/

async function app(){
  try{
        const result=await fetch("https://jsonplaceholder.typicode.com/users");
        const res=await result.json();
            for (var i = 0; i < res.length; i++) {
              const div = document.createElement("div");
              div.innerHTML = `<div class="row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Name : ${res[i].name}</h5>
                        <p class="card-text">Email : ${res[i].email}</P>
                        <p class="card-text">Street : ${res[i].address.street}</P>
                        <p class="card-text">City : ${res[i].address.city}</P>
                    </div>
                </div>
              </div>
              </div>`;
            sec.append(div)
            document.body.append(sec);
            }
          } catch(error){
                  console.log(error);
                }
}

app();


/* Using .then */

// function app(){
//     const result=fetch("https://jsonplaceholder.typicode.com/users");
//     result
//       .then((data) => data.json())
//       .then((data1) => {
//         for (var i = 0; i < data1.length; i++) {
//           const div = document.createElement("div");
//           div.innerHTML = `<div class="row">
//           <div class="col-sm-6 mb-3 mb-sm-0">
//             <div class="card">
//                 <div class="card-body">
//                     <h5 class="card-title">Name : ${data1[i].name}</h5>
//                     <p class="card-text">Email : ${data1[i].email}</P>
//                     <p class="card-text">Street : ${data1[i].address.street}</P>
//                     <p class="card-text">City : ${data1[i].address.city}</P>
//                 </div>
//             </div>
//           </div>
//           </div>`;
//         sec.append(div)
//         document.body.append(sec);
//         }
//     });
//   }
//   app();




