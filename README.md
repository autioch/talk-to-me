# Talk to me!

This is simple project for testing speech synthesis in the browsers.

To see it in action, go to the [github page](http://autioch.github.io/talk-to-me/).

## Support

Speech worked for me pretty well in:
- Firefox 63 _( Windows 10 )_
- Edge _( Windows 10 )_
- Chrome 70 _( Windows 10 )_
- Chrome _( Andriod 8 )_
- Chrome _iPad mini_ _( iOS 11.2.1 )_
- Safari _iPad mini_ _( iOS 11.2.1 )_


## How it works

It's very simple demo of https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis .

There's an article at mdn: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API


## The implementation.
See the `src\actions` file for the details. Two most important functions are `setVoiceList` and `synthesize`.
The store used is `pipe-and-gauge`.


## TODO
1. Add speech recognition tests.
