import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-ad-student',
  templateUrl: './ad-student.component.html',
  styleUrls: ['./ad-student.component.css'],
})
export class AdStudentComponent implements OnInit {
  student: Array<any> = [];
  showPass: boolean = false;

  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {
    this.StudentService.list().subscribe((data) => {
      this.student = data;
    });
    this.search
    this.delStudent
  }

  

  search(e: any){
    let keyword = e.target.value

    this.StudentService.search(keyword).subscribe((data) => {
       this.student  = data;
    })
  }

  delStudent(id:Number){
     this.StudentService.delete(id).subscribe(res => {
        window.location.reload()
        alert('Student deleted successfully')
     })
  }
}
