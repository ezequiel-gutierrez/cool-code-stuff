/*Lets say you have elements from the DOM already on your JS, you pass the element name as first parameter, then add or remove as second parameter and the class you either want to remove or add as third parameter*/
function assignClass(elem, action, classToAssign) {
    if (action === "add") {
        elem.forEach((element) => element.classList.add(classToAssign));
    } else if (action === "remove") {
        elem.forEach((element) => element.classList.remove(classToAssign));
    }
}

/*This obverver is meant to obverve the parent container of all child elements you want to give classes to, use the assignClass() functionto either add or remove classes from your child elements, and once you are ready to use the obverver is as easy as making: parentElement.forEach((element) => isSectionShowing.observe(element));*/ 
const isSectionShowing = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            assignClass(childElement, "add", "newClassName");

        } else {
            assignClass(childElement, "remove", "newClassName");
        }
    });
});

parentElement.forEach((element) => isSectionShowing.observe(element));
