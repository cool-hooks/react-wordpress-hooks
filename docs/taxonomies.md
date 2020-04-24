---
route: /hooks/taxonomies
menu: Hooks
---

## Taxonomies

### useRetrieveTaxonomies

[Available options](https://developer.wordpress.org/rest-api/reference/taxonomies/#retrieve-a-taxonomy)

```jsx
const { data, loading, error } = useRetrieveTaxonomies({
  /* WordPress REST API options */
});
```

### useRetrieveTaxonomy

[Available options](https://developer.wordpress.org/rest-api/reference/taxonomies/#retrieve-a-taxonomy-2)

```jsx
const { data, loading, error } = useRetrieveTaxonomy(
  /* taxonomy */,
  { /* WordPress REST API options */ }
);
```
