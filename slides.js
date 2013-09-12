var Slides = {}

Slides.Slide = function () {
    
  this.clear()

  if (space)
    this.patch(space)
}

Slides.Slide.prototype = new Space()

Slides.Show = function () {
    
  this.clear()

  if (space)
    this.patch(space)
}

Slides.Show.prototype = new Space()

Slides.Show.prototype.toHtml = function () {
    
}
