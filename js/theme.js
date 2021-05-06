let isNight = false;

function judgePreferDark() {
    const prefersDark = window.matchMedia && window
        .matchMedia(
            '(prefers-color-scheme: Dark)'
        )
        .matches;
    
    isNight = prefersDark;
}

function initPreferMode() {
    if (isNight) {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'black';
        document
            .querySelector('body')
            .style
            .color = 'white';

        // To find the way to select elements including dynamic pseudo class.
        var link_anchors = document.querySelectorAll('a:visited');
        link_anchors.forEach(element => {
            element.color = 'green';
            // var anchor_style = window.getComputedStyle(element, ':visited');
            // if (anchor_style){
            //     anchor_style.color = 'green';
            // }
            // else{
            //     anchor_style = element.currentStyle;
            //     anchor_style.color = 'yellow';
            // }
        });
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
        var link_anchors = document.querySelectorAll('a:visited');
        link_anchors.forEach(element => {
            element.color = 'gray';
            //var anchor_style = window.getComputedStyle(element, ':visited');
            //if (anchor_style){
            //    anchor_style.color = 'gray';
            //}
            //else{
            //    anchor_style = element.currentStyle;
            //    anchor_style.color = 'black';
            //}
        });
        // link_anchors.forEach(element => element.style.color = 'black');
        // visited_anchors.forEach(element => element.style.color = 'gray');
        document
            .getElementById('mode-toggle-slider')
            .style
            .translate = '26px';
    }

    document
            .getElementById('mode-toggle')
            .style
            .checked = nightParam;    
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
        var link_anchors = document.querySelectorAll('a');
        link_anchors.forEach(element => {element.style.color = 'black'});
        isNight = false;
    } else {
        document
            .querySelector('body')
            .style
            .backgroundColor = 'black';
        document
            .querySelector('body')
            .style
            .color = 'white';
        var link_anchors = document.querySelectorAll('a:link');
        link_anchors.forEach(element => element.style.color = 'yellow');
        isNight = true;
    }
}