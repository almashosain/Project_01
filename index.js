// Promise -> Pending, Resolve(success), Reject(error)

const categoryContainer = document.getElementById('categoryContainer')

const loadCategory = () => {
    fetch('https://news-api-fs.vercel.app/api/categories')   // Promise 
.then((res) => res.json())  // res -- promise
.then((data) => {
//  console.log(data.categories);
 const categories = data.categories
//  console.log(categories)
 showCategory(categories)
})
.catch((err) => {
    console.log(err);
})
}

const showCategory = (categories) => {
     categories.forEach(cat => {
    categoryContainer.innerHTML += 
    `<li id="${cat.id}" class="cursor-pointer hover:border-b-4 hover:border-red-600 border-red-600">${cat.title}</li>

    `
 });

 categoryContainer.addEventListener('click',(e)=> 
    {
        const allLi = document.querySelectorAll('li')
     allLi.forEach(li =>{
        li.classList.remove('border-b-4')
     })   

if(e.target.localName === 'li'){
    console.log(e.target)
    e.target.classList.add('border-b-4')
}
})

}


loadCategory()































































// const loadCategoryAsync = async() => {

//    try {
//       const res = await fetch('https://news-api-fs.vercel.app/apicategories')
//     const data = await res.json()
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
  
// }
// loadCategoryAsync()
