---
route: /hooks/blocks
menu: Hooks
---

## Blocks

### useBlocks

[Available options](https://developer.wordpress.org/rest-api/reference/blocks/#list-wp_blocks)

Default query (latest 10 blocks):

```jsx
const { data, loading, error } = useBlocks();
```

Blocks meeting the criteria:

```jsx
const { data, loading, error } = useBlocks({
  /* WordPress REST API options */
});
```

Single block (by id):

```jsx
const { data, loading, error } = useBlocks(/* page id */);
```

Multiple blocks (by id):

```jsx
const { data, loading, error } = useComments(/* array of block ids */);
```

### useCreateBlock

[Available options](https://developer.wordpress.org/rest-api/reference/blocks/#create-a-wp_block)

```jsx
const { data, loading, error } = useCreateBlock({
  /* WordPress REST API options */
});
```

### useRetrieveBlock

[Available options](https://developer.wordpress.org/rest-api/reference/blocks/#retrieve-a-wp_block)

```jsx
const { data, loading, error } = useRetrieveBlock({
  /* WordPress REST API options */
});
```

### useUpdateBlock

[Available options](https://developer.wordpress.org/rest-api/reference/blocks/#update-a-wp_block)

```jsx
const { data, loading, error } = useUpdateBlock({
  /* WordPress REST API options */
});
```

### useDeleteBlock

[Available options](https://developer.wordpress.org/rest-api/reference/blocks/#delete-a-wp_block)

```jsx
const { data, loading, error } = useDeleteBlock(
  /* block id */,
  { /* WordPress REST API options */ }
);
```
