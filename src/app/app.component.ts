import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  test = 'test login';
  name: string;
  desc: string;
  lists: any = [];
  date = new Date();



  ngOnInit() {
  }

  addlist() {
    let obj = {
      name: this.name,
      desc: this.desc,
      date: (this.date).toISOString(),
      status: 'active'
    }
    this.lists.push(
      obj
    )
  }

}
