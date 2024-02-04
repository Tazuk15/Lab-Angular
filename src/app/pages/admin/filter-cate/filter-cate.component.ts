import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../types/Product';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-filter-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-cate.component.html',
  styleUrl: './filter-cate.component.css'
})
export class FilterCategoryComponent implements OnInit {

  categories: Category[] = [];
  constructor(private cate: CategoryService) {
  }
  ngOnInit(): void {
    this.cate.getAllCate().subscribe(data => this.categories = data);
  }
  isDisplayBlock: boolean = false;
  handleClickDisplayed(): void {
    this.isDisplayBlock = !this.isDisplayBlock;
  }

}