# ExamRoom.AI SDK

### Table of Contents
* [What is this?](#what-is-this)
* [Installation](#installation)
* [Run application](#run-application)
* [Declarations](#declarations)
* [Implementations](#implementations)
* [Candidates](#candidates)
* [Exams](#exams)
---

## What is this?
This is a project which demonstrates the client intended features of [ExamRoom.AI](https://examroom.ai)

## Installation
Clone the app first.
```shell
git clone https://github.com/ExamRroom-AI/ex-ai-ng
cd ex-ai-ng
```
This app will install all the required dependencies automatically. 
Just start the commands below in the root folder where you stored the package.

```shell
$ npm install
```

## Run application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Declarations

In index.html
```html
<script src="https://docs.examroom.ai/lib/js/apis/examroom-api.min.js" type="text/javascript"></script>
<script src="https://docs.examroom.ai/lib/js/sdk/examroom-sdk.min.js" type="text/javascript"></script>
```

In typing.d.ts directory on (src/typing.d.ts)
```ts
declare var ExamRoom: any;
```

## Implementations

In component.ts

```ts
const examRoom = new ExamRoom();
apiKey = "XXXXXXX";
secretKey = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX";
```

## Candidates
Add the candidate details.

```ts
addCandidates(value){
    let random = Math.floor(Math.random() * Math.floor(1000000));
    let a = {
        candidateId: String(random),
        firstName: value.firstName,
        lastName:  value.lastName,
        addressLine1:  value.addressOne,
        addressLine2:  value.addressTwo,
        city:  value.city,
        stateCode: random,
        postalCode:  value.zip,
        countryCode:  value.countryCode,
        mobileTelephoneNumber:  value.mobileNumber,
        telephoneNumber:  value.landlineNumber,
        emailAddress: value.email,
        groupID: 12345,
        groupName: "SampleGroup"
    }
    this.candidateDetails.push(a);
}
```
Submit added candidates list.

```ts
submit(){
    examRoom.addCandidates(this.apiKey, this.secretKey, this.candidateDetails)
    .then(data => console.log(data)) //Received data
    .catch(err => console.log(err)) //Error response
}
```

## Exams
Add the exam details.

```ts
addExams(value){
    let a = {
      examID: "",
      examName: value.examName,
      date: value.examDate,
      duration: value.examDuration,
      ExamURL: value.examURL
      groupID: 12345,
      groupName: "SampleGroup"
    }
    this.examDetails.push(a);
}
```
Submit added exams list.

```ts
submit(){
    examRoom.addExam(this.apiKey, this.secretKey, this.examDetails)
    .then(data => console.log(data)) //Received data
    .catch(err => console.log(err)) //Error response
}
```

## Further help

To get more help on ExamRoom.AI SDK go check out the [SDK Documentation](https://examroom.ai).
