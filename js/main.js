jQuery(document).ready(function($){

	var items = [
		{
			number: 1,
			className: '',
			date: new Date(2017, 1, 1, 0, 0, 0)
		},
		{
			number: 2,
			className: '',
			date: new Date(2017, 1, 1, 0, 5, 0)
		},
		{
			number: 3,
			className: '',
			date: new Date(2017, 1, 1, 0, 10, 0)
		},
		{
			number: 1,
			className: 'alt',
			date: new Date(2017, 1, 1, 0, 3, 0)
		},
		{
			number: 2,
			className: 'alt',
			date: new Date(2017, 1, 1, 0, 5, 0)
		},
		{
			number: 3,
			className: 'alt',
			date: new Date(2017, 1, 1, 0, 10, 10)
		}
	];

	items = items.sort(function(a, b) {
		return a.date - b.date;
	});

	var dataSource = new kendo.data.DataSource({
		data: items
	});

	var timelineEl = $("ul.timeline");
	timelineEl.kendoListView({
		dataSource: dataSource,
		template: kendo.template($("#li-template").html()),
		selectable: 'single'
	})
	var listView = timelineEl.data('kendoListView');


	var minimumTimeStep = 60000; // 60 seconds (in milliseconds)
	var minimumDistance = 0.5; // percentage of width of li
	var liEls = $('.timeline li');

	liEls.toArray().forEach(function(li, index) {
		if (index == 0) {
			lastOffset = 0;
			return;
		}
		var currLi = $(li);
		var prevLi = $(liEls[index - 1]);
		var prevDate = listView.dataItem(prevLi).date;
		var currDate = listView.dataItem(currLi).date;
		var diff = currDate - prevDate;
		var prevOffset = prevLi.position().left;
		var offsetDelta;
		if (diff != 0) {
			offsetDelta = Math.max(diff / minimumTimeStep, minimumDistance) * prevLi.outerWidth(true);
		} else {
			console.log("diff is 0")
			offsetDelta = 0;
		}
		var currOffset = prevOffset + offsetDelta;		
		currLi.css('left', currOffset + 'px');
	});

	$('.timeline').addClass('layout-done');
});