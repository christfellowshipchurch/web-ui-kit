# Accordion

![alt christ-fellowship-flat-ui](/docs/static/Accordion.png)
## About
The accordion is set up with items in 2 columns, each item described with a Title and Content. The Content accepts Html, so you can insert whatever you would like inside of it. Each item has an icon on the right-hand side which is a **"+"** when the item is closed and a **"-"** when the item is opened. There are 4 different configurations for an accordion:

* **Single:** Only 1 item can be opened at a time. Clicking on an open item will close it, and clicking on a closed item will close the opened item, then open itself.

* **Single-Persistent:** Only 1 item can be opened at a time. When an item is open, it will stay open and only close when a closed item it clicked.

* **Multiple:** You are able to open and close as many items in the accordion as you would like.

* **Persistent:** You are able to open as many items in the accordion as you would like. Once an item is opened, it cannot be closed.

## Usage
The Accordion will automatically wrap each child passed in the `AccordionItem` as it renders, so all you need to do is drop in the Html you want to be rendered in each item. Just add the `title` attribute to each container.
```jsx
<Accordion>
    <div title="Item 1">
        <h2>This is one item that I want displayed</h2>
    </div>

    <h2 title="Item 2">Since the Accordion parses each child, there is no need to adhere to a specific structure for the children</h2>

    <ReactComponent title="Item 3">You can even pass in a React Component</ReactComponent>
</Accordion>
```


## Testing
Flat UI Web using jest snapshots for testing.

Running `yarn test` runs a test and outputs the result. When run at the _root_, it will run tests for the entire project. Running at a specific directory will run tests for that directory.

Running `yarn test -u` will update snapshots. **Only do this if you are positive that snapshots need to be updated**.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Commits without tests are not likely to be taken into consideration.

## Authors and acknowledgment
[Caleb Panza](https://github.com/calebpanza), Cristian Garcia

## License
[MIT](https://choosealicense.com/licenses/mit/)