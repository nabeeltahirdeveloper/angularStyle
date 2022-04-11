import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-cta',
  templateUrl: './sidebar-cta.component.html',
  styleUrls: ['./sidebar-cta.component.css'],
})
export class SidebarCtaComponent implements OnInit {
  @Input() ctaText!: string;
  constructor() {}

  ngOnInit(): void {}
}
