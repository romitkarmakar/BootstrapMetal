---
layout: docs
title: Responsive Image Grid
description: Use our responsive image grid to onboard your portfolio gallery or your photograph collections in no time. Use our intelligent javascript system to automatically resize and reorder your gallery.
group: layout
toc: true
---

## How it works

Use `.img-grid-container` to embed all the images in a single container and give them a responsive image grid style. On large screen it uses 4 column, on medium sized devices it uses 2 columns and on small devices 1 column.

<div class="img-grid-container">
  <img src="http://placekitten.com/200/300" alt="">
  <img src="http://placekitten.com/500/300" alt="">
  <img src="http://placekitten.com/200/300" alt="">
  <img src="http://placekitten.com/100/300" alt="">
  <img src="http://placekitten.com/200/300" alt="">
  <img src="http://placekitten.com/200/400" alt="">
  <img src="http://placekitten.com/200/380" alt="">
  <img src="http://placekitten.com/200/377" alt="">
</div>

{{< highlight html >}}
<div class="img-grid-container">
  <!-- Images Here -->
  <img src="..." alt="..">
  <img src="..." alt="..">
  <img src="..." alt="..">
</div>
{{< /highlight >}}