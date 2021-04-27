function judgePreferDark() {
    const prefersDark = window.matchMedia && window
        .matchMedia(
            '(prefers-color-scheme: Dark)'
        )
        .matches;

    return prefersDark;
}

function initPreferMode(isNight) {
    if (isNight) {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'black';
        document
            .querySelector('body')
            .style
            .color = 'white';
        document
            .getElementById('mode-toggle-slider')
            .style
            .translate = '26px';
    } else {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'white';
        document
            .querySelector('body')
            .style
            .color = 'black';
        document
            .getElementById('mode-toggle-slider')
            .style
            .translate = '26px';
    }

    document
            .getElementById('mode-toggle')
            .style
            .checked = isNight;    
}

function changePreferMode(element) {
    if (!element.checked) {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'white';
        document
            .querySelector('body')
            .style
            .color = 'black';

    } else {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'black';
        document
            .querySelector('body')
            .style
            .color = 'white';
    }
}