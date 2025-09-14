// Promise -> Pending, Resolve(success), Reject(error)

const categoryContainer = document.getElementById('categoryContainer')
const newsContainer = document.getElementById('newsContainer')
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
    // console.log(e.target.id)
    e.target.classList.add('border-b-4')
    loadNewsByCategory(e.target.id)
}
})

}

const loadNewsByCategory = (categoryId) => {
    console.log(categoryId)
    fetch(`  https://news-api-fs.vercel.app/api/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => {
            showNewsByCategory(data.articles)
        })
    .catch(err => {
        console.log(err)
    })
}
const showNewsByCategory = (articles) => {
   console.log(articles)
   newsContainer.innerHTML = ""
    articles.forEach(article => {
        newsContainer.innerHTML +=`
        <div>
        <div>
        <img src="${article.image.srcset[5].url}"/>
        </div>
        <h1>${article.title}</h1>
        <p>${article.time}
        </div>
        `
    })
}
loadCategory()
loadNewsByCategory('main')






























































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
