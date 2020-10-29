import * as $ from 'jquery';

function createAnalytics(): object {
    let counter: number = 0;
    let isDestroyed: boolean = false;

    const listener = (): number => counter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            $(document).off('click', listener);
            isDestroyed = true;
        },

        getClicks(): number | string {
            if (isDestroyed) {
                return 'Analytics was destroyed!!!';
            }
            return counter;
        }
    };
}

window['analyticsTs'] = createAnalytics();
