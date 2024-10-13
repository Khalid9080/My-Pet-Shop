


// ----------Create Animal Categories--
const animalCategories = () => {
    // Fetch Data from API
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log("Error fetching categories:", error));
};

/*
Example Category Object:
{
    "id": 1,
    "category": "Cat",
    "category_icon": "https://i.ibb.co/N7dM2K1/cat.png"
}
*/

//-------- Create Display Animal Categories----------
const displayCategories = (Categories) => {
    const Animal_Category_Container = document.getElementById("Animal-Category");

    Categories.forEach(item => {
        console.log(item);

        // Create the button and its content using innerHTML
        const AnimalButton = document.createElement("div");

        // Set the innerHTML with the image icon and category name
        AnimalButton.innerHTML = `
           <button onclick="toggleColorAnimal(this); loadAnimalCartegories('${item.category}')"
            class="btn btn-wide btn-lg bg-transparent category-animal flex flex-row items-center gap-3 text-2xl font-bold custom-hover hover:text-slate-900 ">
                <img src="${item.category_icon}" class="w-10 h-10" alt="${item.category} Icon">
                <span>${item.category}</span>

           </button>
        `;

        // Add the button to the Animal-Category div in the HTML
        Animal_Category_Container.appendChild(AnimalButton);
    });
};

// -------Entering the Animal Categories------
const loadAnimalCartegories = (Animal_Category_name) => {
    //alert(Animal_Category_name);

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${Animal_Category_name}`)
        .then(res => res.json())
        .then(Animal_Category => displayAnimalCard(Animal_Category.data)) //data is an object with a data property
        .catch((error) => console.log("Error fetching categories:", error));
};





//------------Button Toggle Color----------
function toggleColorAnimal(element) {
    // Clear 'clicked' class from all buttons
    const buttons = document.querySelectorAll(".category-animal");
    buttons.forEach(button => {
        button.classList.remove("clicked");
    });

    // Add 'clicked' class to the currently clicked button
    element.classList.add("clicked");
}








// --------Animal Card------------
const loadAnimalCard = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayAnimalCard(data.pets))
        .catch(error => console.log("Error fetching pets:", error))
}



/*
{
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
}

*/


// ------------- Display Animal Card------------
const displayAnimalCard = (allPets) => {
    sortedPets = allPets; // Update the currentPets array with the new data

    const cardMainContainer = document.getElementById("Card-Main-Container");
    const petsContainer = document.getElementById("Animal-Card");
    //const LikedCard = document.getElementById("Liked-Card");

    petsContainer.innerHTML = ""; // Clear the container before adding new cards


    if (allPets.length === 0) {
        cardMainContainer.classList.remove("grid");
        petsContainer.classList.remove("grid");
        //petsContainer.classList.add("flex-1");

        petsContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center space-y-5 bg-[#13131308] rounded-3xl md:px-[100px] md:py-[100px] px-[30px] py-[50px] shadow-md"> 
                        <img src="Assests/images/error.webp">
                        <h1 class="text-center text-4xl font-bold">No Information Available </h1>
                        <P class="text-center items-center"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                            its layout. The point of using Lorem Ipsum is that it has a.
                        </P>
                    </div>
                            `;
        // LikedCard.classList.add("hidden");
        return;
    }
    else {
        //petsContainer.classList.add("grid","sm:flex-initial");
        petsContainer.classList.add("grid");
        //LikedCard.classList.remove("hidden");
    }




    allPets.forEach(pet => {

        console.log(pet);
        const card = document.createElement("div"); // Corrected 'document'
        // Corrected classList.add by removing the trailing space
        card.classList.add("card", "shadow-lg", "compact", "bg-base-100", "card-border"); // No trailing spaces

        card.innerHTML = `
            <figure class="px-5 pt-5 ">
                <img
                    src="${pet.image}"
                  
                    class="rounded-xl w-full h-full object-cover" />
            </figure>
        <div class="card-body ">
            <div class="border-b mb-2 font-normal ml-2"> 

                <h2 class="card-title font-bold text-xl mb-3">${pet.pet_name}</h2>
                <p> <i class="fa-solid fa-border-all"></i> Breed: ${pet.breed}</p>
                <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
                <p><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender}</p>
                <p class="mb-2 "><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}$</p>
            </div> 
                <div class="flex flex-row items-center justify-evenly gap-5 ">
                    <button class="btn btn-sm card-button" onclick="markAsLiked('${pet.image}')"><i class="fa-regular fa-thumbs-up"></i></button>
                    <button onclick="adoptNow()" class="btn btn-sm text-color card-button">Adopt Now</button>
                    <button onclick="animalDetails('${pet.petId}')" class="btn  btn-sm text-color card-button">Details</button>
                </div>
        </div>
        `;
        petsContainer.appendChild(card);
    });
}

const animalDetails = async (Animal_Details) => {
    console.log(Animal_Details);
    const uri = ` https://openapi.programming-hero.com/api/peddy/pet/${Animal_Details}`
    const res = await fetch(uri);
    const data = await res.json();
    cardDetails(data.petData);

}

// ------------Animal Details Modal Function---------
const cardDetails = (pet_data) => {
    console.log(pet_data);
    const detailsContainer = document.getElementById("modal-content");
    detailsContainer.innerHTML = `<img src=${pet_data.image} class="w-full h-full object-cover rounded-xl"/>
                                <div class="mt-3 "> 
                                <p>${pet_data.pet_details}</p>
                                <div/>
                                <div class="mt-1">
                                <p class="font-semibold">Pet ID: ${pet_data.petId}</p>
                                <p class="font-semibold">Pet Category: ${pet_data.category}</p>
                                <p class="font-semibold">Vaccination History: ${pet_data.vaccinated_status}</p>
                                <div/>  `;
    document.getElementById("AnimalDetailsModal").showModal();


}

// ------------Adopt Now Modal Function---------
const adoptNow = () => {
    const congratulation = document.getElementById("congo-div");

    // Initialize the innerHTML with an image
    congratulation.innerHTML = `
        <div class="w-full h-full object-cover rounded-xl text-3xl">
            <img src="Assests/images/congratulations.png">
            <p id="countdown"></p>
        </div>
    `;

    let countdownTime = 1; // starting countdown value

    const countdownElement = document.getElementById("countdown");

    // Update the countdown every second
    const intervalId = setInterval(() => {
        if (countdownTime <= 3) {
            countdownElement.innerHTML = `<div class="flex flex-col items-center text-center ">
                                            <h2 class="text-2xl font-medium">Adoption process is starting soon...</h2>
                                                <h1 class="text-6xl font-bold">${countdownTime}</h1
                                        </div>`;
            countdownTime++;
        } else {
            clearInterval(intervalId); // Stop the interval when countdown finishes
            document.getElementById("adoped").close(); // Close the modal
        }
    }, 1000);

    // Show the modal 
    document.getElementById("adoped").showModal();
};




//--------Liked Button Calling Function---------
const markAsLiked = (Pet_Image) => {
    const liked_Button = document.getElementById("Liked-Card");
    const liked_Button_Div = document.createElement("div");
    liked_Button_Div.classList.add("w-[124px]", "h-[124px]");
    liked_Button_Div.innerHTML = `
        <img src="${Pet_Image}" class="w-full h-full object-cover rounded-xl" alt="Liked Pet Image">
    `;
    liked_Button.appendChild(liked_Button_Div);

} 

// //------ Sort by Price Descending Function ----
// let currentPets = [];
// const sortByPriceDescending = () => {
//     if (currentPets.length === 0) {
//         alert("No pets available to sort.");
//         return;
//     }
//     const sortedPets = [...currentPets].sort((a, b) => b.price - a.price);
//     displayAnimalCard(sortedPets);
// }
// document.getElementById('sort-price').addEventListener('click', sortByPriceDescending);


//------ Sort by Price Descending Function ----
let sortedPets = [];
const sortByPriceDescending = () => {
    if (sortedPets.length === 0) {
        alert("No pets available to sort.");
        return;
    }
    const petsContainer = document.getElementById("Animal-Card");
    petsContainer.innerHTML = `
        <div class="flex flex-row justify-center items-center w-full h-full md:ml-96 ml-0 text-color">
            <span class="loading loading-bars loading-lg"></span>
        </div>
    `;
    const sortButton = document.getElementById('sort-price');
    sortButton.disabled = true;

    setTimeout(() => {
        sortedPets = [...sortedPets].sort((a, b) => b.price - a.price);
        displayAnimalCard(sortedPets);
        sortButton.disabled = false;
    }, 3000); 
}

document.getElementById('sort-price').addEventListener('click', sortByPriceDescending);



// Animal Categories calling function--------
animalCategories();
// Animal Card calling function-------
loadAnimalCard();