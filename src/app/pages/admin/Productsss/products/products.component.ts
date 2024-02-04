import { Product } from './../../../../types/Product';
import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductAdmin } from '../../../../types/Product';
import { ProductService } from '../../../../services/product.service';
import { RouterLink } from '@angular/router'; // import service
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { Category } from '../../../../types/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, SidebarComponent , CommonModule , FormsModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: any[] = [];
  categoryList: Category[] = [];
  initalList: Product[] = [];
  filteredProducts: Product[] = [];
  defautlString: string = "";
  productService = inject(ProductService); // inject vao bien
  constructor(private Product: ProductService, private cate: CategoryService){}
  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => (this.productList = products));
      
      this.cate.getAllCate().subscribe(data => this.categoryList = data);// callApi.then(cb fuc)
  }

  handleDeleteProduct(id: string) {
    const isDelete = confirm('Are you sure you want to delete this product');
    if (isDelete) {
      this.productService
        .deleteProductAdmin(id)
        .subscribe(
          () =>
          this.productList = this.productList.filter(
            ((product:any) => product.id !== id
          )))
        
    }
  }
  isDisplayBlock: boolean = false;
  handleClickDisplayed() {
    this.isDisplayBlock = !this.isDisplayBlock;
  }

  handleFilterCategory(category: string) {
    if (category) {
      this.productService.getAll().subscribe((data:any) => {
        this.initalList = data.filter((prd:any) => prd.category === category)
        console.log(this.initalList)
      })
      this.productList = this.initalList
    }

    else {
      this.ngOnInit();
    };
  }
}
