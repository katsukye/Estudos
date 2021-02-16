const modalOverlay = document.querySelector('.modal-overlay');
const fullscreen = document.querySelector(".fullscreen")
const modal = document.querySelector('.modal')
const posts = document.querySelectorAll('.post');

for(let post of posts){
    post.addEventListener("click", function(){
        const postID = post.getAttribute("id")
        modal.classList.remove("fullscreen");
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postID}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src=""
})
fullscreen.addEventListener("click", function(){
    if(modal.classList.contains("fullscreen")){
        modal.classList.remove("fullscreen")
    }
    else{
        modal.classList.add("fullscreen") 
    }
})