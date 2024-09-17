var _a;
function generateResume(data) {
    return "\n        <h2>".concat(data.name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Age:</strong> ").concat(data.age, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(data.workExperience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
}
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;
    var formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        age: parseInt(form.querySelector('#age').value),
        education: form.querySelector('#education').value,
        workExperience: form.querySelector('#work-experience').value,
        skills: form.querySelector('#skills').value
    };
    var resumeHtml = generateResume(formData);
    document.getElementById('resume-output').innerHTML = resumeHtml;
});
