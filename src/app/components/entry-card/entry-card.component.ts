import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
})
export class EntryCardComponent implements OnInit {
  @Input() title = 'Title';
  @Input() subtitle = 'Subtitle';
  @Input() description = 'Description';
  @Input() image = '';
  @Input() link_website = '';
  @Input() link_twitter = '';
  @Input() link_facebook = '';
  @Input() link_discord = '';
  @Input() link_youtube = '';

  constructor() {}

  ngOnInit(): void {}
}
