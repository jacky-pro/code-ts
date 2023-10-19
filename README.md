Usage
To import in npm:

require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');
or as a standalone script tag:

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity"></script>
Step 1: Create our project folder:
Step 2: Create the HTML file
Create an HTML file and name it, for example, "index.html." Open the file with a text editor.

Step 3: HTML File Configuration

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity"></script>
Then:

Create a JavaScript file called "javascript.js" in the same folder as the HTML file and include the following code
const threshold = 0.9

function classify() {
     toxicity.load(threshold).then(model => {
         const sentence = document.form1.mitext.value;
         model.classify(sentence).then(predictions => {
             console.log(predictions);
         });
     });
}


Step 5: Open our html file in a browser
Enter text in the input field and click the "Analyze" button. The results of the classification will be displayed in the page console, for that we must right click on the page and click inspect.#   c o d e - t s  
 