import { Component, OnInit } from '@angular/core';
import { UsersphService } from 'src/app/services/usersph.service';
import { Users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];
  show: boolean = true;
  imgLogo: string = 'assets/img/SeEckP4.jpg'
  constructor(private usersService: UsersphService) { }

  ngOnInit() {
    // this.usersService.getUsers().subscribe(data => console.log(data));
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }

  mostrarLista() {
    this.show = !this.show
  }

}
