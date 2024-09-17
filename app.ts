interface ResumeData {
    name: string;
    email: string;
    age: number;
    education: string;
    workExperience: string;
    skills: string;
}

function generateResume1(data: ResumeData): string {
    return `
        <h2>${data.name}'s Resume</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Work Experience</h3>
        <p>${data.workExperience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}

document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    
    const formData: ResumeData = {
        name: (form.querySelector('#name') as HTMLInputElement).value,
        email: (form.querySelector('#email') as HTMLInputElement).value,
        age: parseInt((form.querySelector('#age') as HTMLInputElement).value),
        education: (form.querySelector('#education') as HTMLTextAreaElement).value,
        workExperience: (form.querySelector('#work-experience') as HTMLTextAreaElement).value,
        skills: (form.querySelector('#skills') as HTMLInputElement).value
    };
    
    const resumeHtml = generateResume(formData);
    document.getElementById('resume-output')!.innerHTML = resumeHtml;
});
