var first_key = "";

document.addEventListener("keypress", function (event) {
    console.log(event.key)
    switch (event.key) {
        case "1":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "2":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "3":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "4":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "5":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)


            break;
        case "6":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "7":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "8":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "9":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "0":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "+":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "-":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "*":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "/":
            first_key = first_key + event.key;
            document.querySelector("input").value = first_key;
            animation(event.key)

            break;
        case "Enter":
            document.querySelector("input").value = eval(first_key);
            animation(event.key)


            break;

        default:
            break;
    }
})
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        console.log(this)
        switch (this.value) {
            case "1":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;

                break;
            case "2":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "3":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "4":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
            case "5":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "6":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "7":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "8":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "9":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "0":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "+":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "-":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "*":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "/":
                first_key = first_key + this.value
                document.querySelector("input").value = first_key;
                break;
            case "=":
                document.querySelector("input").value = eval(first_key);
                animation(event.key)
                
                break;
            case "all-clear":

                document.querySelector("input").value = "";
                first_key="";
                break;


            default:
                break;
        }
    })

}
function animation(event) {
    document.getElementById(event).classList.add(".pressed");
    setTimeout(function() {
        document.getElementById(event).classList.remove("pressed");
      }, 100)
    
}