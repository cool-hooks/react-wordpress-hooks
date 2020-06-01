---
name: Block Revisions
route: /hooks/block-revisions
menu: Hooks
---

## Block Revisions

### useRetrieveBlockRevisions

[Available options](https://developer.wordpress.org/rest-api/reference/block-revisions/#retrieve-a-wp_block-revision)

```jsx
const { data, loading, error } = useRetrieveBlockRevisions(
  /* block id */,
  { /* WordPress REST API options */ }
);
```

### useCreateBlockRevisions

[Available options](https://developer.wordpress.org/rest-api/reference/block-revisions/#create-a-wp_block-revision)

```jsx
const { data, loading, error } = useCreateBlockRevisions(
  /* block id */,
  { /* WordPress REST API options */ }
);
```

### useRetrieveBlockRevision

[Available options](https://developer.wordpress.org/rest-api/reference/block-revisions/#retrieve-a-wp_block-revision-2)

```jsx
const { data, loading, error } = useRetrieveBlockRevision(
  /* parent id */,
  /* block id */,
  { /* WordPress REST API options */ }
);
```
