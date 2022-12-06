import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number | undefined;
  employee!: Employee ;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id!)
      .subscribe((data: Employee) => {
        console.log(data)
        this.employee = data;
      }, (error: any) => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id!, this.employee)
      .subscribe((data: any) => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
