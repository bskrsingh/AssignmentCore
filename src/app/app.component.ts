import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment German';
  
  user = {
    name: 'Berry',
    language: 'en',
    cart: ['flower', 'bottle', 'towel']
}

  name = this.user.name
  cartlen = this.user.cart.length

  constructor(
    public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    } else {
      localStorage.setItem('locale', 'en');
      translate.setDefaultLang('en');
    }
  }
  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }
}
