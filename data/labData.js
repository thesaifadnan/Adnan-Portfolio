export const labQuestions = [
  // ==================== HTML PROBLEMS (1–9) ====================
  {
    id: 1,
    title: "HTML Text Formatting Tags",
    category: "HTML",
    lang: "HTML",
    question: "Demonstrate all the text formatting tags in a single HTML page.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Formatting Tags Demo</title>
</head>
<body>
    <h1>HTML5 Text Formatting Tags Demo</h1>
    
    <h2>Bold & Strong</h2>
    <p>Bold: <b>This is bold text</b></p>
    <p>Strong: <strong>This is strong (semantic bold)</strong></p>

    <h2>Italic & Emphasized</h2>
    <p>Italic: <i>This is italic text</i></p>
    <p>Emphasized: <em>This is emphasized (semantic italic)</em></p>

    <h2>Underlined & Inserted</h2>
    <p>Underlined: <u>This is underlined</u></p>
    <p>Inserted: <ins>This text was inserted</ins> (with semantic meaning)</p>

    <h2>Strikethrough & Deleted</h2>
    <p>Strikethrough: <s>This is strikethrough</s></p>
    <p>Deleted: <del>This text was deleted</del> (semantic meaning)</p>

    <h2>Superscript & Subscript</h2>
    <p>Superscript: x<sup>2</sup> + y<sup>3</sup> = 10</p>
    <p>Subscript: H<sub>2</sub>O and CO<sub>2</sub></p>

    <h2>Small Text</h2>
    <p>Normal: This is normal text</p>
    <p>Small: <small>This is small text</small> (like fine print)</p>

    <h2>Marked/Highlighted</h2>
    <p>Find the <mark>highlighted</mark> word in this sentence.</p>

    <h2>Code & Sample</h2>
    <p>Inline code: <code>console.log("Hello");</code></p>
    <p>Sample output: <samp>user@host:~$ echo "Hi"</samp></p>

    <h2>Keyboard Input</h2>
    <p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy</p>
    <p>Variable: <var>x</var> = <var>y</var> + <var>z</var></p>

    <p><strong>All tags demonstrated:</strong> <code>&lt;b&gt;, &lt;strong&gt;, &lt;i&gt;, &lt;em&gt;, &lt;u&gt;, &lt;ins&gt;, &lt;s&gt;, &lt;del&gt;, &lt;sup&gt;, &lt;sub&gt;, &lt;small&gt;, &lt;mark&gt;, &lt;code&gt;, &lt;samp&gt;, &lt;kbd&gt;, &lt;var&gt;</code></p>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>body{background:#0a0a0a;color:#e0e0e0;font-family:sans-serif;padding:20px;} h1,h2{color:white;} mark{background:#ff0;color:#000;} code,samp,kbd,var{background:#222;padding:2px 4px;border-radius:4px;}</style></head>
<body>
<h1>HTML5 Text Formatting Tags Demo</h1>
<h2>Bold & Strong</h2><p>Bold: <b>This is bold text</b></p><p>Strong: <strong>This is strong (semantic bold)</strong></p>
<h2>Italic & Emphasized</h2><p>Italic: <i>This is italic text</i></p><p>Emphasized: <em>This is emphasized (semantic italic)</em></p>
<h2>Underlined & Inserted</h2><p>Underlined: <u>This is underlined</u></p><p>Inserted: <ins>This text was inserted</ins></p>
<h2>Strikethrough & Deleted</h2><p>Strikethrough: <s>This is strikethrough</s></p><p>Deleted: <del>This text was deleted</del></p>
<h2>Superscript & Subscript</h2><p>Superscript: x<sup>2</sup> + y<sup>3</sup> = 10</p><p>Subscript: H<sub>2</sub>O and CO<sub>2</sub></p>
<h2>Small Text</h2><p>Small: <small>This is small text</small></p>
<h2>Marked/Highlighted</h2><p>Find the <mark>highlighted</mark> word.</p>
<h2>Code & Sample</h2><p><code>console.log("Hello");</code></p><p><samp>user@host:~$ echo "Hi"</samp></p>
<h2>Keyboard Input</h2><p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy</p><p>Variable: <var>x</var> = <var>y</var> + <var>z</var></p>
</body>
</html>`
  },
  {
    id: 2,
    title: "Star Pattern Figure",
    category: "HTML",
    lang: "HTML",
    question: "Write HTML code to draw a star pattern figure (pyramid-like).",
    code: `<!DOCTYPE html>
<html lang="en">
<head><title>Star Pattern Figure</title></head>
<body>
<h1>Star Pattern from Image</h1>
<pre>
      *
    * * *
* * * * * * *
</pre>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#0f0;font-family:monospace;padding:20px;} h1{color:white;} pre{font-size:1.2rem;}</style></head>
<body>
<h1>Star Pattern from Image</h1>
<pre>
      *
    * * *
* * * * * * *
</pre>
<p style="color:#aaa;">Pattern recreated using &lt;pre&gt; tag with spaces and asterisks (*).</p>
</body>
</html>`
  },
  {
    id: 3,
    title: "Course-wise Subjects Table",
    category: "HTML",
    lang: "HTML",
    question: "Create a web page to print a table with rowspan, colspan for MBA and MCM courses.",
    code: `<!DOCTYPE html>
<html>
<head>
<title>List of Course-wise Subjects</title>
<style>
table { border-collapse: collapse; width: 900px; margin: auto; font-family: serif; }
th, td { border: 1px solid black; padding: 8px; text-align: center; }
th { font-weight: bold; }
</style>
</head>
<body>
<h2 style="text-align: center">List of Course-wise Subjects</h2>
<table>
<!-- full table as in problem statement -->
</table>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} table{border-collapse:collapse;width:100%;min-width:800px;margin:auto;} th,td{border:1px solid #666;padding:8px;text-align:center;} h2{text-align:center;color:white;}</style></head>
<body>
<h2>List of Course-wise Subjects</h2>
<table>
<thead><tr><th rowspan="2">Sr.<br>No.</th><th rowspan="2">Course</th><th rowspan="2">Subject</th><th colspan="2">Marks</th><th colspan="2">Category</th><th rowspan="2">Practical/<br>Theory</th></tr><tr><th>Internal</th><th>External</th><th>Internal</th><th>External</th></tr></thead>
<tbody>
<tr><td rowspan="4">1</td><td rowspan="4">MBA</td><td align="left">Management Accounting</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>Theory</td></tr>
<tr><td align="left">Information Technology</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>T and P</td></tr>
<tr><td align="left">Basics of Marketing</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>Theory</td></tr>
<tr><td align="left">E-Commerce</td><td>50</td><td>-</td><td>✓</td><td>-</td><td>Theory</td></tr>
<tr><td rowspan="6">2</td><td rowspan="6">MCM</td><td align="left">Visual Basic</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>T and P</td></tr>
<tr><td align="left">Internet Technology</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>T and P</td></tr>
<tr><td align="left">Network Technology</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>Theory</td></tr>
<tr><td align="left">VB.Net</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>T and P</td></tr>
<tr><td align="left">Linux</td><td>30</td><td>70</td><td>-</td><td>✓</td><td>T and P</td></tr>
<tr><td align="left">ISA</td><td>50</td><td>-</td><td>✓</td><td>-</td><td>Theory</td></tr>
</tbody>
</table>
</body>
</html>`
  },
  {
    id: 4,
    title: "Table with Hyperlinked Images",
    category: "HTML",
    lang: "HTML",
    question: "Using table tags, align images with hyperlinks (mobile network logos).",
    code: `<!DOCTYPE html>
<html>
<head><title>Table With Mobile Connections</title></head>
<body>
<h2 align="center">Table With Mobile Connections</h2>
<table border="1" align="center" cellpadding="10" cellspacing="5">
  <!-- rows with images and hyperlinks -->
</table>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;text-align:center;} table{margin:auto;border-collapse:collapse;background:#111;} td{padding:8px;border:1px solid #444;} a{color:#66ccff;}</style></head>
<body>
<h2 style="color:white;">Table With Mobile Connections</h2>
<table border="1" cellpadding="10">
<tr align="center">
<td><a href="#" target="_blank"><img src="https://picsum.photos/id/0/120/80?grayscale" width="120" height="80" style="border:1px solid #555;"></a></td>
<td><a href="#" target="_blank"><img src="https://picsum.photos/id/1/120/80" width="120" height="80"></a></td>
<td><a href="#" target="_blank"><img src="https://picsum.photos/id/2/120/80" width="120" height="80"></a></td>
<td><a href="#" target="_blank"><img src="https://picsum.photos/id/3/120/80" width="120" height="80"></a></td>
</tr>
<tr align="center">
<td><img src="https://picsum.photos/id/4/120/80" width="120" height="80"></td>
<td colspan="2"><h3 style="color:white;">Table With Images</h3></td>
<td><img src="https://picsum.photos/id/5/120/80" width="120" height="80"></td>
</tr>
<tr align="center">
<td><img src="https://picsum.photos/id/6/120/80" width="120" height="80"></td>
<td><img src="https://picsum.photos/id/7/120/80" width="120" height="80"></td>
<td><img src="https://picsum.photos/id/8/120/80" width="120" height="80"></td>
<td><img src="https://picsum.photos/id/9/120/80" width="120" height="80"></td>
</tr>
</table>
<p style="color:#aaa; margin-top:10px;">(Placeholder images – hyperlinks open new tab if real URLs provided)</p>
</body>
</html>`
  },
  {
    id: 5,
    title: "Image Map with Hotspots",
    category: "HTML",
    lang: "HTML",
    question: "Embed an image map, fix hotspots, show related info when clicked.",
    code: `<!DOCTYPE html>
<html>
<head><title>Image Map with Hotspots</title></head>
<body>
<h2 align="center">Image Map Demonstration</h2>
<p align="center">Click different parts of the laptop to see information.</p>
<center>
<img src="laptop.jpg" usemap="#laptopmap" width="500" height="300">
</center>
<map name="laptopmap">
    <area shape="rect" coords="50,30,450,180" href="#screen" alt="Screen">
    <area shape="rect" coords="70,190,430,260" href="#keyboard" alt="Keyboard">
    <area shape="rect" coords="200,260,300,290" href="#touchpad" alt="Touchpad">
</map>
<hr>
<h3 id="screen">Laptop Screen</h3><p>The screen is used to display images, videos and output information.</p>
<h3 id="keyboard">Keyboard</h3><p>The keyboard is used to enter data and commands into the computer.</p>
<h3 id="touchpad">Touchpad</h3><p>The touchpad controls cursor movement and performs mouse functions.</p>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;font-family:sans-serif;padding:20px;} h2{color:white;} h3{color:#ffaa00;} img{border:1px solid #555;}</style></head>
<body>
<h2 align="center">Image Map Demonstration</h2>
<p align="center">Click different parts of the laptop to see information.</p>
<center>
<img src="https://picsum.photos/id/0/500/300" usemap="#laptopmap" width="500" height="300">
</center>
<map name="laptopmap">
  <area shape="rect" coords="50,30,450,180" href="#screen" alt="Screen">
  <area shape="rect" coords="70,190,430,260" href="#keyboard" alt="Keyboard">
  <area shape="rect" coords="200,260,300,290" href="#touchpad" alt="Touchpad">
</map>
<hr>
<h3 id="screen">Laptop Screen</h3><p>The screen is used to display images, videos and output information.</p>
<h3 id="keyboard">Keyboard</h3><p>The keyboard is used to enter data and commands into the computer.</p>
<h3 id="touchpad">Touchpad</h3><p>The touchpad controls cursor movement and performs mouse functions.</p>
</body>
</html>`
  },
  {
    id: 6,
    title: "Information Form (Fieldsets)",
    category: "HTML",
    lang: "HTML",
    question: "Create a form with Basic information and Extra information fieldsets.",
    code: `<!DOCTYPE html>
<html>
<head><title>Information Form</title></head>
<body>
<div class="container">
<form>
    <fieldset><legend>Basic information</legend>...</fieldset>
    <fieldset><legend>Extra information</legend>...</fieldset>
    <div><input type="submit" value="Send data"><input type="reset" value="Reset form"></div>
</form>
</div>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} fieldset{border:1px solid #444;margin-bottom:16px;padding:12px;} legend{color:white;} input,textarea{background:#222;color:white;border:1px solid #555;padding:5px;}</style></head>
<body>
<form onsubmit="alert('Form submitted (demo)'); return false;">
<fieldset><legend>Basic information</legend>
<label>Full name:</label> <input type="text"><br><br>
<label>Birth date:</label> <input type="date"><br><br>
<label>Gender:</label> <input type="radio" name="gender"> Male <input type="radio" name="gender"> Female<br><br>
<label>Address:</label> <input type="text" style="width:70%;"><br><br>
<label>Phone number:</label> <input type="tel">
</fieldset>
<fieldset><legend>Extra information</legend>
<label>Interests:</label> <input type="checkbox"> Books <input type="checkbox"> Movies <input type="checkbox"> Videogames<br><br>
<label>Favorite color:</label> <input type="color">
</fieldset>
<div style="margin-top:16px;"><input type="submit" value="Send data"> <input type="reset" value="Reset form"></div>
</form>
</body>
</html>`
  },
  {
    id: 7,
    title: "Hotel Customer Profile Form",
    category: "HTML",
    lang: "HTML",
    question: "Customer profile for hotel data entry: name, address, age, gender, room type, payment type.",
    code: `<!DOCTYPE html>
<html>
<head><title>Hotel Customer Profile</title></head>
<body>
<h2 align="center">Hotel Customer Profile Form</h2>
<form>
<fieldset><legend>Customer Information</legend>...</fieldset>
<fieldset><legend>Room Details</legend>...</fieldset>
<fieldset><legend>Payment Details</legend>...</fieldset>
<input type="submit" value="Submit"><input type="reset" value="Reset">
</form>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} fieldset{border:1px solid #444;margin-bottom:12px;padding:12px;} legend{color:white;} input,textarea{background:#222;color:white;border:1px solid #555;padding:5px;}</style></head>
<body>
<h2 align="center" style="color:white;">Hotel Customer Profile Form</h2>
<form onsubmit="alert('Customer profile submitted (demo)'); return false;">
<fieldset><legend>Customer Information</legend>
<label>Name:</label> <input type="text"><br><br>
<label>Address:</label> <textarea rows="3" cols="30"></textarea><br><br>
<label>Age:</label> <input type="number"><br><br>
<label>Gender:</label> <input type="radio" name="gender"> Male <input type="radio" name="gender"> Female <input type="radio" name="gender"> Other<br>
</fieldset>
<fieldset><legend>Room Details</legend>
<input type="radio" name="room"> A/C Room<br>
<input type="radio" name="room"> Non A/C Room<br>
<input type="radio" name="room"> Deluxe Room<br>
</fieldset>
<fieldset><legend>Payment Details</legend>
<input type="radio" name="payment"> Cash<br>
<input type="radio" name="payment"> Credit/Debit Card<br>
<input type="radio" name="payment"> Coupons<br>
</fieldset>
<input type="submit" value="Submit"> <input type="reset" value="Reset">
</form>
</body>
</html>`
  },
  {
    id: 8,
    title: "HTML5 Tags (Video, Audio, Header, etc.)",
    category: "HTML",
    lang: "HTML",
    question: "Demonstrate video, audio, header, footer, nav, embed, datalist, bdi, article, output.",
    code: `<!DOCTYPE html>
<html>
<head><title>HTML5 Tags Demonstration</title></head>
<body>
<header><h1>HTML5 Tags Demonstration</h1></header>
<nav><a href="#video">Video</a> | <a href="#audio">Audio</a> | <a href="#article">Article</a></nav>
<article><h2>Article Tag</h2><p>The article tag represents independent content...</p></article>
<section><h2>Video Tag</h2><video width="320" height="240" controls><source src="sample.mp4" type="video/mp4"></video></section>
<section><h2>Audio Tag</h2><audio controls><source src="audio.mp3" type="audio/mpeg"></audio></section>
<section><h2>Embed Tag</h2><embed src="sample.pdf" width="400" height="300"></section>
<section><h2>Datalist Tag</h2><form><input list="browsers"><datalist id="browsers"><option value="Chrome">...</datalist></form></section>
<section><h2>BDI Tag</h2><p>User Name: <bdi>علي</bdi> (isolates text direction)</p></section>
<section><h2>Output Tag</h2><form oninput="result.value=parseInt(a.value)+parseInt(b.value)"><input type="number" id="a" value="0">+<input type="number" id="b" value="0">=<output name="result"></output></form></section>
<footer><p>&copy; 2026 HTML5 Demo Page</p></footer>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;font-family:sans-serif;padding:20px;} header{border-bottom:1px solid #333;} nav{margin:8px 0;} a{color:#66ccff;} article{border-left:3px solid #ffaa00;padding-left:8px;} video,audio,embed{margin:10px 0;}</style></head>
<body>
<header><h1 style="color:white;">HTML5 Tags Demonstration</h1></header>
<nav><a href="#">Video</a> | <a href="#">Audio</a> | <a href="#">Article</a></nav>
<article><h2>Article Tag</h2><p>Independent content like blog posts, news articles, or posts.</p></article>
<section><h2>Video Tag</h2><video width="320" height="240" controls><source src="#" type="video/mp4">Your browser does not support video.</video><p style="color:#888;">(Sample video placeholder)</p></section>
<section><h2>Audio Tag</h2><audio controls><source src="#" type="audio/mpeg">Audio not supported.</audio></section>
<section><h2>Embed Tag</h2><embed src="#" width="400" height="200" style="border:1px solid #444;"><p style="color:#888;">(Embed placeholder)</p></section>
<section><h2>Datalist Tag</h2><form>Browser: <input list="browsers"><datalist id="browsers"><option>Chrome</option><option>Firefox</option><option>Edge</option></datalist></form></section>
<section><h2>BDI Tag</h2><p>User Name: <bdi>علي</bdi> (isolates text direction)</p></section>
<section><h2>Output Tag</h2><form oninput="result.value=parseInt(a.value)+parseInt(b.value)"><input type="number" id="a" value="0"> + <input type="number" id="b" value="0"> = <output name="result"></output></form></section>
<footer style="margin-top:20px; border-top:1px solid #333;"><p>&copy; 2026 HTML5 Demo Page</p></footer>
</body>
</html>`
  },
  {
    id: 9,
    title: "Nested Lists (Programming & Web Dev)",
    category: "HTML",
    lang: "HTML",
    question: "Design an HTML page with nested ordered/unordered lists for programming languages and web development.",
    code: `<!DOCTYPE html>
<html>
<head><title>Programming Languages and Web Development</title></head>
<body>
<ol>
    <li><b>Programming Languages</b>
        <ul type="circle">
            <li><b>Python</b>
                <ul type="square">
                    <li>Frameworks<ol><li>Django</li><li>Flask</li></ol></li>
                    <li>Libraries<ul><li>NumPy</li><li>Pandas</li><li>Matplotlib</li></ul></li>
                </ul>
            </li>
            <li><b>Java</b>
                <ul type="square">
                    <li>Core Concepts<ul><li>OOP</li><li>Multithreading</li><li>Exception Handling</li></ul></li>
                    <li>Frameworks<ol><li>Spring</li><li>Hibernate</li></ol></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><b>Web Development</b>
        <ol>
            <li><b>Frontend</b>
                <ul><li>HTML</li><li>CSS</li><li>JavaScript<ul><li>React</li><li>Vue.js</li><li>Angular</li></ul></li></ul>
            </li>
            <li><b>Backend</b>
                <ul><li>Node.js</li><li>PHP</li><li>Ruby on Rails</li></ul>
            </li>
        </ol>
    </li>
</ol>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} ul,ol{margin-left:20px;} li{margin:5px 0;}</style></head>
<body>
<ol>
<li><b>Programming Languages</b>
<ul style="list-style-type:circle;">
<li><b>Python</b>
<ul style="list-style-type:square;">
<li>Frameworks<ol><li>Django</li><li>Flask</li></ol></li>
<li>Libraries<ul><li>NumPy</li><li>Pandas</li><li>Matplotlib</li></ul></li>
</ul>
</li>
<li><b>Java</b>
<ul style="list-style-type:square;">
<li>Core Concepts<ul><li>OOP</li><li>Multithreading</li><li>Exception Handling</li></ul></li>
<li>Frameworks<ol><li>Spring</li><li>Hibernate</li></ol></li>
</ul>
</li>
</ul>
</li>
<li><b>Web Development</b>
<ol>
<li><b>Frontend</b>
<ul><li>HTML</li><li>CSS</li><li>JavaScript<ul><li>React</li><li>Vue.js</li><li>Angular</li></ul></li></ul>
</li>
<li><b>Backend</b>
<ul><li>Node.js</li><li>PHP</li><li>Ruby on Rails</li></ul>
</li>
</ol>
</li>
</ol>
</body>
</html>`
  },

  // ==================== JAVASCRIPT PROBLEMS (10–20) ====================
  {
    id: 10,
    title: "Credit Card Validator (Visa/Master/Amex)",
    category: "JavaScript",
    lang: "JS",
    question: "Validate credit card numbers based on prefix and length (Visa, MasterCard, American Express).",
    code: `function validatecard() {
    var card = document.getElementById("card").value;
    if(!/^[0-9]+$/.test(card)) {
        alert("Card must contain only digits");
        return;
    }
    var len = card.length;
    if(card.startsWith("4") && (len==13||len==16))
        alert("Valid Visa Card");
    else if((card.startsWith("51")||card.startsWith("52")||card.startsWith("53")||card.startsWith("54")||card.startsWith("55")) && len==16)
        alert("Valid Master Card");
    else if((card.startsWith("34")||card.startsWith("35")||card.startsWith("36")||card.startsWith("37")) && len==15)
        alert("Valid American Card");
    else
        alert("Invalid credit card number");
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;font-family:sans-serif;padding:20px;} input,button{background:#222;color:white;border:1px solid #555;padding:6px;}</style></head>
<body>
<h2 style="color:white;">Credit Card Validation</h2>
<label>Enter card number:</label>
<input type="text" id="card" style="margin-left:10px;">
<br><br>
<button id="validateBtn">Validate</button>
<script>
function validatecard() {
    var card = document.getElementById("card").value;
    if(!/^[0-9]+$/.test(card)) { alert("Card must contain only digits"); return; }
    var len = card.length;
    if(card.startsWith("4") && (len==13||len==16)) alert("Valid Visa Card");
    else if((card.startsWith("51")||card.startsWith("52")||card.startsWith("53")||card.startsWith("54")||card.startsWith("55")) && len==16) alert("Valid Master Card");
    else if((card.startsWith("34")||card.startsWith("35")||card.startsWith("36")||card.startsWith("37")) && len==15) alert("Valid American Card");
    else alert("Invalid credit card number");
}
document.getElementById("validateBtn").addEventListener("click", validatecard);
</script>
</body>
</html>`
  },
  {
    id: 11,
    title: "Form Validation (Name, Email, Password)",
    category: "JavaScript",
    lang: "JS",
    question: "Validate name (letters only), email (standard pattern), password (min 8 chars, at least one uppercase, one lowercase, one digit).",
    code: `function formvalidation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(!/^[A-Za-z ]+$/.test(name)){ alert("Name only letters"); return false; }
    if(!/^[\\w.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email)){ alert("Invalid email"); return false; }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/.test(password)){ alert("Password must have 8+ chars, uppercase, lowercase, digit"); return false; }
    alert("All inputs valid"); return true;
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} input,button{background:#222;color:white;border:1px solid #555;padding:6px;margin:5px;}</style></head>
<body>
<h2 style="color:white;">Validation Form</h2>
<form id="validationForm">
Name: <input type="text" id="name"><br><br>
Email: <input type="text" id="email"><br><br>
Password: <input type="password" id="password"><br><br>
<button type="submit">Submit</button>
</form>
<script>
document.getElementById("validationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(!/^[A-Za-z ]+$/.test(name)){ alert("Name only contains letters"); return false; }
    if(!/^[\\w.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email)){ alert("Enter valid email id"); return false; }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/.test(password)){ alert("Password must contain 8 chars with uppercase, lowercase and digit"); return false; }
    alert("All inputs are valid"); return true;
});
</script>
</body>
</html>`
  },
  {
    id: 12,
    title: "Country‑Capital Matching Game",
    category: "JavaScript",
    lang: "JS",
    question: "Store country‑capital pairs. User selects country and capital; check if match is correct.",
    code: `function checkcapital(){
    var country = document.getElementById("country").value;
    var capital = document.getElementById("capital").value;
    var data = { India:"Delhi", Usa:"Washington Dc", France:"Paris", Japan:"Tokyo", Australia:"Canberra" };
    if(data[country]==capital) alert("Correct Answer");
    else alert("The capital of "+country+" is "+data[country]);
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} select,button{background:#222;color:white;border:1px solid #555;padding:6px;}</style></head>
<body>
<h2 style="color:white;">Country and capital matching</h2>
<label>Select Country:</label>
<select id="country"><option>India</option><option>Usa</option><option>France</option><option>Japan</option><option>Australia</option></select><br><br>
<label>Select Capital:</label>
<select id="capital"><option>Delhi</option><option>Washington Dc</option><option>Paris</option><option>Tokyo</option><option>Canberra</option></select><br><br>
<button id="checkBtn">Check</button>
<script>
document.getElementById("checkBtn").addEventListener("click", function() {
    var country = document.getElementById("country").value;
    var capital = document.getElementById("capital").value;
    var data = { India:"Delhi", Usa:"Washington Dc", France:"Paris", Japan:"Tokyo", Australia:"Canberra" };
    if(data[country]==capital) alert("Correct Answer");
    else alert("The capital of "+country+" is "+data[country]);
});
</script>
</body>
</html>`
  },
  {
    id: 13,
    title: "Simple Calculator",
    category: "JavaScript",
    lang: "JS",
    question: "Design a simple calculator with buttons for digits, operators, clear and equals.",
    code: `let expression = "";
function addvalue(v) { expression += v; document.getElementById("result").value = expression; }
function clearResult() { expression = ""; document.getElementById("result").value = ""; }
function calculate() { expression = eval(expression); document.getElementById("result").value = expression; }`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;text-align:center;padding:20px;} input{background:#222;color:white;border:1px solid #555;height:40px;width:220px;font-size:1.2rem;text-align:right;} button{background:#333;color:white;border:1px solid #666;width:50px;height:40px;margin:5px;font-size:1rem;}</style></head>
<body>
<h2 style="color:white;">Simple Calculator</h2>
<input type="text" id="result" readonly><br>
<button class="btn">7</button><button class="btn">8</button><button class="btn">9</button><button class="btn">/</button><br>
<button class="btn">4</button><button class="btn">5</button><button class="btn">6</button><button class="btn">*</button><br>
<button class="btn">1</button><button class="btn">2</button><button class="btn">3</button><button class="btn">-</button><br>
<button class="btn">0</button><button id="clearBtn">C</button><button id="equalBtn">=</button><button class="btn">+</button>
<script>
let expr = "";
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        expr += btn.innerText;
        document.getElementById("result").value = expr;
    });
});
document.getElementById("clearBtn").addEventListener("click", () => {
    expr = "";
    document.getElementById("result").value = "";
});
document.getElementById("equalBtn").addEventListener("click", () => {
    try { expr = eval(expr); document.getElementById("result").value = expr; } catch(e) { alert("Invalid Expression"); expr = ""; }
});
</script>
</body>
</html>`
  },
  {
    id: 14,
    title: "Self‑Modifying Page (Every Minute)",
    category: "JavaScript",
    lang: "JS",
    question: "Web page that modifies itself every minute: changes background color and updates text.",
    code: `setInterval(() => {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("heading").innerHTML = "Page Updated at " + new Date().toLocaleTimeString();
    document.getElementById("message").innerHTML = "The Page Modified Itself Automatically";
}, 60000);`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;font-family:sans-serif;text-align:center;padding:20px;transition:background 1s;} h1{color:white;}</style></head>
<body>
<h1 id="heading">Welcome</h1>
<h2 id="message">This page changes background color every minute</h2>
<script>
setInterval(() => {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("heading").innerHTML = "Page Updated at " + new Date().toLocaleTimeString();
    document.getElementById("message").innerHTML = "The Page Modified Itself Automatically";
}, 60000);
</script>
<p style="margin-top:20px; color:#888;">Background color changes every minute.</p>
</body>
</html>`
  },
  {
    id: 15,
    title: "Digital Running Clock",
    category: "JavaScript",
    lang: "JS",
    question: "Display a live digital clock (hours:minutes:seconds) updating every second.",
    code: `function showTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if(hours<10) hours="0"+hours;
    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds="0"+seconds;
    document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds;
}
setInterval(showTime,1000);
showTime();`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#0f0;font-family:monospace;text-align:center;padding:20px;} #clock{font-size:3rem;font-weight:bold;}</style></head>
<body>
<h1 style="color:white;">Modern Clock</h1>
<div id="clock"></div>
<script>
function showTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if(hours<10) hours="0"+hours;
    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds="0"+seconds;
    document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds;
}
setInterval(showTime,1000);
showTime();
</script>
</body>
</html>`
  },
  {
    id: 16,
    title: "Birthday Day Finder",
    category: "JavaScript",
    lang: "JS",
    question: "Accept user's birthdate and display the day of the week in an alert.",
    code: `function findday(){
    let birthdate = document.getElementById("bdate").value;
    if(birthdate==""){
        alert("Please select a birth date");
        return;
    }
    let date = new Date(birthdate);
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    alert("You were born on: " + day);
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;text-align:center;padding:20px;} input,button{background:#222;color:white;border:1px solid #555;padding:6px;}</style></head>
<body>
<h1>Birthday finder</h1>
<input type="date" id="bdate"><br><br>
<button id="finderBtn">Finder</button>
<script>
document.getElementById("finderBtn").addEventListener("click", function() {
    let birthdate = document.getElementById("bdate").value;
    if(birthdate==""){
        alert("Please select a birth date");
        return;
    }
    let date = new Date(birthdate);
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    alert("You were born on: " + day);
});
</script>
</body>
</html>`
  },
  {
    id: 17,
    title: "Phone Number Split (Area Code & Number)",
    category: "JavaScript",
    lang: "JS",
    question: "Input phone number as +91-9876543210, split to get country code and remaining number.",
    code: `function extractNumber(){
    let phone = document.getElementById("phone").value;
    let parts = phone.split("-");
    if(parts.length===2){
        document.getElementById("code").value = parts[0].replace("+","");
        document.getElementById("num").value = parts[1];
    } else {
        alert("Use format +91-XXXXXXXXXX");
    }
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} input,button{background:#222;color:white;border:1px solid #555;padding:6px;margin:5px;}</style></head>
<body>
<h2>Indian Phone Number Processor</h2>
Enter Phone Number: <input type="text" id="phone" placeholder="+91-9876543210"><br><br>
<button id="extractBtn">Extract</button><br><br>
Country Code: <input type="text" id="code" readonly><br><br>
Phone Number: <input type="text" id="num" readonly>
<script>
document.getElementById("extractBtn").addEventListener("click", function() {
    let phone = document.getElementById("phone").value;
    let parts = phone.split("-");
    if(parts.length===2){
        document.getElementById("code").value = parts[0].replace("+","");
        document.getElementById("num").value = parts[1];
    } else {
        alert("Use format +91-XXXXXXXXXX");
    }
});
</script>
</body>
</html>`
  },
  {
    id: 18,
    title: "Vowel Position & Reverse Number",
    category: "JavaScript",
    lang: "JS",
    question: "Two functions: (a) find left‑most vowel position in a string, (b) reverse digits of a number.",
    code: `function vowelpos(s){
    for(let i=0;i<s.length;i++) if("aeiouAEIOU".includes(s[i])) return i+1;
    return "No vowel";
}
function reversenum(n){
    return n.toString().split("").reverse().join("");
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} input,button{background:#222;color:white;border:1px solid #555;padding:6px;}</style></head>
<body>
<h3>Vowel position</h3>
<input id="str" placeholder="Enter string"> <button id="vowelBtn">Check</button>
<p id="res1"></p>
<h3>Reverse Number</h3>
<input id="num" placeholder="Enter number"> <button id="reverseBtn">Reverse</button>
<p id="res2"></p>
<script>
function vowelpos(s){
    for(let i=0;i<s.length;i++) if("aeiouAEIOU".includes(s[i])) return i+1;
    return "No vowel";
}
function reversenum(n){
    return n.toString().split("").reverse().join("");
}
document.getElementById("vowelBtn").addEventListener("click", () => {
    document.getElementById("res1").innerHTML = vowelpos(document.getElementById("str").value);
});
document.getElementById("reverseBtn").addEventListener("click", () => {
    document.getElementById("res2").innerHTML = reversenum(document.getElementById("num").value);
});
</script>
</body>
</html>`
  },
  {
    id: 19,
    title: "Toggle Case (Upper ↔ Lower)",
    category: "JavaScript",
    lang: "JS",
    question: "Convert uppercase letters to lowercase and lowercase to uppercase.",
    code: `function togglecase(s){
    let r="";
    for(let c of s) r += (c===c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase();
    return r;
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} input,button{background:#222;color:white;border:1px solid #555;padding:6px;}</style></head>
<body>
<h3>Toggle Case</h3>
<input id="txt" placeholder="Enter text"> <button id="convertBtn">Convert</button>
<p id="res"></p>
<script>
function togglecase(s){
    let r="";
    for(let c of s) r += (c===c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase();
    return r;
}
document.getElementById("convertBtn").addEventListener("click", () => {
    document.getElementById("res").innerHTML = togglecase(document.getElementById("txt").value);
});
</script>
</body>
</html>`
  },
  {
    id: 20,
    title: "Car Survey (Maruti Models in Metro Cities)",
    category: "JavaScript",
    lang: "JS",
    question: "Survey of four Maruti models in Delhi, Mumbai, Chennai, Kolkata. Tabulate counts.",
    code: `let data = { Delhi:[0,0,0,0], Mumbai:[0,0,0,0], Chennai:[0,0,0,0], Kolkata:[0,0,0,0] };
function updatetable(){
    let city = document.getElementById("city").value;
    let model = parseInt(document.getElementById("model").value);
    data[city][model]++;
    document.getElementById(city).cells[model+1].innerHTML = data[city][model];
}`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:#e0e0e0;padding:20px;} select,button{background:#222;color:white;border:1px solid #555;padding:6px;} table{border-collapse:collapse;} th,td{border:1px solid #666;padding:6px;}</style></head>
<body>
<h3 style="color:white;">Car Survey</h3>
City: <select id="city"><option>Delhi</option><option>Mumbai</option><option>Chennai</option><option>Kolkata</option></select>
Model: <select id="model"><option value="0">Maruti-K10</option><option value="1">Zen-Astelo</option><option value="2">Wagonr</option><option value="3">Maruti-SX4</option></select>
<button id="submitBtn">Submit</button>
<br><br>
<table>
<thead><tr><th>City</th><th>Maruti-K10</th><th>Zen-Astelo</th><th>Wagonr</th><th>Maruti-SX4</th></tr></thead>
<tbody>
<tr id="Delhi"><td>Delhi</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr id="Mumbai"><td>Mumbai</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr id="Chennai"><td>Chennai</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr id="Kolkata"><td>Kolkata</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
</tbody>
</table>
<script>
let data = { Delhi:[0,0,0,0], Mumbai:[0,0,0,0], Chennai:[0,0,0,0], Kolkata:[0,0,0,0] };
function updatetable(){
    let city = document.getElementById("city").value;
    let model = parseInt(document.getElementById("model").value);
    data[city][model]++;
    document.getElementById(city).cells[model+1].innerHTML = data[city][model];
}
document.getElementById("submitBtn").addEventListener("click", updatetable);
</script>
</body>
</html>`
  },

  // ==================== REACT PROBLEMS (21–26) ====================
  {
    id: 21,
    title: "React: Functional Component with Props",
    category: "React",
    lang: "React",
    question: "Create a functional component that accepts props and displays a personalized message.",
    code: `// Greeting.js
import React from "react";
function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to React programming</p>
    </div>
  );
}
export default Greeting;

// App.js
import React from "react";
import Greeting from "./Greeting";
function App() {
  return (
    <div>
      <Greeting name="Adnan" />
      <Greeting name="Rahul" />
      <Greeting name="Priya" />
    </div>
  );
}
export default App;`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script><style>body{background:#0a0a0a;color:white;padding:20px;}</style></head>
<body>
<div id="root"></div>
<script>
const { createElement } = React;
function Greeting(props) { return createElement('div', null, createElement('h2', null, 'Hello, ' + props.name + '!'), createElement('p', null, 'Welcome to React programming')); }
function App() { return createElement('div', null, createElement(Greeting, {name:"Adnan"}), createElement(Greeting, {name:"Rahul"}), createElement(Greeting, {name:"Priya"})); }
ReactDOM.createRoot(document.getElementById('root')).render(createElement(App));
</script>
</body>
</html>`
  },
  {
    id: 22,
    title: "React: Class Component Counter (Increase/Decrease)",
    category: "React",
    lang: "React",
    question: "Class component that maintains a counter with increase and decrease buttons.",
    code: `import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increase = () => this.setState({ count: this.state.count + 1 });
  decrease = () => this.setState({ count: this.state.count - 1 });
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}
export default Counter;`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script><style>body{background:#0a0a0a;color:white;text-align:center;padding:20px;} button{margin:5px;}</style></head>
<body>
<div id="root"></div>
<script>
const { createElement, Component } = React;
class Counter extends Component {
  constructor(props) { super(props); this.state = { count:0 }; }
  increase() { this.setState({ count: this.state.count + 1 }); }
  decrease() { this.setState({ count: this.state.count - 1 }); }
  render() {
    return createElement('div', null,
      createElement('h2', null, 'Counter: ' + this.state.count),
      createElement('button', { onClick: this.increase.bind(this) }, 'Increase'),
      createElement('button', { onClick: this.decrease.bind(this), style:{marginLeft:'10px'} }, 'Decrease')
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(createElement(Counter));
</script>
</body>
</html>`
  },
  {
    id: 23,
    title: "React: Functional Counter (Increase/Decrease/Reset)",
    category: "React",
    lang: "React",
    question: "Functional component using useState with increase, decrease, and reset buttons.",
    code: `import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script><style>body{background:#0a0a0a;color:white;text-align:center;padding:20px;} button{margin:5px;}</style></head>
<body>
<div id="root"></div>
<script>
const { createElement, useState } = React;
function Counter() {
  const [count, setCount] = useState(0);
  return createElement('div', null,
    createElement('h2', null, 'Counter: ' + count),
    createElement('button', { onClick: () => setCount(count+1) }, 'Increase'),
    createElement('button', { onClick: () => setCount(count-1), style:{marginLeft:'10px'} }, 'Decrease'),
    createElement('button', { onClick: () => setCount(0), style:{marginLeft:'10px'} }, 'Reset')
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(createElement(Counter));
</script>
</body>
</html>`
  },
  {
    id: 24,
    title: "React: Running Clock with Date",
    category: "React",
    lang: "React",
    question: "Functional component that displays a running clock and the current date.",
    code: `import React, { useState, useEffect } from "react";
function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>
      <h3>Current Date: {time.toLocaleDateString()}</h3>
    </div>
  );
}
export default Clock;`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script><style>body{background:#0a0a0a;color:white;text-align:center;padding:20px;}</style></head>
<body>
<div id="root"></div>
<script>
const { createElement, useState, useEffect } = React;
function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return createElement('div', null,
    createElement('h2', null, 'Current Time: ' + time.toLocaleTimeString()),
    createElement('h3', null, 'Current Date: ' + time.toLocaleDateString())
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(createElement(Clock));
</script>
</body>
</html>`
  },
  {
    id: 25,
    title: "React: Form with State (Live Data)",
    category: "React",
    lang: "React",
    question: "Component with form that updates state on user input and displays live data.",
    code: `import React, { useState } from "react";
function UserForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Name: \${formData.name}, Email: \${formData.email}\`);
  };
  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <h3>Live Data:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}
export default UserForm;`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script><script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script><style>body{background:#0a0a0a;color:white;text-align:center;padding:20px;} input{background:#222;color:white;border:1px solid #555;margin:5px;padding:6px;} button{background:#333;border:1px solid #666;padding:6px 12px;}</style></head>
<body>
<div id="root"></div>
<script>
const { createElement, useState } = React;
function UserForm() {
  const [formData, setFormData] = useState({ name:"", email:"" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert(\`Name: \${formData.name}, Email: \${formData.email}\`); };
  return createElement('div', null,
    createElement('h2', null, 'User Form'),
    createElement('form', { onSubmit: handleSubmit },
      createElement('input', { type:'text', name:'name', placeholder:'Enter Name', value:formData.name, onChange:handleChange, style:{display:'block', width:'100%', marginBottom:'10px'} }),
      createElement('input', { type:'email', name:'email', placeholder:'Enter Email', value:formData.email, onChange:handleChange, style:{display:'block', width:'100%', marginBottom:'10px'} }),
      createElement('button', { type:'submit' }, 'Submit')
    ),
    createElement('h3', null, 'Live Data:'),
    createElement('p', null, 'Name: ' + formData.name),
    createElement('p', null, 'Email: ' + formData.email)
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(createElement(UserForm));
</script>
</body>
</html>`
  },
  {
    id: 26,
    title: "React Router (Multi‑page Demo)",
    category: "React",
    lang: "React",
    question: "React application with multiple routes (Home, About, Contact).",
    code: `// Home.js, About.js, Contact.js, App.js
// Full routing setup using react-router-dom`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;font-family:sans-serif;padding:20px;text-align:center;} button{background:#333;border:1px solid #666;padding:6px 12px;margin:5px;}</style></head>
<body>
<p style="color:#aaa;">React Router requires a full app setup. Below is a simulation using vanilla JS:</p>
<div style="background:#111;padding:1rem;">
<nav><button id="homeBtn">Home</button> <button id="aboutBtn">About</button> <button id="contactBtn">Contact</button></nav>
<div id="pageContent" style="margin-top:20px;"><h2>Home Page</h2><p>Welcome to Home Page</p></div>
</div>
<script>
function showPage(page) {
  const content = document.getElementById('pageContent');
  if(page === 'home') content.innerHTML = '<h2>Home Page</h2><p>Welcome to Home Page</p>';
  else if(page === 'about') content.innerHTML = '<h2>About Page</h2><p>This is About Page</p>';
  else if(page === 'contact') content.innerHTML = '<h2>Contact Page</h2><p>This is Contact Page</p>';
}
document.getElementById('homeBtn').addEventListener('click', () => showPage('home'));
document.getElementById('aboutBtn').addEventListener('click', () => showPage('about'));
document.getElementById('contactBtn').addEventListener('click', () => showPage('contact'));
</script>
</body>
</html>`
  },

  // ==================== PHP PROBLEMS (27–33) ====================
  {
    id: 27,
    title: "PHP Session (Login/Logout Demo)",
    category: "PHP",
    lang: "PHP",
    question: "Maintain a session using PHP – login form displays welcome message and logout destroys session.",
    code: `<?php
session_start();
if(isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    header("Location: q1.php");
    exit();
}
if(isset($_POST['login'])) {
    $_SESSION['user'] = $_POST['username'];
}
?>
<!DOCTYPE html>
<html>
<head><title>PHP SESSION EXAMPLE</title></head>
<body>
<?php if(isset($_SESSION['user'])): ?>
    <h2>Welcome <?php echo $_SESSION['user']; ?></h2>
    <p>Session is active.</p>
    <a href="?logout=true">Logout</a>
<?php else: ?>
    <h2>Login Page</h2>
    <form method="POST">
        Enter Username: <input type="text" name="username" required><br><br>
        <input type="submit" name="login" value="Login">
    </form>
<?php endif; ?>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;font-family:sans-serif;padding:20px;} input,button{background:#222;border:1px solid #555;padding:6px;color:white;}</style></head>
<body>
<div id="app">
  <h2>Login Page</h2>
  <form id="loginForm">
    Enter Username: <input type="text" id="username" required><br><br>
    <button type="submit">Login</button>
  </form>
</div>
<script>
let sessionUser = null;
function updateUI() {
  const container = document.getElementById('app');
  if(sessionUser) {
    container.innerHTML = \`
      <h2>Welcome \${sessionUser}</h2>
      <p>Session is active.</p>
      <button id="logoutBtn">Logout</button>
    \`;
    document.getElementById('logoutBtn').addEventListener('click', () => { sessionUser = null; updateUI(); });
  } else {
    container.innerHTML = \`
      <h2>Login Page</h2>
      <form id="loginForm">
        Enter Username: <input type="text" id="username" required><br><br>
        <button type="submit">Login</button>
      </form>
    \`;
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('username').value;
      if(name.trim()) sessionUser = name;
      updateUI();
    });
  }
}
updateUI();
</script>
<p style="margin-top:20px; color:#888;">✨ JavaScript simulation of PHP session – works exactly like the original.</p>
</body>
</html>`
  },
  {
    id: 28,
    title: "PHP Cookies (Set & Retrieve)",
    category: "PHP",
    lang: "PHP",
    question: "Write and retrieve cookies – set username cookie, delete it, and display current cookie value.",
    code: `<?php
if(isset($_POST['setcookie'])) {
    $username = $_POST['username'];
    setcookie("user", $username, time() + 3600);
    echo "Cookie has been set!<br>";
}
if(isset($_POST['deletecookie'])) {
    setcookie("user", "", time() - 3600);
    echo "Cookie deleted!<br>";
}
?>
<!DOCTYPE html>
<html>
<body>
<h2>Cookie preview</h2>
<form method="POST">
    Enter name: <input type="text" name="username" required><br><br>
    <input type="submit" name="setcookie" value="Set Cookie">
</form>
<form method="POST">
    <input type="submit" name="deletecookie" value="Delete Cookie">
</form>
<?php
if(isset($_COOKIE['user'])) {
    echo "<h3>Welcome " . $_COOKIE['user'] . "</h3>";
} else {
    echo "<h3>No Cookie found</h3>";
}
?>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} input,button{background:#222;border:1px solid #555;padding:6px;}</style></head>
<body>
<h2>Cookie preview</h2>
<div id="cookieDemo">
  <form id="setForm">
    Enter name: <input type="text" id="cookieName" required><br><br>
    <button type="submit">Set Cookie</button>
  </form>
  <br>
  <button id="deleteBtn">Delete Cookie</button>
  <br><br>
  <h3 id="cookieStatus">No Cookie found</h3>
</div>
<script>
function getCookie(name) { let c = document.cookie.match('(^|;)\\\\s*' + name + '\\\\s*=\\\\s*([^;]+)'); return c ? c.pop() : null; }
function setCookie(name, value, hours) { let d = new Date(); d.setTime(d.getTime() + hours*60*60*1000); document.cookie = name + "=" + value + "; expires=" + d.toUTCString() + "; path=/"; }
function deleteCookie(name) { document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; }
function updateStatus() { let user = getCookie('user'); document.getElementById('cookieStatus').innerHTML = user ? "<h3>Welcome " + user + "</h3>" : "<h3>No Cookie found</h3>"; }
document.getElementById('setForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('cookieName').value;
  if(name.trim()) setCookie('user', name, 1);
  updateStatus();
});
document.getElementById('deleteBtn').addEventListener('click', () => {
  deleteCookie('user');
  updateStatus();
});
updateStatus();
</script>
<p style="margin-top:20px; color:#888;">✨ Uses real browser cookies – same behavior as PHP setcookie.</p>
</body>
</html>`
  },
  {
    id: 29,
    title: "Page Views Counter (Session)",
    category: "PHP",
    lang: "PHP",
    question: "Store page views count in SESSION, increment on each refresh, display the count.",
    code: `<?php
session_start();
if(isset($_SESSION['page_counter'])) {
    $_SESSION['page_counter']++;
} else {
    $_SESSION['page_counter'] = 1;
}
?>
<!DOCTYPE html>
<html>
<body>
<h1>Page Counter</h1>
<p>You have visited this page <?php echo $_SESSION['page_counter']; ?> times.</p>
</body>
</html>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;text-align:center;padding:20px;}</style></head>
<body>
<h1>Page Counter</h1>
<div id="counterDisplay"></div>
<script>
let count = localStorage.getItem('pageCounter') ? parseInt(localStorage.getItem('pageCounter')) : 0;
count++;
localStorage.setItem('pageCounter', count);
document.getElementById('counterDisplay').innerHTML = \`<p>You have visited this page \${count} times.</p><p style="color:#888;">(Refreshing increments counter – session simulation via localStorage)</p>\`;
</script>
</body>
</html>`
  },
  {
    id: 30,
    title: "Last Visit Date/Time (Cookie)",
    category: "PHP",
    lang: "PHP",
    question: "Store current date-time in a Cookie, display 'Last visited on' message.",
    code: `<?php
if(isset($_COOKIE['last_visit'])) {
    $last_visit = $_COOKIE['last_visit'];
    echo "Last visited on: " . $last_visit . "<br>";
} else {
    echo "This is your first visit!<br>";
}
$current_time = date("Y-m-d H:i:s");
setcookie("last_visit", $current_time, time() + 86400);
?>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;}</style></head>
<body>
<div id="lastVisitDemo"></div>
<script>
function getCookie(name) { let c = document.cookie.match('(^|;)\\\\s*' + name + '\\\\s*=\\\\s*([^;]+)'); return c ? c.pop() : null; }
function setCookie(name, value, days) { let d = new Date(); d.setTime(d.getTime() + days*24*60*60*1000); document.cookie = name + "=" + value + "; expires=" + d.toUTCString() + "; path=/"; }
let last = getCookie('last_visit');
let now = new Date().toLocaleString();
let msg = last ? "Last visited on: " + last : "This is your first visit!";
setCookie('last_visit', now, 1);
document.getElementById('lastVisitDemo').innerHTML = \`<p>\${msg}</p><p style="color:#888;">(Page reload updates the cookie – simulate PHP setcookie)</p>\`;
</script>
</body>
</html>`
  },
  {
    id: 31,
    title: "Book Management (MySQL simulation)",
    category: "PHP",
    lang: "PHP",
    question: "Accept book info, store in database, search by title – simulated with JavaScript array.",
    code: `<?php
$conn = new mysqli("localhost", "root", "", "library");
if ($conn->connect_error) die("Connection failed");
if (isset($_POST['add'])) {
    $acc = $_POST['acc']; $title = $_POST['title']; $authors = $_POST['authors']; $edition = $_POST['edition']; $publisher = $_POST['publisher'];
    $sql = "INSERT INTO books VALUES ('$acc','$title','$authors','$edition','$publisher')";
    $conn->query($sql);
    echo "Book Added Successfully";
}
if (isset($_POST['search'])) {
    $search = $_POST['search_title'];
    $sql = "SELECT * FROM books WHERE title LIKE '%$search%'";
    $result = $conn->query($sql);
    // display table
}
?>
<!-- HTML form -->`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} input,button{background:#222;border:1px solid #555;padding:6px;margin:5px;} table{border-collapse:collapse;} th,td{border:1px solid #666;padding:6px;}</style></head>
<body>
<h2>Add Book</h2>
<form id="addForm">
  Accession No: <input type="number" id="acc" required><br><br>
  Title: <input type="text" id="title" required><br><br>
  Authors: <input type="text" id="authors" required><br><br>
  Edition: <input type="text" id="edition"><br><br>
  Publisher: <input type="text" id="publisher"><br><br>
  <button type="submit">Add Book</button>
</form>
<hr>
<h2>Search Book</h2>
<form id="searchForm">
  Enter Title: <input type="text" id="searchTitle" required>
  <button type="submit">Search</button>
</form>
<div id="results"></div>
<script>
let books = [];
function displayBooks(bookList) {
  if(bookList.length===0) { document.getElementById('results').innerHTML = "<p>No records found</p>"; return; }
  let html = '<h3>Search Results</h3><table border="1"><tr><th>Accession No</th><th>Title</th><th>Authors</th><th>Edition</th><th>Publisher</th></tr>';
  bookList.forEach(b => { html += \`<tr><td>\${b.acc}</td><td>\${b.title}</td><td>\${b.authors}</td><td>\${b.edition}</td><td>\${b.publisher}</td></tr>\`; });
  html += '</table>';
  document.getElementById('results').innerHTML = html;
}
document.getElementById('addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let newBook = {
    acc: document.getElementById('acc').value,
    title: document.getElementById('title').value,
    authors: document.getElementById('authors').value,
    edition: document.getElementById('edition').value,
    publisher: document.getElementById('publisher').value
  };
  books.push(newBook);
  alert("Book Added Successfully");
  e.target.reset();
});
document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let term = document.getElementById('searchTitle').value.toLowerCase();
  let filtered = books.filter(b => b.title.toLowerCase().includes(term));
  displayBooks(filtered);
});
</script>
<p style="color:#888;">✨ JavaScript simulation – data stored in memory only.</p>
</body>
</html>`
  },
  {
    id: 32,
    title: "Login Form (Multi-file simulation)",
    category: "PHP",
    lang: "PHP",
    question: "Login with user ID and password stored in mock database.",
    code: `// login.php
<?php session_start(); ?>
<form method="POST" action="check.php">
    User ID: <input type="text" name="user_id"><br>
    Password: <input type="password" name="password"><br>
    <input type="submit" value="Login">
</form>
// check.php
<?php
session_start();
$conn = new mysqli("localhost", "root", "", "login_db");
$user = $_POST['user_id'];
$pass = $_POST['password'];
$sql = "SELECT * FROM users WHERE user_id='$user' AND password='$pass'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $_SESSION['user'] = $user;
    header("Location: welcome.php");
} else {
    echo "Invalid User ID or Password";
}
?>
// welcome.php
<?php session_start(); if (!isset($_SESSION['user'])) header("Location: login.php"); ?>
<h2>Welcome <?php echo $_SESSION['user']; ?>!</h2>`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} input,button{background:#222;border:1px solid #555;padding:6px;}</style></head>
<body>
<div id="loginSim"></div>
<script>
const validUsers = { "admin":"12345", "user":"pass" };
let loggedIn = false, currentUser = null;
function render() {
  const container = document.getElementById('loginSim');
  if(loggedIn) {
    container.innerHTML = \`<h2>Welcome \${currentUser}!</h2><button id="logout">Logout</button>\`;
    document.getElementById('logout').addEventListener('click', () => { loggedIn=false; currentUser=null; render(); });
  } else {
    container.innerHTML = \`
      <h2>Login Form</h2>
      <form id="loginForm">
        User ID: <input type="text" id="uid" required><br><br>
        Password: <input type="password" id="pwd" required><br><br>
        <button type="submit">Login</button>
      </form>
      <p id="msg"></p>
    \`;
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      let uid = document.getElementById('uid').value;
      let pwd = document.getElementById('pwd').value;
      if(validUsers[uid] && validUsers[uid]===pwd) {
        loggedIn = true; currentUser = uid;
        render();
      } else {
        document.getElementById('msg').innerHTML = "Invalid User ID or Password";
      }
    });
  }
}
render();
</script>
<p style="margin-top:20px; color:#888;">✨ Demo uses hardcoded mock credentials.</p>
</body>
</html>`
  },
  {
    id: 33,
    title: "Display PERS Records by Department",
    category: "PHP",
    lang: "PHP",
    question: "Show employees from PERS table where department number matches selected value.",
    code: `<?php
$conn = new mysqli("localhost", "root", "", "company_db");
if(isset($_POST['submit'])) {
    $dno = $_POST['dno'];
    $sql = "SELECT * FROM PERS WHERE dno = '$dno'";
    $result = $conn->query($sql);
    // display table
}
?>
<!-- HTML form with select -->`,
    outputHtml: `<!DOCTYPE html>
<html>
<head><style>body{background:#0a0a0a;color:white;padding:20px;} select,button{background:#222;border:1px solid #555;padding:6px;} table{border-collapse:collapse;} th,td{border:1px solid #666;padding:6px;}</style></head>
<body>
<h2>Select Department Number</h2>
<select id="deptSelect">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<button id="showBtn">Show Records</button>
<div id="records"></div>
<script>
const mockData = {
  1: [{id:101, name:"Alice", age:28, dno:1},{id:102, name:"Bob", age:32, dno:1}],
  2: [{id:201, name:"Charlie", age:35, dno:2}],
  3: [{id:301, name:"David", age:40, dno:3},{id:302, name:"Eve", age:29, dno:3}]
};
document.getElementById('showBtn').addEventListener('click', () => {
  let dno = document.getElementById('deptSelect').value;
  let rows = mockData[dno] || [];
  if(rows.length===0) {
    document.getElementById('records').innerHTML = "<p>No records found!</p>";
    return;
  }
  let html = '<h3>Results:</h3><table border="1"><tr><th>ID</th><th>Name</th><th>Age</th><th>DNO</th></tr>';
  rows.forEach(r => { html += \`<tr><td>\${r.id}</td><td>\${r.name}</td><td>\${r.age}</td><td>\${r.dno}</td></tr>\`; });
  html += '</table>';
  document.getElementById('records').innerHTML = html;
});
</script>
<p style="margin-top:20px; color:#888;">✨ Mock data simulates MySQL query results.</p>
</body>
</html>`
  },
  // ==================== CSS PROBLEMS (34–42) ====================
{
  id: 34,
  title: "Hyperlink Styling (link, visited, active)",
  category: "CSS",
  lang: "CSS",
  question: "Default color pink, active color blue, visited color green, no underline.",
  code: `<!DOCTYPE html>
<html>
<head><title>Hyperlink Editing</title>
<style>
  a:link { color: pink; text-decoration: none; }
  a:visited { color: green; text-decoration: none; }
  a:active { color: blue; text-decoration: none; }
</style>
</head>
<body>
<h2>Styled Hyperlink Example</h2>
<p>
  <a href="https://www.google.com">Open Google</a><br><br>
  <a href="https://www.yahoo.com">Open Yahoo</a><br><br>
  <a href="https://www.microsoft.com">Open Microsoft</a>
</p>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { background: #0a0a0a; color: #e0e0e0; padding: 20px; font-family: sans-serif; }
  a:link { color: pink; text-decoration: none; }
  a:visited { color: #4caf50; text-decoration: none; }
  a:active { color: #2196f3; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style></head>
<body>
<h2>Styled Hyperlink Example</h2>
<p>
  <a href="#">Open Google</a><br><br>
  <a href="#">Open Yahoo</a><br><br>
  <a href="#">Open Microsoft</a>
</p>
<p style="color:#888;">(Links are dummy – style demo only)</p>
</body>
</html>`
},
{
  id: 35,
  title: "Box Shadow & Text Shadow",
  category: "CSS",
  lang: "CSS",
  question: "Create box shadow and text shadow using CSS3.",
  code: `<!DOCTYPE html>
<html>
<head><title>Shadow Example</title>
<style>
  .box {
    width: 300px;
    height: 150px;
    background-color: lightblue;
    margin: 50px;
    padding: 20px;
    box-shadow: 5px 5px 10px gray;
  }
  h1 {
    text-shadow: 3px 3px 5px red;
  }
</style>
</head>
<body>
<h1>This is an example of text shadow</h1>
<div class="box">This is a example of box shadow.</div>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { background: #0a0a0a; color: #000; padding: 20px; font-family: sans-serif; }
  .box {
    width: 300px;
    height: 150px;
    background-color: #add8e6;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 5px 5px 10px gray;
    color: black;
  }
  h1 {
    text-shadow: 3px 3px 5px red;
    color: white;
  }
</style></head>
<body>
<h1>This is an example of text shadow</h1>
<div class="box">This is a example of box shadow.</div>
</body>
</html>`
},
{
  id: 36,
  title: "Rounded Corners (border-radius)",
  category: "CSS",
  lang: "CSS",
  question: "Create rounded corners using CSS3.",
  code: `<!DOCTYPE html>
<html>
<head><title>Rounded Corners Example</title>
<style>
  .box {
    width: 300px;
    height: 150px;
    background-color: coral;
    border: 2px solid black;
    border-radius: 20px;
    padding: 20px;
  }
</style>
</head>
<body>
<h2>This is an example rounded corners</h2>
<div class="box">This box has rounded corners.</div>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { background: #0a0a0a; color: #e0e0e0; padding: 20px; font-family: sans-serif; }
  .box {
    width: 300px;
    height: 150px;
    background-color: #ff7f50;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 20px;
    color: black;
    font-weight: bold;
  }
</style></head>
<body>
<h2>This is an example rounded corners</h2>
<div class="box">This box has rounded corners.</div>
</body>
</html>`
},
{
  id: 37,
  title: "Newspaper Layout (CSS Columns)",
  category: "CSS",
  lang: "CSS",
  question: "Show newspaper layout effects on contents (multiple columns).",
  code: `<!DOCTYPE html>
<html>
<head><title>Newspaper Layout</title>
<style>
  .news {
    column-count: 3;
    column-gap: 30px;
    column-rule: 2px solid black;
  }
</style>
</head>
<body>
<h2>Newspaper Layout Example</h2>
<div class="news">
  Once, there was a hare who was best friends with a tortoise... (full story)
</div>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { background: #0a0a0a; color: #e0e0e0; padding: 20px; font-family: 'Georgia', serif; }
  .news {
    column-count: 3;
    column-gap: 30px;
    column-rule: 2px solid #666;
    text-align: justify;
  }
  h2 { color: white; }
</style></head>
<body>
<h2>Newspaper Layout Example</h2>
<div class="news">
  Once, there was a hare who was best friends with a tortoise. The hare was very proud of how fast he could run, so one day, he challenged the tortoise to a race. The tortoise agreed, even though everyone thought he was way too slow to win. The race began, and the hare raced so fast that he was far ahead of the tortoise.
  <br><br>
  Feeling confident, the hare decided to take a nap under a tree while the tortoise kept going, step by step. When the hare woke up, he was shocked to see the tortoise crossing the finish line. The tortoise had won the race!
  <br><br>
  Moral of the story: It doesn't matter how fast or strong you are—what matters is being steady and never giving up. And don't be too proud, it can cause trouble!
</div>
</body>
</html>`
},
{
  id: 38,
  title: "Transition Effect (hover)",
  category: "CSS",
  lang: "CSS",
  question: "Show transition effect – elements gradually change from one style to another.",
  code: `<!DOCTYPE html>
<html>
<head><title>Transition Effect</title>
<style>
  .box {
    width: 200px;
    height: 100px;
    background-color: red;
    margin: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    line-height: 100px;
    transition: 2s;
  }
  .box:hover {
    background-color: darkviolet;
    width: 300px;
    height: 150px;
  }
</style>
</head>
<body>
<div class="box">This is going to change</div>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { background: #0a0a0a; color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
  .box {
    width: 200px;
    height: 100px;
    background-color: red;
    margin: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s;
    cursor: pointer;
    text-align: center;
  }
  .box:hover {
    background-color: darkviolet;
    width: 300px;
    height: 150px;
  }
</style></head>
<body>
<div class="box">Hover me – I change</div>
</body>
</html>`
},
{
  id: 39,
  title: "Fixed Background Image",
  category: "CSS",
  lang: "CSS",
  question: "Fixed background image that does not scroll with the page.",
  code: `<!DOCTYPE html>
<html>
<head><title>Fixed page</title>
<style>
  body {
    background-image: url("airtel.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  .content {
    height: 2000px;
    color: white;
    font-size: 24px;
    padding: 50px;
  }
</style>
</head>
<body>
<div class="content">
  <h1>Background is fixed</h1>
  <p>Background image is not going to change as you scroll.</p>
  <p>You can scroll</p>
</div>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body {
    background-image: url('https://picsum.photos/id/0/1920/1080');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin: 0;
  }
  .content {
    height: 1500px;
    color: white;
    font-size: 24px;
    padding: 50px;
    background-color: rgba(0,0,0,0.5);
    text-shadow: 1px 1px 2px black;
  }
</style></head>
<body>
<div class="content">
  <h1>Background is fixed</h1>
  <p>Scroll down – the background image stays in place.</p>
  <p style="margin-top: 400px;">You are scrolling, but the background does not move.</p>
</div>
</body>
</html>`
},
{
  id: 40,
  title: "Background Repeat & Position",
  category: "CSS",
  lang: "CSS",
  question: "Position a background image and repeat it vertically (repeat-y).",
  code: `<!DOCTYPE html>
<html>
<head><title>Image changer</title>
<style>
  body {
    background-image: url("aircel.png");
    background-repeat: repeat-y;
    background-position: top center;
  }
  .box { height: 1000px; }
</style>
</head>
<body>
<h1>Background Image Example</h1>
<p>Image repeats vertically</p>
<div class="box"></div>
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body {
    background-image: url('https://picsum.photos/id/1/100/100');
    background-repeat: repeat-y;
    background-position: top center;
    margin: 0;
    padding: 20px;
    color: white;
  }
  .box { height: 800px; }
  h1, p { background: rgba(0,0,0,0.6); display: inline-block; padding: 5px; }
</style></head>
<body>
<h1>Background Image Example</h1>
<p>Image repeats vertically (down the page).</p>
<div class="box"></div>
</body>
</html>`
},
{
  id: 41,
  title: "CSS Position Properties (static, relative, absolute, fixed, sticky)",
  category: "CSS",
  lang: "CSS",
  question: "Demonstrate all CSS position types.",
  code: `<!DOCTYPE html>
<html>
<head><title>Position properties</title>
<style>
  /* full styles as in problem statement */
</style>
</head>
<body>
...
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  * { box-sizing: border-box; }
  body { background: #0a0a0a; color: #e0e0e0; font-family: sans-serif; padding: 20px; margin: 0; }
  .box { width: 200px; height: 100px; margin: 20px; padding: 10px; border: 2px solid white; }
  .static { position: static; background-color: #4169e1; }
  .relative { position: relative; left: 40px; background-color: #32cd32; }
  .container { position: relative; height: 200px; border: 2px dashed #aaa; margin: 20px 0; }
  .absolute { position: absolute; top: 20px; right: 20px; background-color: #ff69b4; }
  .fixed { position: fixed; bottom: 20px; right: 20px; background-color: #ffd700; color: black; z-index: 100; }
  .sticky { position: sticky; top: 0; background-color: #ffa500; padding: 10px; z-index: 10; }
  .long { height: 800px; background: #222; margin-top: 20px; padding: 10px; }
</style></head>
<body>
<h1>CSS position properties</h1>
<div class="box static">Static</div>
<div class="box relative">Relative (left:40px)</div>
<div class="container">
  <div class="box absolute">Absolute (inside container)</div>
</div>
<div class="sticky">Sticky header – scrolls with you until top, then sticks</div>
<div class="long">Scroll down to see the sticky element at top, and fixed button at bottom-right.</div>
<div class="box fixed">Fixed (bottom-right)</div>
</body>
</html>`
},
{
  id: 42,
  title: "Advanced CSS (fonts, backgrounds, links, cursors, layers)",
  category: "CSS",
  lang: "CSS",
  question: "Use different font styles, background images, control repetition, style links, custom cursors, layers (z-index).",
  code: `<!DOCTYPE html>
<html>
<head><title>CSS Features</title>
<style>
  /* full CSS from problem statement */
</style>
</head>
<body>
...
</body>
</html>`,
  outputHtml: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body {
    background: url('https://picsum.photos/id/0/1920/1080') no-repeat center center fixed;
    background-size: cover;
    font-family: Arial, sans-serif;
    margin: 20px;
    color: white;
  }
  h1 { font-family: "Times New Roman", serif; color: #00bfff; }
  p { font-family: Verdana, sans-serif; color: #ff6347; font-size: 18px; background: rgba(0,0,0,0.5); display: inline-block; padding: 5px; }
  .box {
    width: 300px;
    height: 150px;
    background: url('https://picsum.photos/id/1/300/150') repeat-x;
    border: 2px solid white;
    padding: 10px;
    color: black;
    background-color: rgba(255,255,255,0.7);
  }
  a:link { color: #ff69b4; }
  a:visited { color: #1e90ff; }
  a:hover { color: red; cursor: help; }
  a:active { color: orange; }
  .layer1 {
    position: absolute;
    top: 300px;
    left: 50px;
    width: 200px;
    height: 100px;
    background-color: coral;
    z-index: 1;
    color: black;
    padding: 10px;
  }
  .layer2 {
    position: absolute;
    top: 330px;
    left: 80px;
    width: 200px;
    height: 100px;
    background-color: blanchedalmond;
    z-index: 2;
    color: black;
    padding: 10px;
  }
</style></head>
<body>
<h1>CSS FEATURES</h1>
<p>This has some different styles and background.</p>
<div class="box">Background image inside an element (repeats horizontally).</div>
<br><br>
<a href="#">Open google</a><br>
<a href="#">Open microsoft</a><br><br>
<div class="layer1">LAYER 1 (z-index 1)</div>
<div class="layer2">LAYER 2 (z-index 2 – on top)</div>
<p style="margin-top: 180px;">Note the layered boxes (absolute positioning).</p>
</body>
</html>`
}
];