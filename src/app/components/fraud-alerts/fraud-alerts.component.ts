import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fraud-alerts',
  standalone: true,
  imports: [MaterialModule, RouterModule, CardComponent, CommonModule],
  templateUrl: './fraud-alerts.component.html',
  styleUrl: './fraud-alerts.component.css',
})
export class FraudAlertsComponent {
  alertsCards1 = [
    {
      title: 'Cuidado con las estafas de inversiones de TikTok',
      image:
        'https://s3-alpha-sig.figma.com/img/362a/3352/8fefabc883d486da2616ec76fc3282f9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CW8mALDLNWb4TPPhyJN2ZvP7f8B3wSveMjy40hS-4PgLu-FkUwrGhlPj52vZVGdvn5o863623hz8TmwVNPLbwPBPX0XDjmQrmRPQj8PjgM71tTtjLkXeg5WOhxjK6va0BUutWpyPkqKgaMEIH4AmOcqS7AzzEWOqPieHi-zTnoztbd0v3YcrDxKJYThbAyC9gfNATgHQB3Np60GKYR6wiKCR68Z8p1eLGHn6yys13ulEHL77o~YXfZtcyayVF3OIVclNJqoBC1cFgkVYK3kC8QRYcj0TBznVeKqfoiyrXXWHOUbUp0W1fjShRzhqGAiqMDTgBJWcgaWGvdleKpSiSg__',
    },
  ];
  alertsCards2 = [
    {
      title: 'Cuidado con la estada de facturas de PayPal',
      image:
        'https://s3-alpha-sig.figma.com/img/b216/2773/9e36a7d58c98d7e016106fdecce8c15c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i8F9Dc4nZaX766MxYCWcFah8lwVxPfZegUAyYmGcnbRDRChUWnhMxXdfqZYfikjw~ecrsSceiKLdwqcdKsZQaEaJfndv5wuvR34awR0QHbypjjWi72tjn47C5PyJQ0Lu-LpEhOhWB7IsEMTE-~bHC8~jf9OeTfewu5fX~MFPnaSmk8EY89wNNEN8K2VHr7vggTgnNlZfiMrgioxbalja7aEI-fb8nw2fLQo4GzOQthogCKKyaP-CCXo1LYk6b-wY2YYpVrpUwZJmxfb7MUl1Z3-veSqafLwEV6lMl5hHyZ4Zd69mVlmWH3jmecXA9W00xt9fthgplQ-JYhSI39JFEQ__',
    },
    {
      title:
        'Atrapados en la red: Cómo las estafas de empleo en línea aumentaron un 20...',
      image:
        'https://s3-alpha-sig.figma.com/img/4181/c57a/feabb463ccafd5823d61a9a237e47dea?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DdCGPV4hCK8eLVD2o5nPHBB7u9bIja-f7lIK3otCNsyfgsNKhXXMkQl3Vsgg8vcmfDykI~oQmD5laQceAALkSfKiRc1nzi4k9FjZZX~dQhZoCQ20iEICeuQyDJQkouVgpLcTQ3LP0OFXGaTtNEvHfGjR9RGxmSNbvSxuGaMkTgfaL95SJbe6moLfdNjiT6t6J9JAliRLZdMaNjpCehkyJanOLLgJbmRRm1x0trI9140AF7umdUo644DZBolpQb~EdvWHlnORDg-KNAO2OIHK6ZOXJAug~LSXBwisJ5fctwexfZhed2LPrJ8ShXo9srTD6UDnPQUZPrvn56M5dishVw__',
    },
  ];
  alertsCards3 = [
    {
      title: '¿Es Tupperware-us.com una estafa o es legítimo?',
      image:
        'https://s3-alpha-sig.figma.com/img/1443/c3ab/366246d68117567b9ede1fb11be764de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5n4KcaGItnXdkj4FvxLjRNiC~bKs6ksl7vCqxUluDgdSmvqGPr81PA390sCOZvR9tBqgMyGo~44IoZUsq0EVHZcCUzBLOkWy0vVwvNNpjgUnvLyU9eqX8bwPo3LVfe4lxqIsD65GoJT0wmsKA8Ue0BNvYzvSxrnFpBQOyifUpOJYD8fvg-vySX5BHnF6BhgEzrirnplpMWAVd1zyqk5gSB3yDySOhJ63~e~8RnzZIXZNmjAQvjPY0iJ7tQvqyvTsUl6DweJnKhZjdNVOcqiLr3A~5rbBVBbXwAy4yD4xG8b11SpAa9tPqlO--JAAQx8eVvociCBXFxHd8NEQK10lw__',
    },
    {
      title: '¿Es Pantoably.com confiable?',
      image:
        'https://s3-alpha-sig.figma.com/img/b6d0/2d5f/d96b72f1858560585e52a666c4d85d8e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwe5kbqLoRf~UQdXkRFma7sB6WMtN~U7Lso~7Wuk9YW~Y-yVKR7sMU68PTTyrUE5s1C1BA-4W0Bxquq~a~fYywTx3ZOjRUJkD-wuwTx66v6Gx5GE~MPKKHnUrfvaPzNgMnC7SddjUsiANsU0wB-BDAkqzOvpdIXSWCZkckRCz04B-Qh-cqHDCZwxqj7CYo~6MuV8cc-FLTjeyiGOaMHqXc1FK65WFLKfPPP4t0HhCfvSw2pg6~ZwZqHOgtXyBw~cyQaYZNpwDAMpbSSaX0YA8w0W5N65aPPK5VDhIbq4~PNCOKW76LZzUBKKQ-0usjsasDVLkMUkHKsY2K1FUqt9sA__',
    },
    {
      title: 'Todo un pueblo cayo en una estafa de Criptomonedas en Argentina.',
      image:
        'https://s3-alpha-sig.figma.com/img/b1e8/f488/b0312910bd57444390cc89b95d1203b7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlVwOuIqy~~dX51aAqj7U9saFNmVVGbxXQfYVS6inli2qLer0CV-UzgWwXNrHv40Q~KYawa3cFVLDRvwBlW96a~YuT2m5VUNav4LsXE2x1RcUHsK9ZV8FKc4aVevTKQDK4xOyakh8MTzlJtFMWoszZA3nGZY0VVxpHcE~X7kLXqel7JdXO0qfxKojlZ4gRE-ZONxhJKat0sHMjBOAtKNdtsp-RPzJj~ELinzgn4bkl4miu50VkjtSE6sYxsi1uj6o6uLeB~ha3Heh7ygpVK5HtFo8Z5h3d9aUClpCGm94itEU-YtTMj69h6siY~KunySECVgvsQ0RBentogUVQSLKQ__',
    },
  ];
}
