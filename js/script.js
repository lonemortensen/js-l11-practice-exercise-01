/*PROJECT: RANDOM USER GENERATOR*/

const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");


/*Get user data from API:*/
const getData = async function (numUsers) {
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    console.log(data);
    const userResults = data.results;
    displayUsers(userResults);
}; 

getData(1);

/*Display user data on webpage:*/
const displayUsers = function (userResults) {
    randomFolks.innerHTML = ""; //Clear the randomFolks element
    for (let user of userResults) {
        let country = user.location.country;
        let name = user.name.first;
        let imageURL = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageURL} alt="User avatar"/>
        `;
        randomFolks.append(userDiv);
    }
};
 /*Drop-down list to change number of user data (profiles) displayed:*/
selectUserNumber.addEventListener("change", function(e) { //selectUserNumber is the target of the dropdown list
    const numUsers = e.target.value;
    getData(numUsers);
});
