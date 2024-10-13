
# Peddy Website





## 🚀 About The Project
Peddy is a comprehensive pet adoption and pet shop website designed to connect pet lovers with their perfect companions. Whether you're looking to adopt a new furry friend or purchase essential pet supplies, Peddy provides a seamless and user-friendly experience to meet all your pet-related needs.


## Features

- Animal Categories: Browse through various pet categories such as Cats, Dogs, Birds, and more. Each category is visually represented with icons for easy navigation.
- Detailed Pet Profiles: Access comprehensive profiles for each pet, including images, breed information, age, gender, vaccination status, and pricing details.
- Adoption Process: Initiate the adoption process with user-friendly buttons and interactive modals that guide users through each step, ensuring a smooth experience.
- Liked Pets Section: Save your favorite pets by marking them as liked. Easily view and manage your liked pets in a dedicated section.
- Responsive Design: The website is fully responsive, ensuring optimal viewing and interaction across various devices and screen sizes.

## Deployment

Arrow Functions: Utilized for concise function expressions, enhancing code readability and maintainability.

```bash
    const animalCategories = () => { /* ... */ };

```
const and let Declarations: Employed for block-scoped variable declarations, preventing issues related to variable hoisting and scope leakage.
```bash
    const displayCategories = (Categories) => { /* ... */ };
    let sortedPets = [];

```
Template Literals: Used for embedding expressions and creating multi-line strings, simplifying HTML generation within JavaScript.
```bash
  card.innerHTML = `
  <figure class="px-5 pt-5">
    <img src="${pet.image}" class="rounded-xl w-full h-full object-cover" alt="${pet.pet_name}" />
  </figure>
  <!-- ... -->
`;

```
Promises and async/await: Implemented for handling asynchronous operations, such as fetching data from APIs, providing a cleaner and more readable asynchronous code structure.
```bash
  const animalDetails = async (Animal_Details) => { /* ... */ };

```
Destructuring Assignment: Applied to extract properties from objects and arrays, making data manipulation more straightforward.

```bash
  .then(data => displayCategories(data.categories))

```


## Project Live Links: 

 - [Surge Live Link](https://khalid-profile.surge.sh/)
 - [Netlify Live Link](https://khalid-pet-shop.netlify.app/)

