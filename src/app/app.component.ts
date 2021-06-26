import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentsService } from './comments.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myForm: FormGroup;
  public searchResult: any[];
  public errorMessage: string;
  constructor(
    private builder: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.myForm = this.builder.group({
      continent: ''
    });
  }

  onSubmit(searchValue) {
    this.errorMessage = '';
    this.searchResult = [];
    if (searchValue.continent.length > 3) {
      this.commentsService
        .getContacts(searchValue.continent)
        .subscribe(data => {
          if (data.length > 20) {
            data = data.slice(0, 20);
          }
          this.searchResult = data;
          console.log(this.searchResult);
        });
    } else {
      this.errorMessage = 'Please enter search text more than 3 characters';
    }
  }
}
