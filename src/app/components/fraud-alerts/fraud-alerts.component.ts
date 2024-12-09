import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../info-card/info-card.component';

@Component({
  selector: 'app-fraud-alerts',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
    CardComponent,
    CommonModule,
    InfoCardComponent,
  ],
  templateUrl: './fraud-alerts.component.html',
  styleUrl: './fraud-alerts.component.css',
})
export class FraudAlertsComponent implements OnInit {
  isLoading: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  alertsCards1 = [
    {
      title: 'Cuidado con las estafas de inversiones de TikTok',
      image:
        'https://s3-alpha-sig.figma.com/img/362a/3352/8fefabc883d486da2616ec76fc3282f9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwoU4xXcXswSDHkNCKb6sy8HO-xtYpGBxcMCQfcwD~dKPProqcKTESSJ1gvHslZbHFncJQpgEIwkrtRU~XhWS-ivrd6a14-KMzGbiEwWDPUyMMcdv-2oFnpdk7AQ7lk8Mj5JKtYjqYL1DyV5rreklVwJiSHDppobIIKSRaq8mbEG0IJ0~GWrUSXUBxnDIszQspMHgMYud7vqRErTj1MOZ-5peSirQP4yhwW5ZJZ2plmAg9VCa4xtQComlkfzewx0mR2FxxS3q78sZFmQKTEZ5hgxZZ6nViApFernbv5JEHCaUCv~~4R3p8rCabIU7fLP7jBiaXEwSvRC4M6QXlWFXw__',
    },
  ];
  alertsCards2 = [
    {
      title: 'Cuidado con la estada de facturas de PayPal',
      image:
        'https://s3-alpha-sig.figma.com/img/b216/2773/9e36a7d58c98d7e016106fdecce8c15c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yqvcc2RDzaNt5rYzv0JUtslKhy65SPCVqplaz83HPGal465FhrWRwhgtk8B0bjRNQVp1PhTW6VhioLTPD8KEVpv1WDKvpQMwMXyca9PNslofOJ9wFAxHSzWC0LmOgCYrm5yOV9FS2zrokp~rizFSWY3wKpegNmmsuJAlwiwSEb8xsOv4f0-UeSTcqv7buN9HZxvcj9YgnJyhkGTuycO~It9h2d4TeSLdSHfCimGX~zmnMDJSbMKcYk4I8ioFEss6rerM8RMYCbYmXZY2l4re~AgRPI~Y3-vlLlrrfIqAtyGnPCkpgqZT4fHiPf3Wg0Ygqfgto7MN6E5QJDsGvjcoMA__',
    },
    {
      title:
        'Atrapados en la red: Cómo las estafas de empleo en línea aumentaron un 20...',
      image:
        'https://s3-alpha-sig.figma.com/img/4181/c57a/feabb463ccafd5823d61a9a237e47dea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WmGXWbPM46bL1zz9eX9NESpDqQImJhOZgMfnBfjldUVfhfSm9b9eyyP2dlGzuZQ-IDl7KpFYqWrkZ6nCd5Zn51jqKwu2zQ4Wt2knYFmm5EAzdOGYnIxS3Eq9qmqnK3srJGj372HoXDELJUtiqjImmDK73QzXtN8IVnMIuqA0agb0abxKIWZy280g5hKuE9CzJ4XY7M-7zgtGUIPclvUbUG4xr7ULX1dh6vrug9mgfyoqYrpBlOXkWv0F6y33j23shFw0-JE0Xpy9kWk5IumCduBG1zmPgTLr9D9XdUv9yCl01rImhvk~6rkvWDSnVPr8YuYTGemrUn3szTtdBCYnpg__',
    },
  ];
  alertsCards3 = [
    {
      title: '¿Es Tupperware-us.com una estafa o es legítimo?',
      image:
        'https://s3-alpha-sig.figma.com/img/1443/c3ab/366246d68117567b9ede1fb11be764de?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOy~bJ-vuESN1i2BGMLSedDJlxKxzFwlMiOU9-KF2ZFHe6a9y3MZugkeIIMN38wkLCO6JHEMjOmVY6kCuz7Zhs6xY2wqRI~MUZEbF5VLwXwjBCB18v9QiUFXv8eJuFpdhAbdzuDXeKL8aXvbWHXDQp3ssFb3TbpxCKePBc0V1AIzteTt9ee5fSBGth-14Y50KdtO8BqoFe-FXMoSJ~DIzrgqTwe2mKCIKGWaTOo-WltsXZLwbkqQVjqbvGfgRD6ickW17lfOkqBrl80dpy9w0PK4l16yDYVsedTJEgdmn9SRhGZJ1RCXKF7swIKlXbfoEHCefuepiFRjTffCGWCPEQ__',
    },
    {
      title: '¿Es Pantoably.com confiable?',
      image:
        'https://s3-alpha-sig.figma.com/img/b6d0/2d5f/d96b72f1858560585e52a666c4d85d8e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USPl0VdzLKldsI7JbTgraccOgKVeyuHjg4Jv8DIq~3za97P2bTSdznIjJ1DcyW-EHZXqlYMaYE0RrOmzD3msb0tLGKTCgfMG57-0qudak8Tkrf~Gc6eaEwRJalizFrPFk3r9LSCitHeyFZqbztfaaSNXBWs1OD3WrwV1SYI2P2raP2rA3M2pEk1iwaNw7zJWMtb-3GYs4ySpfL1~ml0TeOwGLQcB2OQdxd9BHrBmGCB9-eAYXn48E~7qPNeYbMXIDjq79unGa6jma13pkVqTHc5Uht1pwmv2oPI5ud5KYlHuppIcD4VpSmC7s274v7~ta6Z2zSQpTOXrZuQnpC9gkQ__',
    },
    {
      title: 'Todo un pueblo cayo en una estafa de Criptomonedas en Argentina.',
      image:
        'https://s3-alpha-sig.figma.com/img/b1e8/f488/b0312910bd57444390cc89b95d1203b7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4rRC2xlAucCwqbHZ1lZZJhQQT9OiyoNUU9gs~ZtnckcerwNWv1cn0yZg-7bCtg6iWlQ5yZSgz28NDrasHKoACZMIs7AdH2HAohkgRYa8OFnH7pTudKjhZEVq7~US95HGIShcYEIETPSH7Sc4WfOwz6ana2bcd~VyY6Wg1x5ei~5CTm~ufvaKJ7l6nOf821YY-Yfk37ZiQjQJIJPJ4itL1lhjXzRd3fQuhizVOFBYBrEHkMHOO5S~03pRDPsEs8D5uVgfJ8wla-fWe2UdW~nwa-o0fEB5VoWQj9BL82dusd3bOsue2BkfWxaWo8Mt0hBBpQp1~IL5wdby-i7WhHd5Q__',
    },
  ];
}
