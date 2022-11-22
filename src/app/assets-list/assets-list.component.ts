import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

export interface Assets {
  name: string;
  description: string;
  quantity: number;
  status: string;
}

const ELEMENT_DATA: Assets[] = [
  {name: 'Confluence', description: 'Manage Software Development projects', quantity: 1, status: 'Pending'},
  {name: 'Github', description: 'Code hosting platform', quantity: 3, status: 'Online'},
  {name: 'Jira', description: 'Create issues', quantity: 1, status: 'Online'}
];

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssetsListComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['name', 'description', 'quantity', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  assetsForm !: FormGroup;
  asset: Assets = {
    name: '',
    description: '',
    quantity: 1,
    status: ''
  }

  constructor(private formBuilder: FormBuilder) {
    this.assetsForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addAssets(){
    if(this.assetsForm.valid){
      ELEMENT_DATA.push(this.asset)
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.asset = {
        name: '',
        description: '',
        quantity: 1,
        status: ''
      }
      this.clearValidators();
    }
  }

  private clearValidators() {
    this.assetsForm.get('name')?.clearValidators();
    this.assetsForm.get('name')?.updateValueAndValidity();
    this.assetsForm.get('description')?.clearValidators();
    this.assetsForm.get('description')?.updateValueAndValidity();
    this.assetsForm.get('quantity')?.clearValidators();
    this.assetsForm.get('quantity')?.updateValueAndValidity();
    this.assetsForm.get('status')?.clearValidators();
    this.assetsForm.get('status')?.updateValueAndValidity();
  }
}
