import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  providers:[SearchService],
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private router: Router, private searchService: SearchService) { }

  doSearch(value: string): void {
    this.searchService.getSearchForArtists(value);
    this.router.navigate(['artists' ,value]);
  }

}