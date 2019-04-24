// CODE here for your Lambda Classes
class Person {
	constructor(personAttrs) {
		this.name = personAttrs.name;
		this.age = personAttrs.age;
		this.location = personAttrs.location;
		this.gender = personAttrs.gender;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}

class Instructor extends Person {
	constructor(instructorAttrs) {
		super(instructorAttrs);
		this.speciality = instructorAttrs.speciality;
		this.favLanguage = instructorAttrs.favLanguage;
		this.catchPhrase = instructorAttrs.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}.`;
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}.`;
	}
}

class Student extends Person {
	constructor(studentAttrs) {
		super(studentAttrs);
		this.previousBackground = studentAttrs.previousBackground;
		this.className = studentAttrs.className;
		this.favSubjects = studentAttrs.favSubjects;
	}
	listsSubjects() {
		let favorite = this.favSubjects.map((subjects, i) => {
			console.log(subjects);
			return subjects;
		});
		return favorite;
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}.`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}.`;
	}
}

class ProjectManager extends Instructor {
	constructor(projectManagerAttrs) {
		super(projectManagerAttrs);
		this.gradClassName = projectManagerAttrs.gradClassName;
		this.favInstructor = projectManagerAttrs.favInstructor;
	}
	standUp(channel) {
		return `${this
			.name} announces to ${channel}, @${channel} standy times!`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

const fred = new Instructor({
	name        : 'Fred',
	location    : 'Bedrock',
	age         : 37,
	gender      : 'male',
	favLanguage : 'JavaScript',
	speciality  : 'Front-end',
	catchPhrase : `Don't forget the homies`,
});

console.log(fred);

const wilma = new ProjectManager({
	name          : 'Wilma',
	location      : 'Bedrock',
	age           : 40,
	gender        : 'female',
	speciality    : 'React',
	favLanguage   : 'Visual C#',
	gradClassName : 'WEBPT6',
	favInstructor : 'Fred',
});

const pebbles = new Student({
	name               : 'Pebbles',
	location           : 'Bedrock',
	age                : 3,
	gender             : 'female',
	previousBackground : 'Vue.JS',
	className          : 'WEBPT7',
	favSubjects        : [ 'HTML', 'CSS', 'JavaScript' ],
});

console.log(wilma);

console.log(pebbles);

console.log(pebbles.listsSubjects());

console.log(wilma.debugsCode(pebbles, 'Applied JavaScript'));

console.log(wilma.standUp('WEBPT7-Wilma'));
