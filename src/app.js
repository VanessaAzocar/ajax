//me traigo el boton y el div vacio
const btn = document.querySelector("button"); //solo cuando quiero que agarre el primero
const container = document.getElementById("root");
//ruta 
const usersJSON = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";
//aqui hace la consulta
fetch(usersJSON)
//la promesa, si se cumple...
.then(response => response.json())
//esta recibiendo la respuesta de lo consultado
.then(data => {
  console.log(data);
  renderUsers(data);
})

const renderUsers = data => {
  //cuando se apriete el boton recorra todos los objetos y me devuelva el nombre de cada una
  btn.addEventListener("click", () => {
    //forEach no se tiene que poner lenght ni poner variable (i) porque solo sabe que debe recorrer todo
     //+= concatena va a escribir todos los nombres uno tras otro*/
    const render = data.forEach (element => {
      //element.name es igual que si en un for hicieramos arreglo[i].name
      return container.innerHTML += `<p>${element.name}</p>`
     
    })
    return render;
  })
}