import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  public doughnuts: any = [
    {
      doughnutChartLabels: ["Angular"],
      doughnutDataColors: ["#e02222","#C0C0C0"],
      doughnutData: [ 80, 20 ],
      image: 'angular.svg'
    },
    {
      doughnutChartLabels: ["Javascript"],
      doughnutDataColors: ["#d8db12","#C0C0C0"],
      doughnutData: [ 70, 30 ],
      image: 'javascript.svg'
    },
    {
      doughnutChartLabels: ["HTML"],
      doughnutDataColors: ["#fa6a02ee","#C0C0C0"],
      doughnutData: [ 87, 23 ],
      image: 'html-1.svg'
    },
    {
      doughnutChartLabels: ["CSS"],
      doughnutDataColors: ["#003cb3ee","#C0C0C0"],
      doughnutData: [ 80, 20 ],
      image: 'css-3.svg'
    },
    {
      doughnutChartLabels: ["Sass"],
      doughnutDataColors: ["#e00087ee","#C0C0C0"],
      doughnutData: [ 40, 50 ],
      image: 'sass-1.svg'
    },
    {
      doughnutChartLabels: ["NodeJS"],
      doughnutDataColors: ["#008000","#C0C0C0"],
      doughnutData: [ 40, 60 ],
      image: 'nodejs-1.svg'
    }, 
    {
      doughnutChartLabels: ["MongoDb"],
      doughnutDataColors: ["#45bf51ee","#C0C0C0"],
      doughnutData: [ 20, 70 ],
      image: 'mongodb-icon-1.svg'
    }, 
    {
      doughnutChartLabels: ["GitHub"],
      doughnutDataColors: ["#000e","#C0C0C0"],
      doughnutData: [ 60, 40 ],
      image: 'github-icon-1.svg'
    },
    {
      doughnutChartLabels: ["Git"],
      doughnutDataColors: ["#db1f1fee","#C0C0C0"],
      doughnutData: [ 70, 30 ],
      image: 'git-icon.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
