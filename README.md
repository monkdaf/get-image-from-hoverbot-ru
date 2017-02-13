# get-image-from-site
Get some images from some sites

## Setup

```
make install
```

## Main task (25.01.2017)
Need get some images from gyrotown.ru
Main goal is "http://gyrotown.ru/collection/giroskuter/hoverbot"

### count of pages
 В `<div class="pagination-container">` в `<ul class="list-inline list-unstyled">`
 в предпоследнем `li` находится число страниц товара
```
<div class="pagination-container">
  <ul class="list-inline list-unstyled">
    <li class="prev"><a href=""><i class="fa fa-angle-left"></i></a></li>


    <li class="active"><a href="">1</a></li>



    <li><a href="/collection/giroskuter/hoverbot?page=2">2</a></li>



    <li><a href="/collection/giroskuter/hoverbot?page=3">3</a></li>



    <li class="active"><a href="">&hellip;</a></li>



    <li><a href="/collection/giroskuter/hoverbot?page=7">7</a></li>


    <li class="next"><a href="/collection/giroskuter/hoverbot?page=2"><i class="fa fa-angle-right"></i></a></li>
  </ul><!-- /.list-inline -->
</div><!-- /.pagination-container -->
```
### page width products:
`class="image-cover"` содержит href с ссылкой

```
<a class="image-cover" href="/product/giroskuter-hoverbot-a-12-chernyy" onclick="datalayerclk(780175, Гироскутер Hoverbot A-12 Черный, 24750.0, Hoverbot, Гироскутер, 10 кг, 15)">
```

### page with product
Ссылка `<a data-zoom-id="zoom" ... >` - уникальна
в `<a data-zoom-id="zoom" >` в `href` - искомая ссылка на изображение

```
<div class="item">
               <a
                    data-zoom-id="zoom"
                    href="https://static-eu.insales.ru/images/products/1/5234/103052402/giroskuter-hoverbot-b-9-kamuflyazh-1.jpg"
                    data-image="https://static-eu.insales.ru/images/products/1/5234/103052402/large_giroskuter-hoverbot-b-9-kamuflyazh-1.jpg"
                >
                    <img src="https://static-eu.insales.ru/images/products/1/5234/103052402/thumb_giroskuter-hoverbot-b-9-kamuflyazh-1.jpg"/>
                </a>               
            </div>
```            
