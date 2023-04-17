import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productId:any;
  product:Product={}

constructor(private db:DBService,private ar:ActivatedRoute,private router:Router){
  this.productId=this.ar.snapshot.params["id"];
  this.db.getProduct(this.productId).subscribe((data)=>{
    this.product=data
  })
}

onSubmit(form:NgForm){
  this.db.editProduct(this.productId,form.value).then((data)=>{
    this.router.navigate(['/']);
  }).catch((err)=>{

  })
}

onCancel(){
this.router.navigate(['/'])
}


}
