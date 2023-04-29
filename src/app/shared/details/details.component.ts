import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetails } from 'src/app/Interface/response';
import { ApiService } from 'src/app/services/api.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() rowId: string = '';
  detailsData!: IDetails[];
  showBackButton: boolean = false;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute , private breakpointObserver: BreakpointObserver,
    private router: Router) { 
    this.breakpointObserver.observe(['(max-width: 577px)']).subscribe((state: BreakpointState) => {
      if (!state.matches && this.showBackButton ) {
        this.router.navigate(['/list'])
      }
    });
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      this.showBackButton = true;
      this.rowId = this.activatedRoute.snapshot.params['id'];
      this.getDetails()
    }
  }

  ngOnChanges() {
    if (this.rowId) {
      this.getDetails();
    }
  }

  getDetails() {
    this.detailsData = this.apiService.getDetails(this.rowId);
  }
  goBack(){
    window.history.go(-1);
  }

}
