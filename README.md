# count-imports
what modules are imported the most in your webpack build? 

`webpack --json > compilation-stats.json && node count.js` 


example output:

```
[ '327: ./app/locale.jsx',
  '138: ./app/proptypes.jsx',
  '97: ./app/components/panels/index.jsx',
  '97: ./app/mixins/apiMixin.jsx',
  '78: ./app/components/loadingIndicator.jsx',
  '73: ./app/utils.jsx',
  '70: ./app/components/buttons/button.jsx',
  '57: ./app/views/settings/components/settingsPageHeader.jsx',
  '57: ./app/components/loadingError.jsx',
  '55: ./app/views/asyncView.jsx',
  '44: ./app/components/inlineSvg.jsx',
  '42: ./app/components/tooltip.jsx',
  '38: ./app/views/settings/components/text/textBlock.jsx',
  '38: ./app/actionCreators/indicator.jsx',
  '38: ./app/stores/indicatorStore.jsx',
  '37: ./app/stores/configStore.jsx',
  '34: ./app/mixins/organizationState.jsx',
  '32: ./app/styles/space.jsx',
  '31: ./app/components/avatar/index.jsx',
  '27: ./app/views/settings/components/emptyMessage.jsx',
  '24: ./app/api.jsx',
  '24: ./app/utils/recreateRoute.jsx',
  '24: ./app/views/settings/components/forms/form.jsx',
  '23: ./app/components/dropdownLink.jsx',
  '21: ./app/components/externalLink.jsx',
  '21: ./app/components/link.jsx',
  ...
  ```
