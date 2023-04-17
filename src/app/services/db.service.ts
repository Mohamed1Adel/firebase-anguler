import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class DBService {
  constructor(private firestore: Firestore) {}

  addProduct(product: Product) {
    let $productsRef = collection(this.firestore, 'products');
    return addDoc($productsRef, product);
  }

  getProducts() {
    let $productsRef = collection(this.firestore, 'products');
    return collectionData($productsRef, { idField: "id" }) as Observable<Product[]
    >;
  }

  deleteproduct(id:any){
    let $productRef = doc(this.firestore, 'products/' + id);
    return deleteDoc($productRef)
  }

  getProduct(id:string){
        let $productRef = doc(this.firestore, 'products/' + id);
      return docData($productRef,{idField:"id"}) as Observable<Product>
  }
  editProduct(id:string,product:Product){
        let $productRef = doc(this.firestore, 'products/' + id);
      return setDoc($productRef , product)
  }
}
