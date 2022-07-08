import { Component, OnInit } from '@angular/core';
import { WishModel } from './home.model';
import { WishService } from '../wish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wishData:any = new WishModel("","","");
  constructor(public wishService:WishService, public router:Router) { }

  ngOnInit(): void {
  }

  NewWish(){
    this.wishService.addWish(this.wishData).subscribe((data)=>{
      var id = JSON.parse(JSON.stringify(data))
      this.router.navigate(['/success/',id._id])
      alert('New Wish')
    })
  }

}
