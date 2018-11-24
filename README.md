# Talk to me!

This is simple project for testing speech synthesis in the browsers.

To see it in action, go to the [github page](http://autioch.github.io/talk-to-me/).


## How it works

It's very simple demo of https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis .

There's an article at mdn: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API


## The implementation.
See the `src\actions` file for the details. Two most important functions are `setVoiceList` and `synthesize`.
The store used is `pipe-and-gauge`.


## TODO
1. Add linter. Basic `create-react-app` has very poor linting capabilities.
2. Add speech recognition tests.
