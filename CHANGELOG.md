# react-wordpress-hooks Changelog

## 3.0.0 beta 4 / 3.0.0 beta 5 (2020-02-05)
#### Breaking Changes
- replaced `WPContext` with `WordPressProvider`

## 3.0.0 beta 2 / 3.0.0 beta 3 (2020-01-06)
#### Repository Changes
- replaced `Webpack` with `Rollup`
- added module output

## 3.0.0 beta 1 (2020-01-02)
#### New Feature
- hooks for Page Revisions: `usePageRevisions`, `useRetrievePageRevision`, `useDeletePageRevision`
- new hook for Block Revisions: `useRetrieveBlockRevision`

#### Breaking Changes
- updated `useCreateBlockRevisions` & `useRetrieveBlockRevisions` hooks
- updated `useRetrieveUser`, `useUpdateUser` & `useDeleteUser` hooks
- renamed `useStatuses` to `useRetrieveStatuses`
- renamed `useTaxonomies` to `useRetrieveTaxonomies`
- renamed `useTypes` to `useRetrieveTypes`

#### Repository Changes
- added auto build documentation
- updated `docz` to v2

## 2.0.1 (2019-10-13)
#### Internal
- cleaned up

## 2.0.0 beta 3 / 2.0.0 (2019-09-28)
#### Bug Fix
- fixed problem with incorrect values for `post`, `update` and `delete` methods

## 2.0.0 beta 1 (2019-09-08)
#### New Feature
- hooks for Blocks: `useBlocks`, `useCreateBlock`, `useRetrieveBlock`, `useUpdateBlock`, `useDeleteBlock`
- hooks for Block Revisions: `useCreateBlockRevision`, `useRetrieveBlockRevision`
- hooks for Block Renderer: `useRetrieveBlockRenderer`
- hooks for Search: `useSearch`
- hooks for Themes: `useThemes`

#### Breaking Changes
- renamed Post Revisions hooks
- renamed all retrieve hooks

## 1.0.0 beta 3 / 1.0.0 (2019-08-12)
#### Repository Changes
- removed ES module
- switched back from `rollup` to `webpack`

## 1.0.0 beta 1 / 1.0.0 beta 2 (2019-08-09)
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
- hooks for Posts: `usePosts`, `useCreatePost`, `useRetrievePost`, `useUpdatePost`, `useDeletePost`
- hooks for Post Revisions: `useRevisions`, `useRetrieveRevision`, `useDeleteRevision`
- hooks for Categories: `useCategories`, `useCreateCategory`, `useRetrieveCategory`, `useUpdateCategory`, `useDeleteCategory`
- hooks for Tags: `useTags`, `useCreateTag`, `useRetrieveTag`, `useRetrieveTag`, `useDeleteTag`
- hooks for Pages: `usePages`, `useCreatePage`, `useRetrievePage`, `useUpdatePage`, `useDeletePage`
- hooks for Comments: `useComments`, `useCreateComment`, `useRetrieveComment`, `useUpdateComment`, `useDeleteComment`
- hooks for Taxonomies: `useTaxonomies`, `useRetrieveTaxonomy`
- hooks for Media: `useMedia`, `useCreateMedia`, `useRetrieveMedia`, `useUpdateMedia`, `useDeleteMedia`
- hooks for Users: `useUsers`, `useCreateUser`, `useRetrieveUser`, `useUpdateUser`, `useDeleteUser`
- hooks for Types: `useTypes`, `useRetrieveType`
- hooks for Statuses: `useStatuses`, `useRetrieveStatus`
- hooks for Settings: `useSettings`, `useUpdateSetting`
