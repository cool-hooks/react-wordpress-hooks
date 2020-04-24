---
route: /hooks/types
menu: Hooks
---

## Types

### useRetrieveTypes

[Available options](https://developer.wordpress.org/rest-api/reference/post-types/#retrieve-a-type)

```jsx
const { data, loading, error } = useRetrieveTypes({
  /* WordPress REST API options */
});
```

### useRetrieveType

[Available options](https://developer.wordpress.org/rest-api/reference/post-types/#retrieve-a-type-2)

```jsx
const { data, loading, error } = useRetrieveType(
  /* type */,
  { /* WordPress REST API options */ }
);
```
