---
route: /hooks/statuses
menu: Hooks
---

## Statuses

### useRetrieveStatuses

[Available options](https://developer.wordpress.org/rest-api/reference/post-statuses/#retrieve-a-status)

```jsx
const { data, loading, error } = useRetrieveStatuses({
  /* WordPress REST API options */
});
```

### useRetrieveStatus

[Available options](https://developer.wordpress.org/rest-api/reference/post-statuses/#retrieve-a-status-2)

```jsx
const { data, loading, error } = useRetrieveStatus(
  /* status */,
  { /* WordPress REST API options */ }
);
```
