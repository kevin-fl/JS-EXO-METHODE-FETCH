//METHODE FETCH 

//--> recuperer des données , api meteo par exemple , pokedex , nous les renvoi sous forme JSon

fetch('https://jsonplaceholder.typicode.com/users/1')    //--> recup l objet 1 de users 
    .then(Response => Response.json())
    .then(json => console.log(json))




// autre exo plus complet sur la methode a suivre 


const promise = fetch('https://jsonplaceholder.typicode.com/users');

promise
    .then((response) => {                       //--> 
        console.log(response);

        const usersData = response.json();      //--> on recupere la reponse sous format json 

        console.log(usersData);

        usersData.then((utilisateur) => {       //--> si c est un succes , on veut les donner des utilisateurs
            console.log(utilisateur[1].address); //--> on veut l adresse de l utilsateur 2
        });
    })
        .catch((err) => console.log(err));      // --> si y a une erreur , signifier l erreur 





        // Methode Fetch + recup certains elements de l Api + afficher la logique js dans le code html ! 

        