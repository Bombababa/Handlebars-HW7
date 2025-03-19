import Handlebars from "handlebars";
import { products } from "./data.js";

async function loadTemplate() {
    const response = await fetch("/template.hbs");
    const templateSrc = await response.text();
    const template = Handlebars.compile(templateSrc);

    document.getElementById("product-list").innerHTML = template({ products });
}

loadTemplate();
