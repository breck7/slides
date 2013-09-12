var Slides = {}

Slides.appendScript = function (src, callback) {
  var script = document.createElement( 'script' )
  script.type = 'text/javascript'
  script.src = src
  if (callback)
    script.onload = callback
  document.getElementsByTagName('head')[0].appendChild(script)
}

Slides.url = 'http://slides.nudgepad.com/'

Slides.template = '<div id="carousel-example-generic" class="carousel slide" style="display: none;">\
  <!-- Indicators -->\
  <ol class="carousel-indicators">\
  </ol>\
\
  <!-- Wrapper for slides -->\
  <div class="carousel-inner">\
  </div>\
\
  <!-- Controls -->\
  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">\
    <span class="icon-prev"></span>\
  </a>\
  <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">\
    <span class="icon-next"></span>\
  </a>\
</div>'

Slides.appendScript(Slides.url + 'bootstrap/js/jquery-1.10.2.min.js', function () {
  Slides.appendScript(Slides.url + 'bootstrap/js/bootstrap.min.js', function () {
    Slides.appendScript(Slides.url + 'space.js', function () {
      $('body').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
      $('body').append('<link href="' + Slides.url + 'bootstrap/css/bootstrap.css" rel="stylesheet">')
      $('body').append('<link href="' + Slides.url + 'style.css" rel="stylesheet">')
      $('body').append(Slides.template)
      var slides = new Space($('#slideshow').html())
      var i = 0
      if (slides.get('options title'))
        $('body').append('<title>' + slides.get('options title') + '</title>')
      slides.each(function (key, value) {
        if (key !== 'slide')
          return true
        $('.carousel-indicators').append('<li data-target="#carousel-example-generic" data-slide-to="' + i + '"></li>')
        var slide = $('<div class="item"></div>')
        var caption = $('<div class="carousel-caption"></div>')
        if (value.get('title'))
          caption.append('<h3>' + value.get('title') + '</h3>')
        if (value.get('subtitle'))
          caption.append('<p>' + value.get('subtitle') + '</p>')
        slide.append(caption)
        if (value.get('image'))
          slide.css('background-image', 'url(' + value.get('image') + ')')
        
        if (value.get('background'))
          slide.css('background-color', value.get('background'))

        if (value.get('color'))
          slide.css('color', value.get('color'))
        
        $('.carousel-inner').append(slide)
        
        i++
      })
      $($('.carousel-indicators')[0]).addClass('active')
      $($('.item')[0]).addClass('active')
      $('.carousel').show()
      var options = {}
      if (slides.get('options interval') === false)
        options.interval = false
      else if (slides.get('options interval'))
        options.interval = parseFloat(slides.get('options interval'))
      $('.carousel').carousel(options)
      console.log('hi')
    })
  })
})

