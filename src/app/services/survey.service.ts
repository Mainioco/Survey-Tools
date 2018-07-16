import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  getSurvey(id: number): any {
    return this.surveys[id];
  }

  sendSurveyToServer(survey) {
    console.log(JSON.stringify(survey.data));
  }

  surveys = [
    {
      pages: [
        {
          name: 'Background Questions',
          elements: [
            {
              type: 'dropdown',
              name: 'Are You a Customer?',
              title: 'Are You A Customer?',
              isRequired: true,
              choices: [
                {
                  value: '1',
                  text: 'Yes'
                },
                {
                  value: '2',
                  text: 'Not anymore'
                },
                {
                  value: '3',
                  text: "I'm not a customer"
                }
              ]
            },
            {
              type: 'checkbox',
              name: 'question1',
              title: 'What fields do your company work with?',
              isRequired: true,
              validators: [
                {
                  type: 'answercount',
                  minCount: 1,
                  maxCount: 2
                }
              ],
              choices: [
                {
                  value: '1',
                  text: 'Buesiness to Business'
                },
                {
                  value: '2',
                  text: 'Business to Customer'
                },
                {
                  value: '3',
                  text: 'Business to Customer'
                },
                {
                  value: '4',
                  text: 'Non-profit'
                },
                {
                  value: '5',
                  text: 'Non above'
                }
              ]
            }
          ]
        },
        {
          name: 'page2',
          elements: [
            {
              type: 'matrix',
              name: 'question2',
              title: 'Which factors did trigger your demand?',
              isRequired: true,
              columns: [
                {
                  value: '1',
                  text: 'Strongly Agree'
                },
                {
                  value: '2',
                  text: 'Agree'
                },
                {
                  value: '3',
                  text: 'Somewhat agree'
                },
                {
                  value: '4',
                  text: 'Neither agree or disagree'
                },
                {
                  value: '5',
                  text: 'Somewhat disagree'
                },
                {
                  value: '6',
                  text: 'Disagree'
                },
                {
                  value: '7',
                  text: 'Strongly disagree'
                },
                {
                  value: '8',
                  text: "Other / I Don't know"
                }
              ],
              rows: [
                {
                  value: '1',
                  text: 'New demands have arisen'
                },
                {
                  value: '2',
                  text: 'We wanted more powerful tools'
                },
                {
                  value: '3',
                  text: 'We wanted to tender out our service providers'
                },
                {
                  value: '4',
                  text: 'We wanted new prespective'
                },
                {
                  value: '5',
                  text: 'We wanted to conecntrate all services to one provider'
                }
              ]
            },
            {
              type: 'dropdown',
              name: 'question4',
              title: 'Which one of the above is the most meaning to you?',
              isRequired: true,
              choices: [
                {
                  value: '1',
                  text: 'New demands have arise'
                },
                {
                  value: '2',
                  text: 'We wanted more powerful tools'
                },
                {
                  value: '3',
                  text: 'We wanted to tender out our service providers'
                },
                {
                  value: '4',
                  text: 'We wanted new perspective'
                },
                {
                  value: '5',
                  text: 'We wanted to concentrate all services to one provider'
                }
              ]
            }
          ]
        },
        {
          name: 'page3',
          elements: [
            {
              type: 'rating',
              name: 'question5',
              title:
                'On scale from 0 to 10 how ready would you be to recommend us to other people?',
              isRequired: true,
              rateMin: 0,
              rateMax: 10
            },
            {
              type: 'dropdown',
              name: 'question6',
              title: 'How propably are you going to deepend our relationships?',
              isRequired: true,
              choices: [
                {
                  value: '1',
                  text: 'Absolutely'
                },
                {
                  value: '2',
                  text: 'Most likely'
                },
                {
                  value: '3',
                  text: 'Propably'
                },
                {
                  value: '4',
                  text: "I don't know"
                },
                {
                  value: '5',
                  text: 'Unlikely'
                },
                {
                  value: '6',
                  text: 'Most likely'
                },
                {
                  value: '7',
                  text: 'Absolutely not'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
