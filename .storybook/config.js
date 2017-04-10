import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import ThemeLoader
  from '@ox2/theming/ThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';
import '@ox2/css-font-roboto-condensed';
import '@ox2/css-font-roboto';
import '@ox2/css-icons-moon';
import '@ox2/css-icons-material';
import '@ox2/css-icons-ui';
import '@ox2/ycss';
import '@ox2/button-css';
import '@ox2/storybook-css-layout';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'color-picker',
});

ThemeLoader({ theme });

configure(loadStories, module);
