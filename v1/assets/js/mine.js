const features = [
    {
        img : "assets/img/project/project3/1.jpg",
        name : "Light Weight",
        desc : "AD-Block is featured  by its light weight and durability compared to all the available building systems, because the weight of a square meter is approximately equal to the weight of a square meter of plaster on both sides, which makes it the ideal building system.        ",
    },
    {
        img : "assets/img/project/project6/1.jpg",
        name : "Fire resistence & sound insulation",
        desc : "AD-Block  featured by high resistance to fire, as the natural gypsum contains a large amount of water, which leads to higher fire resistance and more heat insulation, as the gypsum material regulates Humidity balance inside the building.",
    },
    {
        img : "assets/img/project/project3/22.jpeg",
        name : "Smooth Surface",
        desc : "This is one of the most important features of AD-Block which leads to low cost of putty needed for painting process.        ",
    },
    {
        img : "assets/img/project/project5/2.jpg",
        name : "Low Cost",
        desc : "Building with AD-Block saves a minimum of 25% of the construction cost compared with available building system.  Its heat insulation, in turn, is reflected in saving energy and its light weight affects directly the cost of concrete and steel works for the structure.        ",
    },

    {
        img : "assets/img/project/project5/1.jpeg",
        name : "Noise cancellation",
        desc : "AD-Block has excellent performance in absorbing and isolating sounds more than any other structural system because they contain vacuums and water  then it works on sound distortion.        ",
    },
]

init = () => {
    const params = new URLSearchParams(window.location.search)
    const feature=features[parseInt(params.get('feature')) -1]
    const titles = document.querySelectorAll('.feature-title')
    const desc = document.querySelector('.feature-desc')
    const img = document.querySelector('.feature-img')
    img.setAttribute("style" ,  `background-image : url(${feature.img}) !important`)
    // img.style.backgroundImage = `url(${feature.img}) !important`;
    titles.forEach((title)=>{
        title.innerHTML = feature.name
    })
    desc.innerHTML = feature.desc
    console.log("titles")
}
if (document.readyState !== "loading") {
    init()
} else {
    document.addEventListener("DOMContentLoaded", init);
}
