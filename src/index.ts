import * as xmljs from 'xml-js';
import {Root} from "./types";

// Example HTML-like document
const input = `
<htmlplusplus>
<title>Hello, World!</title>
<div class="container">
    <h1>Title</h1>
    <p>This is a paragraph.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
</htmlplusplus>
`;

// Convert HTML++ to JSON
const xml = xmljs.xml2js(input, { compact: true }) as Root;

const title = xml.htmlplusplus?.title?._text;

console.log("Page Title: ", title)

// Print the parsed XML object
console.log(JSON.stringify(xml, null, 2));
