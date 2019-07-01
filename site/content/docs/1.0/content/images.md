---
layout: docs
title: Images
description: Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.
group: content
toc: true
---

## Responsive images

Images in Bootstrap are made responsive with `.img-fluid`. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.

<div class="bd-example">
  {{< placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" >}}
</div>

{{< highlight html >}}
<img src="..." class="img-fluid" alt="Responsive image">
{{< /highlight >}}

## Image thumbnails

In addition to our [border-radius utilities]({{< docsref "/utilities/borders" >}}), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-thumbnail">
{{< /highlight >}}

## Circle Image

Now you can use `.img-circle` to give an image a circular appearance.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-circle" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-circle">
{{< /highlight >}}

## Image Hover Effect

Now you can use `.img-hover` to give any type of image a hover effect.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-thumbnail img-hover" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
  {{< placeholder width="200" height="200" class="img-circle img-hover" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
  {{< placeholder width="200" height="200" class="img-hover" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-hover">
{{< /highlight >}}

## Image Shake Effect

Now you can use `.img-shake` to vibrate the image and `.img-hover-shake` to vibrate the image on hover.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-shake" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
  {{< placeholder width="200" height="200" class="img-hover-shake" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-shake">
{{< /highlight >}}

## Image Flip Effect

Now you can use `.img-flip` to make the image flip.

<div class="bd-example bd-example-images">
  <!-- {{< placeholder width="200" height="200" class="img-flip" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}} -->
  <img src="http://placekitten.com/200/200" class="img-flip img-circle">
  <a href="#" class="float-button bg-primary">R</a>
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-flip">
{{< /highlight >}}

## Image Opacity

Now you can use `.img-opacity` to give an image a opaque appearance.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-opacity" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-opaque">
{{< /highlight >}}

## GreyScale Image

Now you can use `.img-opacity` to give an image a opaque appearance.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-greyscale" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-opaque">
{{< /highlight >}}

## Image Rotation

Now you can use `.img-rotate` to rotate the image infinitely.

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="img-rotate img-circle" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" >}}
</div>

{{< highlight html >}}
<img src="..." alt="..." class="img-rotate img-rounded">
{{< /highlight >}}

## Aligning images

Align images with the [helper float classes]({{< docsref "/utilities/float" >}}) or [text alignment classes]({{< docsref "/utilities/text#text-alignment" >}}). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{< docsref "/utilities/spacing#horizontal-centering" >}}).

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="rounded float-left" >}}
  {{< placeholder width="200" height="200" class="rounded float-right" >}}
</div>

{{< highlight html >}}
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
{{< /highlight >}}

<div class="bd-example bd-example-images">
  {{< placeholder width="200" height="200" class="rounded mx-auto d-block" >}}
</div>

{{< highlight html >}}
<img src="..." class="rounded mx-auto d-block" alt="...">
{{< /highlight >}}

<div class="bd-example bd-example-images">
  <div class="text-center">
    {{< placeholder width="200" height="200" class="rounded" >}}
  </div>
</div>

{{< highlight html >}}
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
{{< /highlight >}}


## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

{{< highlight html >}}
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
{{< /highlight >}}
