import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVendorDetails } from 'src/app/Interface/response';
import { ApiService } from 'src/app/services/api.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listData!: IVendorDetails[];
  filteredValue!: IVendorDetails[];
  selectedRowId: string = '';
  mobileViewEnabled: boolean =false;
  constructor(private apiService: ApiService, private router: Router,private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 577px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.mobileViewEnabled = true;
      }

      else {
        this.mobileViewEnabled = false;
      }
    });
    
  }

  ngOnInit(): void {
    this.listData = this.apiService.getList();
    this.filteredValue = this.listData
  }


  valueSearched($event: any) {
    console.log($event)
    let val = $event.target.value;
    console.log($event.target.value)
    console.log(val)
    if (!$event.target?.value) {
      this.listData = this.filteredValue
    }
    else {
      this.listData = this.filteredValue.filter((data) => {
        console.log(data.entities.toString().indexOf(val))
        return data['name'].includes(val) || data.entities.toString().match(val);
      })
    }
    console.log(this.filteredValue)
  }

  getDetails(data: IVendorDetails) {
    console.log(data)
    console.log(this.mobileViewEnabled)
    if(!this.mobileViewEnabled){

      this.selectedRowId = data._id;
    }
    else {
      this.router.navigate([`details/${data._id}`])
    }
  }

}
