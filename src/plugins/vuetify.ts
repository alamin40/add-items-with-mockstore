// src/plugins/vuetify.ts
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure global styles are imported
import '@mdi/font/css/materialdesignicons.css'; // Ensure Material Design Icons are included

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
});
