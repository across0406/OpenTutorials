function judgePreferDark() {
    const prefersDark = window.matchMedia && window
        .matchMedia(
            '(prefers-color-scheme: Dark)'
        )
        .matches;

    if (prefersDark) {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'black';
        document
            .querySelector('body')
            .style
            .color = 'white';
        document
            .querySelector(
                "#main-appearance.appear-mode-switch input[type=checkbox]"
            )
            .checked = true;
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
            .querySelector(
                "#main-appearance.appear-mode-switch input[type=checkbox]"
            )
            .checked = false;
    }
}

$(document).ready(judgePreferDark());

function changePreferMode(element) {
    var checked = document
        .querySelector(
            "#main-appearance.appear-mode-switch input[type=checkbox]"
        )
        .checked;

    if (checked) {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'white';
        document
            .querySelector('body')
            .style
            .color = 'black';
        document
            .querySelector(
                "#main-appearance.appear-mode-switch input[type=checkbox]"
            )
            .checked = false;
    } else {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'black';
        document
            .querySelector('body')
            .style
            .color = 'white';
        document
            .querySelector(
                "#main-appearance.appear-mode-switch input[type=checkbox]"
            )
            .checked = true;
    }
}