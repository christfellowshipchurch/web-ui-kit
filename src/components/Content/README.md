# Content

![alt christ-fellowship-flat-ui](/docs/static/Content.png)

## About
The component has the ability to display a piece of media with a title, content, and calls to action.

## Layouts
There are four different layout configurations available: Default, Inverted, Left, and Right.
* **default** - media on top of content
* **inverted** - media below content
* **left** - content sits to the left of media
* **right** - content sits to the right of media

## Usage
The component is made up of the following components: Wrapper, Title, and Body.
* **ContentContainer:** this is the parent container that handles the configuration of the media and content. You are able to pass it any Html or React Component(s) that you want to appear in the body. It accepts the following properties: layout, imageUrl, imageAlt, videoUrl, and ratio.
* **ContentTitle:** optional styled title for the piece of content
* **ContentBody:** optional styled body wrapper for the piece of content that accepts html and React Component(s)


```jsx
<Content
    layout="default"
    imageUrl="htts://img.url"
    imageAlt="Alt text for my image"
    videoUrl="https://vid.url"
    ratio="1by1"
>
    <Content.Title>
        This is the title on my content
    </Content.Title>

    <Content.Body>
        <h4>Here I can pass in any html that I want</h4>

        I can also just pass in plain text

        <ReactComponent>This is my super cool React Component that I'm passing in too!</ReactComponent>
    </Content.Body>

    <i>*I can also just pass in extra Html to the main component</i>
</Content>
```


## Testing
Flat UI Web using jest snapshots for testing.

Running `yarn test` runs a test and outputs the result. When run at the _root_, it will run tests for the entire project. Running at a specific directory will run tests for that directory.

Running `yarn test -u` will update snapshots. **Only do this if you are positive that snapshots need to be updated**.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Commits without tests are not likely to be taken into consideration.

## Authors and acknowledgment
[Caleb Panza](https://github.com/calebpanza)

## License
[MIT](https://choosealicense.com/licenses/mit/)