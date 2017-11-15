var project = 
[
    {   
        "tech": "HTML5",
        "description" : "Simple web home.", 
        "web" : "https://buddhahood.github.io/IT202/project1",
        "git": "https://github.com/buddhahood/IT202/tree/master/project1/"
    }, 
    {   
        "tech": "HTML5, CSS, Bootstrap",
        "description" : "Simple Bootstrap template test/modification.", 
        "web" : "https://buddhahood.github.io/IT202/project2",
        "git": "https://github.com/buddhahood/IT202/tree/master/project2/"
    }, 
    {   
        "description" : "Searches the City of Chicago API for food inspection test results; maps output.", 
        "tech": "AJAX, Responsive Design, Material Design Components, Bootstrap, Google Maps API", 
        "web" : "https://buddhahood.github.io/IT202/project3/",
        "git" : "https://github.com/buddhahood/IT202/tree/master/project3/"
    },
    {   
        "tech": "JavaScript, HTML5 Canvas, Request Animation Frame",
        "description" : "Simple side-scrolling JavaScript game.", 
        "web" : "https://buddhahood.github.io/IT202/project4/",
        "git": "https://github.com/buddhahood/IT202/tree/master/project4/"
    },
    {   
        "tech": "PWA, AJAX, Service Workers, Responsive Design, Material Design Components",
        "description" : "Weather app which reverts to cached weather data when offline.", 
        "web" : "https://buddhahood.github.io/IT202/project5/",
        "git": "https://github.com/buddhahood/IT202/tree/master/project5/"
    }, 
    {   
        "tech": "JavaScript, JSON",
        "description" : "Links to this page; creates dynamic project list from array.", 
        "web" : "https://buddhahood.github.io/IT202/project6/",
        "git": "https://github.com/buddhahood/IT202/tree/master/project6/"
    }, 
    {   
        "tech": "PWA, Service Workers, Responsive Design, Material Design Components",
        "description" : "Simple activation of audio file; functional offline.", 
        "web" : "https://buddhahood.github.io/IT202/project7/",
        "git": "https://github.com/buddhahood/IT202/tree/master/project7/"
    }, 
/*     For Future Use:
    {   
        "tech": "",
        "description" : "", 
        "web" : "https://buddhahood.github.io/IT202/project/",
        "git": "https://github.com/buddhahood/IT202/tree/master/project/"
    }, 
*/
];
// Loop:
$.each(project, function(i,v)
{
    var clone = $("#template").clone();
    clone.find("#description").text(v.description);
    clone.find("#tech").text(v.tech);
    clone.find("#web").attr("href", v.web); clone.find("#web").text(v.web);
    clone.find("#git").attr("href", v.git); clone.find("#git").text(v.git);
    // Send to allprojects section.
    $("#allprojects").append(clone);
});