# Talk to me!

This is simple project for testing speech synthesis in the browsers.

To see it in action, go to the [github page](http://autioch.github.io/talk-to-me/).

## Synthesis

See the `src\actions` file for the details. The two most important functions are `setVoiceList` and `synthesize`.

### Support

Speech worked for me in:
- Firefox 63 _( Windows 10 )_
- Edge _( Windows 10 )_
- Chrome 70 _( Windows 10 )_
- Chrome _( Andriod 8 )_
- Chrome _iPad mini_ _( iOS 11.2.1 )_
- Safari _iPad mini_ _( iOS 11.2.1 )_

Speech failed for me in:
- Internet Explorer _(any version)_

## Recognition

See the `src\actions` file for the details. The most important functions are `recognizeStart` and `recognizeStop`.

### Support

Recognition worked for me in:
- Chrome 70 _( Windows 10 )_


Recognition failed for me in:
- Firefox 63 _( Windows 10 )_
- Edge _( Windows 10 )_
- Internet Explorer _(any version)_

The matching mechanic doesn't seem to work - it always returns some recognition, even if it doesn't match.

## How it works

It's very simple demo of [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) and [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) .

There's an article at MDN [Using_the_Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).
