import React from "react";

var courses = "https://jsonplaceholder.typicode.com/users"
function start(){
    CourseCard(renderCourse)
}
start()



export default function CourseCard(callback){
    fetch(courses)
      .then((response) => response.json())
      .then(callback);
    return(
        <div className="card">
            <img src=""></img>
            
            
        </div>
    )
}

function renderCourse(courses){
    var card = document.querySelector('#courses_card')
    var htmls = courses.map(function (course) {
        return `<div class = "course-card">
        <img src = "https://robohash.org/${course.id}?set=set2&size=180x180"></img>
          <h3> ${course.name} </h3>
          <p> ${course.phone}</p>
        </div> `;
    } )
    card.innerHTML = htmls.join('')
    
}