import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor , RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuList = [
    {
      label: 'Trang chủ',
      link: '/',
    },
    {
      label: 'Về chúng tôi',
      link: '/about-us',
    },
    {
      label: 'Cửa hàng',
      link: '/shop',
    },
    {
      label: 'Liên lạc',
      link: '/',
    },
  ]; // NgFor
}
