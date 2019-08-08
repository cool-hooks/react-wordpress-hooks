# react-wordpress-hooks Changelog

## 1.0.0 beta 1 (2019-08-09)
#### Repository Changes
- added ES module
- switched from `webpack` to `rollup`

## 1.0.0 alpha 1 (2019-07-21)
#### New Feature
- options parameter can be an array of IDs

#### Breaking Changes
- rebuilt delete methods (first parameter is ID, second optional - settings)
- replaced `auth` with `headers` option in WPContext

#### Repository Changes
- added type definitions to output files

## 0.1.2 (2019-06-22)
#### Bug Fix
- added missing request method for useUpdatePost
- fixed memory leak on complex query
- added missing types

#### Repository Changes
- added `husky`

## 0.1.1 (2019-06-11)
#### Improvement
- improved response error output

## 0.1.0 (2019-06-11)
#### New Feature
**context**
- `WPContext` with url & auth values

**hooks, hooks, hooks ...moreHooks**
- hooks for Posts: `usePosts`, `useCreatePost`, `useRetrivePost`, `useUpdatePost`, `useDeletePost`
- hooks for Revisions: `useRevisions`, `useRetriveRevision`, `useDeleteRevision`
- hooks for Categories: `useCategories`, `useCreateCategory`, `useRetriveCategory`, `useUpdateCategory`, `useDeleteCategory`
- hooks for Tags: `useTags`, `useCreateTag`, `useRetriveTag`, `useRetriveTag`, `useDeleteTag`
- hooks for Pages: `usePages`, `useCreatePage`, `useRetrivePage`, `useUpdatePage`, `useDeletePage`
- hooks for Comments: `useComments`, `useCreateComment`, `useRetriveComment`, `useUpdateComment`, `useDeleteComment`
- hooks for Taxonomies: `useTaxonomies`, `useRetriveTaxonomy`
- hooks for Media: `useMedia`, `useCreateMedia`, `useRetriveMedia`, `useUpdateMedia`, `useDeleteMedia`
- hooks for Users: `useUsers`, `useCreateUser`, `useRetriveUser`, `useUpdateUser`, `useDeleteUser`
- hooks for Types: `useTypes`, `useRetriveType`
- hooks for Statuses: `useStatuses`, `useRetriveStatus`
- hooks for Settings: `useSettings`, `useUpdateSetting`
