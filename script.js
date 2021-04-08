var currentDay = $('#currentDay')
currentDay.text(moment().format('dddd, MMMM Do'))

var timeBlockContainer = $('.container')

for (let i = 0; i < 9; i++) {
  var timeBlockDiv = $(`<div class="time-block row">
    <div class="hour col-2">Time</div>
    <textarea class="description col-8">text area</textarea>
    <div class="saveBtn col-2"><i style='font-size:24px' class='fas'>&#xf0c7;</i></div>
    </div>`)
  timeBlockContainer.append(timeBlockDiv)
}
