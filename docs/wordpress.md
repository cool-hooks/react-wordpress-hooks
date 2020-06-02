---
name: WordPress
route: /hooks/wordpress
menu: Hooks
---

## Custom Endpoints

### useWordPress

This hook allows you to use custom endpoints or create manual requests to WordPress REST API

[Read more about custom enpoints](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/)

```jsx
const { data, loading, error } = useWordPress({
  // endpoint (e.g.: slides)
  // options (request option params)
  // requsetMethod: (e.g.: GET, POST)
});
```
