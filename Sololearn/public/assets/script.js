const menuBtn = document.getElementById('menuBtn');
    const mobMenu = document.getElementById('mobMenu');
    menuBtn.addEventListener('click', () => {
      mobMenu.classList.toggle("hidden");
})


let coursesContainer = document.getElementById('course-container');
let courseCard = "";

fetch("assets/courses.json")
.then(response => response.json())
.then(courses => {
    console.log(courses);

    courses.forEach(course => {
        courseCard += `
        <div class="flex flex-col items-center justify-center space-y-3 px-2 py-6 border border-b-4 rounded-md bg-white cursor-pointer transform hover:-translate-y-1">
        <div class="w-20 h-20 p-0.5 rounded-full border-4 border-gray-300">
        <img class="w-full h-full rounded-full border object-cover" src="assets/images/courses/${course.id}.png" alt="" srcset="" draggable="false">
        </div>
        <h2 class="text-lg font-bold text-center text-gray-800">${course.title}</h2>
        <span class="text-sm text-gray-400">${course.learners} Learners</span>
        </div>`
    });
    coursesContainer.innerHTML = courseCard;
})