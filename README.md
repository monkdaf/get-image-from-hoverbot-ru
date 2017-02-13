# get-image-from-site
Get some images from some sites

## Setup

```
make install
```

## Main task (25.01.2017)
Need get some images from www.hoverbot.ru
Main goal is "http://www.hoverbot.ru/collection/all"

### page with products:
`<div class="product-title">` содержит `h3 -> href` с ссылкой

```
<div class="product-title">
    <h3>
      <a href="/product/cegvey-hoverbot-g-6">
        Cегвей Hoverbot G-6
      </a>
    </h3>
  </div>
```

### page with product
Ссылка `<href=... class="swiper-slide gallery-control">` - уникальна
в `href` - искомая ссылка на изображение

```
<a href="https://static-eu.insales.ru/images/products/1/4857/89363193/large_2.jpg" class="swiper-slide gallery-control  active ">
                 <img src="https://static-eu.insales.ru/images/products/1/4857/89363193/thumb_2.jpg" class="slide-image">
               </a>

```            
