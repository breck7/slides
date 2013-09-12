$(document).on('ready', function () {

$('#space').on('keyup', function () {
  var space = new Space($(this).val())
  $('#json').val(JSON.stringify(space.toObject(), null, " "))
  $('#javascript').val(space.toJavascript())
})

$('#json').on('keyup', function () {
  var json = JSON.parse($(this).val())
  var space = new Space(json)
  $('#space').val(space.toString())
  $('#javascript').val(space.toJavascript())
})

$('#space').trigger('keyup')

})