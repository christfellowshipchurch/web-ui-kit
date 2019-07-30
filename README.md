![alt christ-fellowship-flat-ui](./docs/static/Flat-UI-Logo.png)
# @christfellowshipchurch/flat-ui-web

## About
This React DOM package is the Flat UI kit developed by [Christ Fellowship Church](https://gochristfellowship.com). This UI Kit uses hard edges, solid colors, and no shadows to give a flat look to the overall design. Check out a directory for descriptions of each UI element and use cases for each of the elements.

## Usage
The package ships as a component library and is fully modularized in its CSS, so feel free to use any component within whatever context you are developing in.

The following components are included:
* **Accordion** - a wrapper for an accordion styled collapsible component
* **Content** - for easily formatting Html content with the option for adding media
* **Loader** - styled components representing a loading state
* **Media** - ratio driven wrapper for media objects (images and video)

## Testing
Flat UI Web using jest snapshots for testing.

Running `yarn test` runs a test and outputs the result. When run at the _root_, it will run tests for the entire project. Running at a specific directory will run tests for that directory.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Commits without tests are not likely to be taken into consideration.

Running `yarn test -u` will update snapshots. **Only do this if you are positive that snapshots need to be updated**.

## Authors and acknowledgment
[Caleb Panza](https://github.com/calebpanza), Cristian Garcia

## License
[MIT](https://choosealicense.com/licenses/mit/)