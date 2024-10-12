document.addEventListener('DOMContentLoaded', () => {
    // Հարթ ոլորում նավիգացիայի համար
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function openCourseTab(course) {
    const courses = {
        'programming': 'programming.html',
        'cybersecurity': 'cybersecurity.html',
        'ethical-hacking': 'ethical-hacking.html',
        'networking': 'networking.html',
        'system-administration': 'system-administration.html'
    };

    if (courses[course]) {
        window.open(courses[course], '_blank');
    } else {
        alert('Դասընթացը չի գտնվել');
    }
}