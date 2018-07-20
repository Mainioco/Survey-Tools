# Mainio Survey

Angular 6 web component application that provides ease of integration of SurveyJS formatted surveys to any app and website

![Build status](https://mainiocoproduction.visualstudio.com/_apis/public/build/definitions/8f3b2aa3-39a3-4734-88b5-e20e775f0672/5/badge)

## Install

1. Install mainio-survey `npm i mainio-survey` or `yarn add mainio-survey`

2. Install peer dependencies `npm i @angular/core @angular/common @angular/elements @webcomponents/custom-elements @angular/cdk survey-angular uuid`

2. Add polyfill `import '@webcomponents/custom-elements/src/native-shim';`

3. Add basic SurveyJS styles to your index.html `<link href="https://surveyjs.azureedge.net/1.0.32/survey.css" type="text/css" rel="stylesheet"/>`

## Usage

Pass the data to mainio-survey element via component inputs:

`<mainio-survey api="assets/mock" survey_id="survey-1" user_id="user123">No survey data received.</mainio-survey>`

Or via window-object

`<script>
window.MainioSurveyData = { api: "assets/mock", survey_id: "survey-1", user_id: "user123" };
</script>`

You can use our [Demo project](https://github.com/Mainioco/Survey-Tools) as a starting point.



