

function addingEventListener(){
const button= document.getElementsByClassName("contact-me-button")
    button[0].addEventListener('mouseover',function(){
        button[0].style.backgroundColor="orange"
    })

}

setTimeout(addingEventListener,100)

function changeColorOfDownloadCv(){
    const cv=document.getElementsByClassName("download-cv-button")
    cv[0].addEventListener('mouseover',function(){
        cv[0].style.backgroundColor="white"
    })
}
setTimeout(changeColorOfDownloadCv,100)

function changeColorOfCv(){
    const titleCv=document.getElementsByClassName('cv-button-title')
    titleCv[0].addEventListener('mouseover',function(){
        titleCv[0].style.color="blue"
    })
}

setTimeout(changeColorOfCv,100)