JT Timeline
=========

A horizontal timeline which:
* Displays items sorted by date/time
* Allows two categories to be shown above and below the timeline
* Calculates the gap between two items (linearly, will make it logarithmic later), with a minimum distance to ensure items are still clickable despite being super close. Conversely, this means that the timeline is not to scale.

The text size/width of the items are calculated using em's, so it is easy to set the text-size of the parent element to any size, and the child elements of the timeline will resize accordingly.

**TODO:** make the timeline:
* scrollable
* pannable
* zoomable
* filterable (turn on/off categories)
* search by date range

Thanks to Kelvin for inspiration.