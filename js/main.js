const div = document.getElementById("js--menu");
const navigation = document.getElementById("js--navi");
const body = document.getElementById("js--body")

console.log(navigation);
div.onclick = function(){
    navigation.style.visibility = "visible"
    navigation.style.opacity = 1;
    body.style.overflow = "hidden"
}


