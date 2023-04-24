function setupLocalStorage() {

    const obj = {
        name: "mildred",
        stage: 4,
        languages: ["html", "Css", "Javascript"]
    }
    let age = 70;
    // key=value pairs eg let age = 26;
    // localStorage.setItem("age", age.ageToString());  turn a number to string
    console.log(localStorage.getItem(obj));
    // localStorage.setItem()
    // localStorage.clear()
    // localStorage.length()
    // localStorage.key()

    console.log(age);
}

window.onload = setupLocalStorage();