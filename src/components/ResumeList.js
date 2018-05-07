const RESUME_LIST = ['profile', 'school', 'experience', 'skill', 'coursework']
const SCHOOL_LIST = ['name', 'major', 'gpa', 'startDate', 'endDate'];
const SKILL_LIST = ['name'];
const COURSEWORK_LIST = ['name'];
const PROFILE_LIST = ['firstname', 'lastname', 'location', 'description', 'imageUrl'];
const EXPERIENCE_LIST = ['name', 'time']
const RESUME_ARRAY = [];
RESUME_ARRAY[0] = PROFILE_LIST;
RESUME_ARRAY[1] = SCHOOL_LIST;
RESUME_ARRAY[2] = ['name', 'time', 'bullet']
RESUME_ARRAY[3] = SKILL_LIST;
RESUME_ARRAY[4] = COURSEWORK_LIST;
export { RESUME_LIST as ResumeList };
export { SCHOOL_LIST as SchoolList };
export { SKILL_LIST as SkillList };
export { COURSEWORK_LIST as CourseworkList };
export { PROFILE_LIST as ProfileList };
export { EXPERIENCE_LIST as ExperienceList };
export { RESUME_ARRAY as ResumeArray };
