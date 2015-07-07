import { bootstrap_sdk } from './mixpanel-core';

let mpglobal = {
    mixpanel: window['mixpanel'] || []
};

bootstrap_sdk({
    global_context: mpglobal,
    mixpanel: mpglobal.mixpanel,
    init_type: 'module'
});

export default mpglobal.mixpanel;
