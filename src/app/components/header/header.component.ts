import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const header = document.getElementById("header");
  if (header !== null) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.toggle_btn') as HTMLElement;
  const toggleBtnIcon = document.querySelector('.toggle_btn i') as HTMLElement;
  const dropDownMenu = document.querySelector('.dropdown_menu') as HTMLElement;

  toggleBtn.onclick = function () {
    dropDownMenu?.classList.toggle('open');
    const isOpen = dropDownMenu?.classList.contains('open');

    toggleBtnIcon.className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  };
});

