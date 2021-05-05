projects = [
        {
            "id": "uiip",
            "name": "MeetMe, a streamlined Office Hour manager prototype, User Interface Design, Fall 2020",
            "link": "https://github.com/LindseyWeiskopf/UI20IP"
        },
        {
            "id": "state",
            "name": "Comparing New Voter Registration in the Past Two Presidential Elections: 2016 and 2020, Dataviz, Spring 2021",
            "link": "https://observablehq.com/d/48fcc3cbc8cf279c"
        },
        {
            "id": "ar",
            "name": "CU@Home, Winner of Columbia Virtual Campus' Most Fun Design Award at the Spring 2020 Designathon",
            "link": "https://www.engineering.columbia.edu/news/lydia-chilton-eugene-wu-design-challenge-covid"
        },
        {
            "id": "smallcity",
            "name": "SmallCity, A search engine for local business, Google STEP Internship, Summer 2020",
            "link": "https://step2020-smallcity.appspot.com/"
        },
        {
            "id": "tango",
            "name": "My adorable kitten, Tango. I hand-reered him and his siblings, Fall 2020",
            "link": ""
        },
        {
            "id": "reptile",
            "name": "Reptile, A programming language for simple geometric drawing, Programming Languages & Translators, Spring 2021",
            "link": "https://github.com/avivaweinbaum/reptile"
        },
        {
            "id": "clock",
            "name": "Abstract Clock, Dataviz, Spring 2021",
            "link": "https://github.com/LindseyWeiskopf/lindseyweiskopf.github.io"
        },
        {
            "id": "rap",
            "name": "Rap Over Time - A Textual Data Analysis, Dataviz, Spring 2021",
            "link": "https://observablehq.com/@columbiaviz-s21/rap-over-time-april-12"
        },
        {
            "id": "spatial",
            "name": "Blog for Spatial History and Historical GIS, Fall 2020",
            "link": "https://blogs.cuit.columbia.edu/ltw2115/"
        },
        {
            "id": "fractal",
            "name": "Fractal Drawing with Python Turtle, ongoing",
            "link": "https://github.com/LindseyWeiskopf/fractal-inprogress"
        },
        {
            "id": "gismethods",
            "name": "A GIS Analysis of Columbia's Manhattanville Campus, Fall 2019",
            "link": ""
        }];

var p = document.getElementById('projects');
var intro = document.getElementById('intro');
var i = 0;
// for (i = 0; i<p.length; i++) {
//     alert("HHI");
//     p[i].addEventListener('mouseover', mouseOver, false);
//     p[i].addEventListener('mouseout', mouseOut, false);
// }

function mouseOver(a) {
    // document.getElementById('projects').style.zIndex = '1';
    
    // document.getElementById('intro').style.color = 'lightgray';
    // p.style.zIndex = "12";
    var title = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === a.id) {
            document.getElementById(a.id).style.opacity = '100%';
            document.getElementById(a.id).style.cursor = "pointer";
            title = projects[i].name;
            document.getElementById(a.id).addEventListener("click", function () {
                window.open(projects[i].link);
            });
        }
        else {
            document.getElementById(projects[i].id).style.opacity = '35%';
        }
    }
    
    document.getElementById(a.id).setAttribute("tooltip", title);
    var tooltipWrap = document.createElement("div"); //creates div
    tooltipWrap.className = 'tooltip'; //adds class
    tooltipWrap.appendChild(document.createTextNode(title)); //add the text node to the newly created div.
 
    var firstChild = document.body.firstChild;//gets the first elem after body
    firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem 

    var padding = 5;
    var linkProps = document.getElementById(a.id).getBoundingClientRect();
    var tooltipProps = tooltipWrap.getBoundingClientRect(); 
    var topPos = linkProps.top - (tooltipProps.height + padding);
    tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+linkProps.left+'px;')
}

function mouseOut(b) {
    document.querySelector(".tooltip").remove();
    document.getElementById('projects').style.zIndex = '-1';
    document.getElementById('projects').style.opacity = '100%';
    for (let i = 0; i < projects.length; i++) {
        document.getElementById(projects[i].id).style.opacity = '100%';
    }
}
